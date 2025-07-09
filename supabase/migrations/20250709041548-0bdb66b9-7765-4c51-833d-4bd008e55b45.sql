-- Create products table for store product management
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  store_id UUID NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  compare_at_price DECIMAL(10,2),
  images TEXT[] DEFAULT '{}',
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  inventory_quantity INTEGER DEFAULT 0,
  track_inventory BOOLEAN DEFAULT true,
  sku TEXT,
  weight DECIMAL(8,2),
  dimensions JSONB,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'draft', 'archived')),
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create store_settings table for payment and integration settings
CREATE TABLE public.store_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  store_id UUID NOT NULL UNIQUE,
  razorpay_key_id TEXT,
  razorpay_key_secret TEXT,
  whatsapp_number TEXT,
  whatsapp_message TEXT DEFAULT 'Hi! I''m interested in your products.',
  whatsapp_enabled BOOLEAN DEFAULT false,
  currency TEXT DEFAULT 'INR',
  tax_rate DECIMAL(5,2) DEFAULT 0,
  shipping_rate DECIMAL(10,2) DEFAULT 0,
  free_shipping_threshold DECIMAL(10,2),
  analytics_id TEXT,
  custom_css TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create orders table for order management
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  store_id UUID NOT NULL,
  order_number TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  customer_address JSONB,
  items JSONB NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  tax_amount DECIMAL(10,2) DEFAULT 0,
  shipping_amount DECIMAL(10,2) DEFAULT 0,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  payment_id TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add foreign key relationships
ALTER TABLE public.products ADD CONSTRAINT products_store_id_fkey 
FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;

ALTER TABLE public.store_settings ADD CONSTRAINT store_settings_store_id_fkey 
FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;

ALTER TABLE public.orders ADD CONSTRAINT orders_store_id_fkey 
FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for products
CREATE POLICY "Users can manage products in their stores" ON public.products
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.stores 
    WHERE stores.id = products.store_id 
    AND stores.user_id = auth.uid()
  )
);

-- Create RLS policies for store_settings
CREATE POLICY "Users can manage their store settings" ON public.store_settings
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.stores 
    WHERE stores.id = store_settings.store_id 
    AND stores.user_id = auth.uid()
  )
);

-- Create RLS policies for orders
CREATE POLICY "Users can view orders from their stores" ON public.orders
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.stores 
    WHERE stores.id = orders.store_id 
    AND stores.user_id = auth.uid()
  )
);

CREATE POLICY "Users can update orders from their stores" ON public.orders
FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.stores 
    WHERE stores.id = orders.store_id 
    AND stores.user_id = auth.uid()
  )
);

-- Allow public to create orders (for customers)
CREATE POLICY "Anyone can create orders" ON public.orders
FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_products_store_id ON public.products(store_id);
CREATE INDEX idx_products_status ON public.products(status);
CREATE INDEX idx_orders_store_id ON public.orders(store_id);
CREATE INDEX idx_orders_status ON public.orders(status);
CREATE INDEX idx_orders_payment_status ON public.orders(payment_status);

-- Create updated_at triggers
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_store_settings_updated_at
BEFORE UPDATE ON public.store_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create unique constraint for order numbers per store
CREATE UNIQUE INDEX idx_orders_store_order_number ON public.orders(store_id, order_number);