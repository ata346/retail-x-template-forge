import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data: userData } = await supabaseClient.auth.getUser(token);
    const user = userData.user;
    
    if (!user) throw new Error("Unauthorized");

    const { storeId } = await req.json();

    // Get store data
    const { data: store, error: storeError } = await supabaseClient
      .from('stores')
      .select('*')
      .eq('id', storeId)
      .eq('user_id', user.id)
      .single();

    if (storeError) throw storeError;

    // Generate deployment URL
    const deploymentUrl = store.subdomain 
      ? `https://${store.subdomain}.retailx.app`
      : `https://store-${store.id}.retailx.app`;

    // Create deployment record
    const { data: deployment, error: deploymentError } = await supabaseClient
      .from('deployments')
      .insert({
        store_id: storeId,
        deployment_url: deploymentUrl,
        status: 'deployed',
      })
      .select()
      .single();

    if (deploymentError) throw deploymentError;

    // Update store status
    await supabaseClient
      .from('stores')
      .update({ is_published: true })
      .eq('id', storeId);

    return new Response(JSON.stringify({ 
      success: true, 
      deployment_url: deploymentUrl,
      deployment 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});