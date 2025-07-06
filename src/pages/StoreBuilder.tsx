import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Save, Globe, Upload, Settings, Palette } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface StoreData {
  id: string;
  name: string;
  subdomain: string | null;
  custom_domain: string | null;
  template_id: number | null;
  configuration: any;
  content: any;
  is_published: boolean;
}

const StoreBuilder = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [store, setStore] = useState<StoreData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);

  // Form states
  const [storeName, setStoreName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [customDomain, setCustomDomain] = useState('');
  const [storeDescription, setStoreDescription] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    if (storeId) {
      fetchStore();
    }
  }, [user, storeId, navigate]);

  const fetchStore = async () => {
    try {
      const { data, error } = await supabase
        .from('stores')
        .select('*')
        .eq('id', storeId)
        .eq('user_id', user?.id)
        .single();

      if (error) throw error;
      
      setStore(data);
      setStoreName(data.name);
      setSubdomain(data.subdomain || '');
      setCustomDomain(data.custom_domain || '');
      setStoreDescription((data.content as any)?.description || '');
      setPrimaryColor((data.configuration as any)?.primaryColor || '#3b82f6');
      setLogoUrl((data.content as any)?.logoUrl || '');
    } catch (error) {
      console.error('Error fetching store:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load store data",
      });
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!store) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from('stores')
        .update({
          name: storeName,
          subdomain: subdomain || null,
          custom_domain: customDomain || null,
          configuration: {
            ...store.configuration,
            primaryColor,
          },
          content: {
            ...store.content,
            description: storeDescription,
            logoUrl,
          },
          updated_at: new Date().toISOString(),
        })
        .eq('id', store.id);

      if (error) throw error;

      toast({
        title: "Saved",
        description: "Your store has been saved successfully",
      });
      
      await fetchStore(); // Refresh data
    } catch (error) {
      console.error('Error saving store:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save store",
      });
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async () => {
    if (!store) return;
    
    setPublishing(true);
    try {
      const { error } = await supabase
        .from('stores')
        .update({
          is_published: !store.is_published,
          updated_at: new Date().toISOString(),
        })
        .eq('id', store.id);

      if (error) throw error;

      // Create deployment record
      if (!store.is_published) {
        const deploymentUrl = subdomain 
          ? `https://${subdomain}.retailx.app`
          : `https://store-${store.id}.retailx.app`;
          
        await supabase
          .from('deployments')
          .insert({
            store_id: store.id,
            deployment_url: deploymentUrl,
            status: 'deployed',
          });
      }

      toast({
        title: store.is_published ? "Unpublished" : "Published",
        description: store.is_published 
          ? "Your store is now offline" 
          : "Your store is now live!",
      });
      
      await fetchStore(); // Refresh data
    } catch (error) {
      console.error('Error publishing store:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to publish store",
      });
    } finally {
      setPublishing(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('store-assets')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('store-assets')
        .getPublicUrl(fileName);

      setLogoUrl(publicUrl);
      
      // Save asset record
      await supabase
        .from('store_assets')
        .insert({
          store_id: store?.id,
          user_id: user.id,
          file_name: file.name,
          file_path: fileName,
          file_type: file.type,
          file_size: file.size,
        });

      toast({
        title: "Logo uploaded",
        description: "Your logo has been uploaded successfully",
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: "Failed to upload logo",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading store builder...</p>
        </div>
      </div>
    );
  }

  if (!store) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Store not found</h1>
          <Button onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-xl font-bold">{storeName}</h1>
              <p className="text-sm text-muted-foreground">Store Builder</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleSave} disabled={saving}>
              <Save className="h-4 w-4 mr-2" />
              {saving ? 'Saving...' : 'Save'}
            </Button>
            <Button 
              onClick={handlePublish} 
              disabled={publishing}
              variant={store.is_published ? "outline" : "default"}
            >
              <Globe className="h-4 w-4 mr-2" />
              {publishing 
                ? 'Processing...' 
                : store.is_published 
                  ? 'Unpublish' 
                  : 'Publish'
              }
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Store Information</CardTitle>
                <CardDescription>
                  Basic information about your store
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Store Name</Label>
                  <Input
                    id="store-name"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    placeholder="Enter your store name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subdomain">Subdomain</Label>
                  <div className="flex">
                    <Input
                      id="subdomain"
                      value={subdomain}
                      onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                      placeholder="yourstore"
                      className="rounded-r-none"
                    />
                    <div className="bg-muted px-3 py-2 border border-l-0 rounded-r-md text-sm text-muted-foreground">
                      .retailx.app
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="custom-domain">Custom Domain (Optional)</Label>
                  <Input
                    id="custom-domain"
                    value={customDomain}
                    onChange={(e) => setCustomDomain(e.target.value)}
                    placeholder="www.yourstore.com"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design">
            <Card>
              <CardHeader>
                <CardTitle>Design & Branding</CardTitle>
                <CardDescription>
                  Customize the look and feel of your store
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="logo-upload">Store Logo</Label>
                  <div className="flex items-center gap-4">
                    {logoUrl && (
                      <img 
                        src={logoUrl} 
                        alt="Store logo" 
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                    )}
                    <div>
                      <Input
                        id="logo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Button 
                        variant="outline" 
                        onClick={() => document.getElementById('logo-upload')?.click()}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Logo
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="primary-color"
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-16 h-10"
                    />
                    <Input
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      placeholder="#3b82f6"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Store Content</CardTitle>
                <CardDescription>
                  Manage your store's content and description
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="store-description">Store Description</Label>
                  <Textarea
                    id="store-description"
                    value={storeDescription}
                    onChange={(e) => setStoreDescription(e.target.value)}
                    placeholder="Describe your store and what you sell..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Store Settings</CardTitle>
                <CardDescription>
                  Configure your store settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Store Status</Label>
                    <p className="text-sm text-muted-foreground">
                      {store.is_published ? 'Your store is live' : 'Your store is in draft mode'}
                    </p>
                  </div>
                  <Switch
                    checked={store.is_published}
                    onCheckedChange={handlePublish}
                    disabled={publishing}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StoreBuilder;