import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Store, Settings, Globe, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface UserStore {
  id: string;
  name: string;
  subdomain: string | null;
  custom_domain: string | null;
  is_published: boolean;
  created_at: string;
  template_id: number | null;
}

const Dashboard = () => {
  const [stores, setStores] = useState<UserStore[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, profile, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchStores();
  }, [user, navigate]);

  const fetchStores = async () => {
    try {
      const { data, error } = await supabase
        .from('stores')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setStores(data || []);
    } catch (error) {
      console.error('Error fetching stores:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load your stores",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleCreateStore = () => {
    navigate('/templates');
  };

  const handleEditStore = (storeId: string) => {
    navigate(`/store-builder/${storeId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
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
            <Store className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Welcome back, {profile?.full_name || user?.email}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant={profile?.subscription_active ? "default" : "secondary"}>
              {profile?.subscription_tier || 'free'}
            </Badge>
            {profile?.role === 'admin' && (
              <Button variant="outline" onClick={() => navigate('/admin')}>
                <Users className="h-4 w-4 mr-2" />
                Admin Panel
              </Button>
            )}
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Stores</CardTitle>
              <Store className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stores.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published Stores</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stores.filter(store => store.is_published).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subscription</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">
                {profile?.subscription_tier || 'Free'}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stores Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Stores</h2>
          <Button onClick={handleCreateStore}>
            <Plus className="h-4 w-4 mr-2" />
            Create New Store
          </Button>
        </div>

        {stores.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Store className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <CardTitle className="mb-2">No stores yet</CardTitle>
              <CardDescription className="mb-6">
                Get started by creating your first online store
              </CardDescription>
              <Button onClick={handleCreateStore}>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Store
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <Card key={store.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{store.name}</CardTitle>
                    <Badge variant={store.is_published ? "default" : "secondary"}>
                      {store.is_published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <CardDescription>
                    {store.subdomain ? `${store.subdomain}.retailx.app` : 'No subdomain set'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleEditStore(store.id)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open(`/store/${store.id}`, '_blank')}
                      disabled={!store.is_published}
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      {store.is_published ? 'View Live' : 'Preview'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;