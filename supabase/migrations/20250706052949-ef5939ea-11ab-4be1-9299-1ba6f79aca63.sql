-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  subscription_tier TEXT DEFAULT 'free' CHECK (subscription_tier IN ('free', 'basic', 'premium', 'enterprise')),
  subscription_active BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create stores table
CREATE TABLE public.stores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  subdomain TEXT UNIQUE,
  custom_domain TEXT,
  template_id INTEGER,
  configuration JSONB DEFAULT '{}',
  content JSONB DEFAULT '{}',
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create store_assets table for file uploads
CREATE TABLE public.store_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID REFERENCES public.stores(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create store_templates table (enhanced from existing templates)
CREATE TABLE public.store_templates (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  image_url TEXT,
  configuration JSONB DEFAULT '{}',
  is_premium BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create deployments table
CREATE TABLE public.deployments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID REFERENCES public.stores(id) ON DELETE CASCADE,
  deployment_url TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'deployed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deployments ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- Stores policies
CREATE POLICY "Users can view own stores" ON public.stores
  FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can create stores" ON public.stores
  FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can update own stores" ON public.stores
  FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "Users can delete own stores" ON public.stores
  FOR DELETE USING (user_id = auth.uid());

-- Store assets policies
CREATE POLICY "Users can view own store assets" ON public.store_assets
  FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can upload assets to own stores" ON public.store_assets
  FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Users can delete own store assets" ON public.store_assets
  FOR DELETE USING (user_id = auth.uid());

-- Store templates policies (public read)
CREATE POLICY "Anyone can view templates" ON public.store_templates
  FOR SELECT USING (true);

-- Deployments policies
CREATE POLICY "Users can view own deployments" ON public.deployments
  FOR SELECT USING (EXISTS (SELECT 1 FROM public.stores WHERE stores.id = deployments.store_id AND stores.user_id = auth.uid()));

-- Admin policies
CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (EXISTS (SELECT 1 FROM public.profiles WHERE profiles.user_id = auth.uid() AND profiles.role = 'admin'));
CREATE POLICY "Admins can update all profiles" ON public.profiles
  FOR UPDATE USING (EXISTS (SELECT 1 FROM public.profiles WHERE profiles.user_id = auth.uid() AND profiles.role = 'admin'));

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1))
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample templates
INSERT INTO public.store_templates (name, description, category, image_url, is_premium) VALUES
('Fashion Forward', 'Modern and sleek template perfect for clothing brands', 'Fashion', 'https://images.unsplash.com/photo-1609146708541-adbf8e3b8151?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', false),
('Tech Hub', 'Showcase your tech products with this innovative design', 'Electronics', 'https://images.unsplash.com/photo-1587614382346-4ec70e3b8151?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', false),
('Beauty Glow', 'Elegant template for beauty and cosmetic products', 'Beauty', 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', false),
('Home Elegance', 'Showcase furniture and home decor with style', 'Home', 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80', true),
('Foodie Delight', 'Perfect for restaurants and food delivery services', 'Food', 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80', true);

-- Create storage bucket for store assets
INSERT INTO storage.buckets (id, name, public) VALUES ('store-assets', 'store-assets', true);

-- Storage policies
CREATE POLICY "Users can upload their own store assets" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'store-assets' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view their own store assets" ON storage.objects
  FOR SELECT USING (bucket_id = 'store-assets' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own store assets" ON storage.objects
  FOR DELETE USING (bucket_id = 'store-assets' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Public can view published store assets" ON storage.objects
  FOR SELECT USING (bucket_id = 'store-assets');