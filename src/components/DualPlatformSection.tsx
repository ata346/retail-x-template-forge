
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Store, Globe, Zap, Users, TrendingUp, Shield } from 'lucide-react';

const DualPlatformSection: React.FC = () => {
  const platformTypes = [{
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Static Business Websites",
    description: "Professional static business websites, portfolios, and landing pages built by our AI system with advanced SEO optimization and lightning-fast performance",
    features: ["Static Corporate Branding & Portfolio", "Lead Generation & Contact Forms", "SEO-Optimized Static Content", "Mobile-Responsive Static Design", "Ultra-Fast Loading & Performance"],
    color: "blue"
  }, {
    icon: <Store className="h-8 w-8 text-purple-600" />,
    title: "Static E-commerce Websites",
    description: "High-performance static e-commerce stores built by our AI system with intelligent automation and superior speed for online business success",
    features: ["Static Product Catalog & Inventory", "Secure Payment Processing", "Order Management & Analytics", "AI-Powered Static Automation", "Multi-Channel Sales Integration"],
    color: "purple"
  }];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One AI System, Two Static Website Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Retail X AI system builds both static business websites and static e-commerce platforms, 
            all with advanced automation and comprehensive SEO optimization for superior performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {platformTypes.map((platform, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  {platform.icon}
                  <h3 className="text-xl sm:text-2xl font-bold ml-3 text-gray-900">
                    {platform.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {platform.description}
                </p>
                <ul className="space-y-3">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full bg-${platform.color}-500 mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Zap className="h-10 w-10 text-yellow-500 mb-3" />
              <h4 className="font-semibold text-lg mb-2">AI-Powered Static Automation</h4>
              <p className="text-sm text-gray-600">60+ automated workflows for static website optimization</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-10 w-10 text-green-500 mb-3" />
              <h4 className="font-semibold text-lg mb-2">Static SEO Optimization</h4>
              <p className="text-sm text-gray-600">Advanced SEO built into every static template and page</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-10 w-10 text-blue-500 mb-3" />
              <h4 className="font-semibold text-lg mb-2">Static Website Security</h4>
              <p className="text-sm text-gray-600">Enhanced security for all static website types</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPlatformSection;
