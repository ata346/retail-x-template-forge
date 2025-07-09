import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { orderData, storeId } = await req.json();

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

    // Get store settings for Razorpay credentials
    const { data: storeSettings, error: settingsError } = await supabase
      .from('store_settings')
      .select('razorpay_key_id, razorpay_key_secret, currency, tax_rate, shipping_rate')
      .eq('store_id', storeId)
      .single();

    if (settingsError || !storeSettings?.razorpay_key_id) {
      throw new Error('Razorpay not configured for this store');
    }

    // Calculate order totals
    const subtotal = orderData.items.reduce((sum: number, item: any) => 
      sum + (item.price * item.quantity), 0
    );
    
    const taxAmount = subtotal * (storeSettings.tax_rate / 100);
    const shippingAmount = storeSettings.shipping_rate || 0;
    const totalAmount = subtotal + taxAmount + shippingAmount;

    // Generate unique order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Create order in database
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        store_id: storeId,
        order_number: orderNumber,
        customer_name: orderData.customerInfo.name,
        customer_email: orderData.customerInfo.email,
        customer_phone: orderData.customerInfo.phone,
        customer_address: orderData.customerInfo.address,
        items: orderData.items,
        subtotal: subtotal,
        tax_amount: taxAmount,
        shipping_amount: shippingAmount,
        total_amount: totalAmount,
        status: 'pending',
        payment_status: 'pending'
      })
      .select()
      .single();

    if (orderError) {
      throw new Error('Failed to create order');
    }

    // Create Razorpay order
    const razorpayOrderData = {
      amount: Math.round(totalAmount * 100), // Convert to paise
      currency: storeSettings.currency || 'INR',
      receipt: orderNumber,
      notes: {
        order_id: order.id,
        store_id: storeId
      }
    };

    const razorpayResponse = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${storeSettings.razorpay_key_id}:${storeSettings.razorpay_key_secret}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(razorpayOrderData),
    });

    if (!razorpayResponse.ok) {
      throw new Error('Failed to create Razorpay order');
    }

    const razorpayOrder = await razorpayResponse.json();

    return new Response(
      JSON.stringify({
        orderId: order.id,
        razorpayOrderId: razorpayOrder.id,
        amount: totalAmount,
        currency: storeSettings.currency || 'INR',
        keyId: storeSettings.razorpay_key_id
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error creating payment:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    );
  }
})