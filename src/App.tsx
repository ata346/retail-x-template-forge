import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavbarWrapper from "./components/NavbarWrapper";
import Footer from "./components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import DesignRequirements from "./pages/DesignRequirements";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Pricing from "./pages/Pricing";
import Careers from "./pages/Careers";
import Templates from "./pages/Templates";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import StoreBuilder from "./pages/StoreBuilder";
import AdminPanel from "./pages/AdminPanel";
import ProductManager from "./pages/ProductManager";
import StoreSettings from "./pages/StoreSettings";
import OrderManager from "./pages/OrderManager";
import StoreFrontend from "./pages/StoreFrontend";
import { ThemeProvider } from "./components/ThemeProvider";
import ViewportOptimizer from "./components/ViewportOptimizer";
import { ProgressProvider } from "./contexts/ProgressContext";
import GlobalProgressBar from "./components/GlobalProgressBar";
import { AuthProvider } from "./contexts/AuthContext";

// Scroll to top when navigation happens
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <ProgressProvider>
              <TooltipProvider>
                <ViewportOptimizer />
                <ScrollToTop />
                <GlobalProgressBar />
                <Toaster />
                <Sonner />
                <div className="flex flex-col min-h-screen">
                  <NavbarWrapper />
                  <main className="flex-grow pt-16 critical-above-fold">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/templates" element={<Templates />} />
                      <Route path="/design-requirements/:templateId" element={<DesignRequirements />} />
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/terms" element={<Terms />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/auth" element={<Auth />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/store-builder/:storeId" element={<StoreBuilder />} />
                      <Route path="/admin" element={<AdminPanel />} />
                      <Route path="/products/:storeId" element={<ProductManager />} />
                      <Route path="/store-settings/:storeId" element={<StoreSettings />} />
                      <Route path="/orders/:storeId" element={<OrderManager />} />
                      <Route path="/store/:storeId" element={<StoreFrontend />} />
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </TooltipProvider>
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
