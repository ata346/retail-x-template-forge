import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Package, Eye, ShoppingCart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  customer_address: any;
  items: any;
  subtotal: number;
  tax_amount: number;
  shipping_amount: number;
  total_amount: number;
  status: string;
  payment_status: string;
  payment_id: string | null;
  notes: string | null;
  created_at: string;
}

const OrderManager = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    if (storeId) {
      fetchOrders();
    }
  }, [user, storeId, navigate]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('store_id', storeId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load orders",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, status: Order['status']) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', orderId);

      if (error) throw error;

      toast({
        title: "Order updated",
        description: "Order status has been updated successfully",
      });
      
      fetchOrders();
    } catch (error) {
      console.error('Error updating order:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update order status",
      });
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'confirmed': return 'default';
      case 'processing': return 'default';
      case 'shipped': return 'default';
      case 'delivered': return 'default';
      case 'cancelled': return 'destructive';
      default: return 'secondary';
    }
  };

  const getPaymentStatusColor = (status: Order['payment_status']) => {
    switch (status) {
      case 'paid': return 'default';
      case 'pending': return 'secondary';
      case 'failed': return 'destructive';
      case 'refunded': return 'secondary';
      default: return 'secondary';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading orders...</p>
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
              <h1 className="text-xl font-bold">Order Manager</h1>
              <p className="text-sm text-muted-foreground">Manage your store orders</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">Orders ({orders.length})</h2>
            
            {orders.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <CardTitle className="mb-2">No orders yet</CardTitle>
                  <CardDescription>
                    Orders will appear here when customers make purchases
                  </CardDescription>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <Card 
                    key={order.id} 
                    className={`cursor-pointer transition-colors ${
                      selectedOrder?.id === order.id ? 'ring-2 ring-primary' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedOrder(order)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">#{order.order_number}</CardTitle>
                          <CardDescription>
                            {order.customer_name} • {formatDate(order.created_at)}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold">₹{order.total_amount}</div>
                          <div className="flex gap-2 mt-1">
                            <Badge variant={getStatusColor(order.status)}>
                              {order.status}
                            </Badge>
                            <Badge variant={getPaymentStatusColor(order.payment_status)}>
                              {order.payment_status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-sm text-muted-foreground">
                        {Array.isArray(order.items) && order.items.length > 0 && (
                          <span>
                            {order.items.length} item{order.items.length > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Order Details */}
          <div className="space-y-4">
            {selectedOrder ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      Order Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Order #{selectedOrder.order_number}</h4>
                      <p className="text-sm text-muted-foreground">
                        Created: {formatDate(selectedOrder.created_at)}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Customer</h4>
                      <div className="text-sm space-y-1">
                        <p>{selectedOrder.customer_name}</p>
                        <p>{selectedOrder.customer_email}</p>
                        {selectedOrder.customer_phone && (
                          <p>{selectedOrder.customer_phone}</p>
                        )}
                      </div>
                    </div>

                    {selectedOrder.customer_address && (
                      <div>
                        <h4 className="font-semibold mb-2">Shipping Address</h4>
                        <div className="text-sm text-muted-foreground">
                          {typeof selectedOrder.customer_address === 'object' ? (
                            <div>
                              <p>{selectedOrder.customer_address.street}</p>
                              <p>{selectedOrder.customer_address.city}, {selectedOrder.customer_address.state}</p>
                              <p>{selectedOrder.customer_address.zipCode}</p>
                            </div>
                          ) : (
                            <p>{selectedOrder.customer_address}</p>
                          )}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold mb-2">Order Status</h4>
                      <Select
                        value={selectedOrder.status}
                        onValueChange={(value: Order['status']) => 
                          updateOrderStatus(selectedOrder.id, value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Payment</h4>
                      <div className="space-y-2">
                        <Badge variant={getPaymentStatusColor(selectedOrder.payment_status)}>
                          {selectedOrder.payment_status}
                        </Badge>
                        {selectedOrder.payment_id && (
                          <p className="text-sm text-muted-foreground">
                            Payment ID: {selectedOrder.payment_id}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{selectedOrder.subtotal}</span>
                    </div>
                    {selectedOrder.tax_amount > 0 && (
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>₹{selectedOrder.tax_amount}</span>
                      </div>
                    )}
                    {selectedOrder.shipping_amount > 0 && (
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>₹{selectedOrder.shipping_amount}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-semibold border-t pt-2">
                      <span>Total</span>
                      <span>₹{selectedOrder.total_amount}</span>
                    </div>
                  </CardContent>
                </Card>

                {selectedOrder.items && Array.isArray(selectedOrder.items) && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedOrder.items.map((item: any, index: number) => (
                          <div key={index} className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Qty: {item.quantity}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">₹{item.price * item.quantity}</p>
                              <p className="text-sm text-muted-foreground">
                                ₹{item.price} each
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Select an order to view details
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManager;