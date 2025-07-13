import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import WhatsAppWidget from '@/components/WhatsAppWidget';

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  compare_at_price: number | null;
  images: string[];
  category: string | null;
  tags: string[];
  inventory_quantity: number;
  status: string;
}

interface Store {
  id: string;
  name: string;
  content: any;
  configuration: any;
}

interface StoreSettings {
  whatsapp_enabled: boolean;
  whatsapp_number: string | null;
  whatsapp_message: string;
  currency: string;
  tax_rate: number;
  shipping_rate: number;
  razorpay_key_id: string | null;
}

interface CartItem extends Product {
  quantity: number;
}

const StoreFrontend = () => {
  const { storeId } = useParams();
  const { toast } = useToast();
  
  const [store, setStore] = useState<Store | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [settings, setSettings] = useState<StoreSettings | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Customer form
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  useEffect(() => {
    if (storeId) {
      fetchStoreData();
    }
  }, [storeId]);

  const fetchStoreData = async () => {
    try {
      // Fetch store details (allow both published and unpublished for demo)
      const { data: storeData, error: storeError } = await supabase
        .from('stores')
        .select('*')
        .eq('id', storeId)
        .single();

      if (storeError) throw new Error('Store not found');
      
      setStore(storeData);

      // Fetch products
      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select('*')
        .eq('store_id', storeId)
        .eq('status', 'active');

      if (productsError) throw productsError;
      setProducts(productsData || []);

      // Fetch settings
      const { data: settingsData, error: settingsError } = await supabase
        .from('store_settings')
        .select('*')
        .eq('store_id', storeId)
        .single();

      if (settingsError && settingsError.code !== 'PGRST116') {
        // Create default settings if none exist
        const defaultSettings = {
          store_id: storeId,
          currency: 'INR',
          tax_rate: 0,
          shipping_rate: 0,
          whatsapp_enabled: false,
          whatsapp_message: "Hi! I'm interested in your products."
        };
        
        const { data: newSettings, error: createError } = await supabase
          .from('store_settings')
          .insert(defaultSettings)
          .select()
          .single();
          
        if (!createError) {
          setSettings(newSettings);
        }
      } else {
        setSettings(settingsData);
      }

    } catch (error) {
      console.error('Error fetching store data:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load store",
      });
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart`,
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== productId));
      return;
    }
    
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getCartTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * ((settings?.tax_rate || 0) / 100);
    const shipping = settings?.shipping_rate || 0;
    return {
      subtotal,
      tax,
      shipping,
      total: subtotal + tax + shipping
    };
  };

  const handleWhatsAppOrder = () => {
    if (!settings?.whatsapp_enabled || !settings?.whatsapp_number) {
      toast({
        variant: "destructive",
        title: "WhatsApp not available",
        description: "WhatsApp ordering is not configured for this store",
      });
      return;
    }

    const orderText = cart.map(item => 
      `${item.name} - Qty: ${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');
    
    const totals = getCartTotal();
    const message = `${settings.whatsapp_message}\n\nOrder Details:\n${orderText}\n\nTotal: ₹${totals.total.toFixed(2)}`;
    
    const whatsappUrl = `https://wa.me/${settings.whatsapp_number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCheckout = async () => {
    try {
      const totals = getCartTotal();
      const orderId = `ORD-${Date.now()}`;
      
      // Create order record
      const { error } = await supabase
        .from('orders')
        .insert({
          store_id: storeId,
          order_number: orderId,
          customer_name: customerInfo.name,
          customer_email: customerInfo.email,
          customer_phone: customerInfo.phone,
          customer_address: customerInfo.address,
          items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
          })),
          subtotal: totals.subtotal,
          tax_amount: totals.tax,
          shipping_amount: totals.shipping,
          total_amount: totals.total,
          payment_status: 'pending',
          status: 'confirmed'
        });

      if (error) throw error;

      toast({
        title: "Order placed successfully!",
        description: `Order #${orderId} has been created`,
      });
      
      setCart([]);
      setShowCheckout(false);
      setShowCart(false);

    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        variant: "destructive",
        title: "Checkout failed",
        description: "Please try again or contact support",
      });
    }
  };

  const applyThemeStyles = () => {
    const theme = store?.configuration?.theme || 'default';
    
    switch (theme) {
      case 'sketch':
        return 'bg-gray-50 text-gray-900';
      case 'colorful':
        return 'bg-gradient-to-br from-purple-50 to-pink-50';
      case 'dark-neon':
        return 'bg-gray-900 text-green-400';
      default:
        return 'bg-background';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading store...</p>
        </div>
      </div>
    );
  }

  if (!store) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Store not found</h1>
          <p className="text-muted-foreground">This store is not available.</p>
        </div>
      </div>
    );
  }

  const totals = getCartTotal();

  return (
    <div className={`min-h-screen ${applyThemeStyles()}`}>
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              {store.content?.logoUrl && (
                <img 
                  src={store.content.logoUrl} 
                  alt={`${store.name} logo`}
                  className="h-12 w-auto mb-2"
                />
              )}
              <h1 className="text-3xl font-bold">{store.name}</h1>
              {store.content?.description && (
                <p className="text-primary-foreground/80 mt-2">{store.content.description}</p>
              )}
            </div>
            <Button
              variant="secondary"
              onClick={() => setShowCart(true)}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </Button>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">No products available</h2>
            <p className="text-muted-foreground">This store doesn't have any products yet.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-8 text-center">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    {product.category && (
                      <Badge variant="outline">{product.category}</Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    {product.description && (
                      <CardDescription className="mb-4 line-clamp-2">
                        {product.description}
                      </CardDescription>
                    )}
                    
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-xl font-bold">
                          {settings?.currency === 'USD' ? '$' : '₹'}{product.price}
                        </span>
                        {product.compare_at_price && (
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            {settings?.currency === 'USD' ? '$' : '₹'}{product.compare_at_price}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Button onClick={() => addToCart(product)} className="w-full">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Cart Dialog */}
      <Dialog open={showCart} onOpenChange={setShowCart}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Shopping Cart</DialogTitle>
          </DialogHeader>
          
          {cart.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {settings?.currency === 'USD' ? '$' : '₹'}{item.price} each
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{settings?.currency === 'USD' ? '$' : '₹'}{totals.subtotal.toFixed(2)}</span>
                </div>
                {totals.tax > 0 && (
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>{settings?.currency === 'USD' ? '$' : '₹'}{totals.tax.toFixed(2)}</span>
                  </div>
                )}
                {totals.shipping > 0 && (
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>{settings?.currency === 'USD' ? '$' : '₹'}{totals.shipping.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>{settings?.currency === 'USD' ? '$' : '₹'}{totals.total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button onClick={() => setShowCheckout(true)} className="w-full">
                  Proceed to Checkout
                </Button>
                {settings?.whatsapp_enabled && settings?.whatsapp_number && (
                  <Button 
                    onClick={handleWhatsAppOrder} 
                    variant="outline" 
                    className="w-full"
                  >
                    Order via WhatsApp
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Checkout Dialog */}
      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
            <DialogDescription>
              Please fill in your details to complete the order
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="street">Street Address *</Label>
              <Input
                id="street"
                value={customerInfo.address.street}
                onChange={(e) => setCustomerInfo({ 
                  ...customerInfo, 
                  address: { ...customerInfo.address, street: e.target.value }
                })}
                required
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={customerInfo.address.city}
                  onChange={(e) => setCustomerInfo({ 
                    ...customerInfo, 
                    address: { ...customerInfo.address, city: e.target.value }
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={customerInfo.address.state}
                  onChange={(e) => setCustomerInfo({ 
                    ...customerInfo, 
                    address: { ...customerInfo.address, state: e.target.value }
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  value={customerInfo.address.zipCode}
                  onChange={(e) => setCustomerInfo({ 
                    ...customerInfo, 
                    address: { ...customerInfo.address, zipCode: e.target.value }
                  })}
                  required
                />
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>{settings?.currency === 'USD' ? '$' : '₹'}{totals.total.toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              onClick={handleCheckout} 
              className="w-full"
              disabled={!customerInfo.name || !customerInfo.email || !customerInfo.phone}
            >
              Place Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* WhatsApp Widget */}
      {settings?.whatsapp_enabled && settings?.whatsapp_number && (
        <WhatsAppWidget
          phoneNumber={settings.whatsapp_number}
          message={settings.whatsapp_message}
        />
      )}

      {/* Footer */}
      <footer className="bg-muted mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 {store.name}. Powered by RetailX.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default StoreFrontend;