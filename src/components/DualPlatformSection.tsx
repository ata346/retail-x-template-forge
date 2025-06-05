import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, Globe, Zap, Users, TrendingUp, Shield } from 'lucide-react';
const DualPlatformSection: React.FC = () => {
  const platformTypes = [{
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Static Business Websites",
    description: "Professional corporate websites, portfolios, and business landing pages with advanced SEO optimization",
    features: ["Corporate Branding & Portfolio Showcase", "Lead Generation & Contact Forms", "SEO-Optimized Content Management", "Mobile-Responsive Design Templates", "Fast Loading & Performance Optimization"],
    color: "blue"
  }, {
    icon: <Store className="h-8 w-8 text-purple-600" />,
    title: "E-commerce Websites",
    description: "Full-featured online stores with AI-powered automation and intelligent business workflows",
    features: ["Product Catalog & Inventory Management", "Shopping Cart & Payment Processing", "Order Management & Customer Analytics", "AI-Powered Automation Workflows", "Multi-Channel Sales Integration"],
    color: "purple"
  }];
  return <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One Platform, Two Powerful Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Retail X supports both static business websites and dynamic e-commerce platforms, 
            all with advanced AI automation and comprehensive SEO optimization built-in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {platformTypes.map((platform, index) => <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              
            </Card>)}
        </div>

        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
          
        </div>
      </div>
    </section>;
};
export default DualPlatformSection;