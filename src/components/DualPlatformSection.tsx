import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, Globe, Zap, Users, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react';
const DualPlatformSection: React.FC = () => {
  const platformTypes = [{
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Static Business Websites",
    description: "Professional corporate websites, portfolios, and business landing pages with advanced SEO optimization",
    features: ["Corporate Branding & Portfolio Showcase", "Lead Generation & Contact Forms", "SEO-Optimized Content Management", "Mobile-Responsive Design Templates", "Fast Loading & Performance Optimization"],
    color: "blue",
    pricing: "Starting at ₹499",
    ctaText: "Build Business Site"
  }, {
    icon: <Store className="h-8 w-8 text-purple-600" />,
    title: "E-commerce Websites",
    description: "Full-featured online stores with AI-powered automation and intelligent business workflows",
    features: ["Product Catalog & Inventory Management", "Shopping Cart & Payment Processing", "Order Management & Customer Analytics", "AI-Powered Automation Workflows", "Multi-Channel Sales Integration"],
    color: "purple",
    pricing: "Starting at ₹999",
    ctaText: "Build Online Store"
  }];
  const stats = [{
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    label: "3 Hour Setup",
    value: "Lightning Fast"
  }, {
    icon: <Users className="h-6 w-6 text-green-500" />,
    label: "500+ Clients",
    value: "Trusted Platform"
  }, {
    icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
    label: "98% Uptime",
    value: "Reliable Service"
  }, {
    icon: <Shield className="h-6 w-6 text-red-500" />,
    label: "Secure",
    value: "Enterprise Grade"
  }];
  return <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One Platform, Two Powerful Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Retail X supports both static business websites and dynamic e-commerce platforms, 
            all with advanced AI automation and comprehensive SEO optimization built-in.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-sm font-semibold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {platformTypes.map((platform, index) => <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-${platform.color}-50`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                      {platform.title}
                    </h3>
                    <p className="text-base lg:text-lg font-semibold text-green-600">
                      {platform.pricing}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {platform.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {platform.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>)}
                </div>
                
                
              </CardContent>
            </Card>)}
        </div>

        {/* Trust Indicators */}
        <div className="text-center bg-white rounded-xl p-6 lg:p-8 shadow-sm">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
            Why 500+ Businesses Choose Retail X
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-brand-purple mb-2">3 Hours</div>
              <div className="text-sm text-gray-600">Average setup time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-purple mb-2">98%</div>
              <div className="text-sm text-gray-600">Customer satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-purple mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DualPlatformSection;