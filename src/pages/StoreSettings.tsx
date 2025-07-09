import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save, CreditCard, MessageSquare, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface StoreSettings {
  id?: string;
  store_id: string;
  razorpay_key_id: string | null;
  razorpay_key_secret: string | null;
  whatsapp_number: string | null;
  whatsapp_message: string;
  whatsapp_enabled: boolean;
  currency: string;
  tax_rate: number;
  shipping_rate: number;
  free_shipping_threshold: number | null;
  analytics_id: string | null;
  custom_css: string | null;
}

const StoreSettings = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [settings, setSettings] = useState<StoreSettings>({
    store_id: storeId || '',
    razorpay_key_id: '',
    razorpay_key_secret: '',
    whatsapp_number: '',
    whatsapp_message: "Hi! I'm interested in your products.",
    whatsapp_enabled: false,
    currency: 'INR',
    tax_rate: 0,
    shipping_rate: 0,
    free_shipping_threshold: null,
    analytics_id: '',
    custom_css: ''
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    if (storeId) {
      fetchSettings();
    }
  }, [user, storeId, navigate]);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('store_settings')
        .select('*')
        .eq('store_id', storeId)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setSettings({
          ...data,
          razorpay_key_secret: data.razorpay_key_secret || '',
          whatsapp_number: data.whatsapp_number || '',
          analytics_id: data.analytics_id || '',
          custom_css: data.custom_css || ''
        });
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load store settings",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('store_settings')
        .upsert({
          store_id: storeId,
          razorpay_key_id: settings.razorpay_key_id || null,
          razorpay_key_secret: settings.razorpay_key_secret || null,
          whatsapp_number: settings.whatsapp_number || null,
          whatsapp_message: settings.whatsapp_message,
          whatsapp_enabled: settings.whatsapp_enabled,
          currency: settings.currency,
          tax_rate: settings.tax_rate,
          shipping_rate: settings.shipping_rate,
          free_shipping_threshold: settings.free_shipping_threshold,
          analytics_id: settings.analytics_id || null,
          custom_css: settings.custom_css || null,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'store_id'
        });

      if (error) throw error;

      toast({
        title: "Settings saved",
        description: "Your store settings have been saved successfully",
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save settings",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading settings...</p>
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
            <Button variant="ghost" onClick={() => navigate(`/store-builder/${storeId}`)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Store Builder
            </Button>
            <div>
              <h1 className="text-xl font-bold">Store Settings</h1>
              <p className="text-sm text-muted-foreground">Configure your store integrations</p>
            </div>
          </div>
          <Button onClick={handleSave} disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Save Settings'}
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="payment" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Settings
                </CardTitle>
                <CardDescription>
                  Configure Razorpay payment gateway for your store
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="razorpay_key_id">Razorpay Key ID</Label>
                  <Input
                    id="razorpay_key_id"
                    value={settings.razorpay_key_id || ''}
                    onChange={(e) => setSettings({ ...settings, razorpay_key_id: e.target.value })}
                    placeholder="rzp_test_..."
                  />
                  <p className="text-sm text-muted-foreground">
                    Your Razorpay publishable key ID
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="razorpay_key_secret">Razorpay Key Secret</Label>
                  <Input
                    id="razorpay_key_secret"
                    type="password"
                    value={settings.razorpay_key_secret || ''}
                    onChange={(e) => setSettings({ ...settings, razorpay_key_secret: e.target.value })}
                    placeholder="Enter your secret key"
                  />
                  <p className="text-sm text-muted-foreground">
                    Your Razorpay secret key (kept secure)
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    value={settings.currency}
                    onValueChange={(value) => setSettings({ ...settings, currency: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="INR">Indian Rupee (₹)</SelectItem>
                      <SelectItem value="USD">US Dollar ($)</SelectItem>
                      <SelectItem value="EUR">Euro (€)</SelectItem>
                      <SelectItem value="GBP">British Pound (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax_rate">Tax Rate (%)</Label>
                  <Input
                    id="tax_rate"
                    type="number"
                    step="0.01"
                    value={settings.tax_rate}
                    onChange={(e) => setSettings({ ...settings, tax_rate: parseFloat(e.target.value) || 0 })}
                    placeholder="18.00"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="whatsapp">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Integration
                </CardTitle>
                <CardDescription>
                  Add WhatsApp chat widget to your store
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={settings.whatsapp_enabled}
                    onCheckedChange={(checked) => setSettings({ ...settings, whatsapp_enabled: checked })}
                  />
                  <Label>Enable WhatsApp Chat Widget</Label>
                </div>
                
                {settings.whatsapp_enabled && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp_number">WhatsApp Number</Label>
                      <Input
                        id="whatsapp_number"
                        value={settings.whatsapp_number || ''}
                        onChange={(e) => setSettings({ ...settings, whatsapp_number: e.target.value })}
                        placeholder="+919876543210"
                      />
                      <p className="text-sm text-muted-foreground">
                        Include country code (e.g., +91 for India)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp_message">Default Message</Label>
                      <Textarea
                        id="whatsapp_message"
                        value={settings.whatsapp_message}
                        onChange={(e) => setSettings({ ...settings, whatsapp_message: e.target.value })}
                        rows={3}
                      />
                      <p className="text-sm text-muted-foreground">
                        Default message when customers click the WhatsApp button
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Settings</CardTitle>
                <CardDescription>
                  Configure shipping rates and policies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="shipping_rate">Shipping Rate</Label>
                  <Input
                    id="shipping_rate"
                    type="number"
                    step="0.01"
                    value={settings.shipping_rate}
                    onChange={(e) => setSettings({ ...settings, shipping_rate: parseFloat(e.target.value) || 0 })}
                    placeholder="50.00"
                  />
                  <p className="text-sm text-muted-foreground">
                    Fixed shipping rate for all orders
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="free_shipping_threshold">Free Shipping Threshold</Label>
                  <Input
                    id="free_shipping_threshold"
                    type="number"
                    step="0.01"
                    value={settings.free_shipping_threshold || ''}
                    onChange={(e) => setSettings({ 
                      ...settings, 
                      free_shipping_threshold: e.target.value ? parseFloat(e.target.value) : null 
                    })}
                    placeholder="500.00"
                  />
                  <p className="text-sm text-muted-foreground">
                    Minimum order value for free shipping (leave empty to disable)
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Advanced Settings
                </CardTitle>
                <CardDescription>
                  Analytics and custom styling options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="analytics_id">Google Analytics ID</Label>
                  <Input
                    id="analytics_id"
                    value={settings.analytics_id || ''}
                    onChange={(e) => setSettings({ ...settings, analytics_id: e.target.value })}
                    placeholder="G-XXXXXXXXXX"
                  />
                  <p className="text-sm text-muted-foreground">
                    Your Google Analytics measurement ID
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="custom_css">Custom CSS</Label>
                  <Textarea
                    id="custom_css"
                    value={settings.custom_css || ''}
                    onChange={(e) => setSettings({ ...settings, custom_css: e.target.value })}
                    rows={6}
                    placeholder="/* Add your custom CSS here */"
                  />
                  <p className="text-sm text-muted-foreground">
                    Add custom CSS to style your store
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StoreSettings;