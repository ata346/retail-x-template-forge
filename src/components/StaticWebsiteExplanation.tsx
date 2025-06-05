import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Zap, Shield, DollarSign, Wrench, Globe, Search, Server } from 'lucide-react';
const StaticWebsiteExplanation: React.FC = () => {
  const staticEcommerceFeatures = [{
    feature: "Speed",
    benefit: "Lightning-fast loading keeps customers engaged.",
    icon: <Zap className="h-5 w-5 text-yellow-500" />
  }, {
    feature: "Hosting",
    benefit: "Hosted on affordable, reliable platforms (Netlify, Vercel,Hostiger,Godaddy).",
    icon: <Server className="h-5 w-5 text-blue-500" />
  }, {
    feature: "Database",
    benefit: "No live database,",
    icon: <Shield className="h-5 w-5 text-green-500" />
  }, {
    feature: "Security",
    benefit: "Reduced risks like SQL injection—keeps your store safe.",
    icon: <Shield className="h-5 w-5 text-red-500" />
  }, {
    feature: "Maintenance",
    benefit: "Minimal upkeep after launch; focus on growing your business.",
    icon: <Wrench className="h-5 w-5 text-purple-500" />
  }, {
    feature: "Cost",
    benefit: "Affordable solution without heavy infrastructure expenses.",
    icon: <DollarSign className="h-5 w-5 text-green-600" />
  }, {
    feature: "Updates",
    benefit: "Easy content/products images updates with simple redeploys.",
    icon: <Globe className="h-5 w-5 text-indigo-500" />
  }, {
    feature: "Features",
    benefit: "Mobile friendly and Injected Keywords based your business types",
    icon: <Check className="h-5 w-5 text-teal-500" />
  }, {
    feature: "Best For",
    benefit: "Small businesses with limited products like : Handmade crafts and art sellers,Small-scale food or beverage brands,Personalized gift shops",
    icon: <Globe className="h-5 w-5 text-orange-500" />
  }, {
    feature: "AI Friendly",
    benefit: "Optimized for AI engines to drive organic reach.",
    icon: <Search className="h-5 w-5 text-pink-500" />
  }];
  const staticWebsiteBenefits = [{
    title: "Blazing Fast Loading",
    description: "Since pages are pre-rendered, your service site loads instantly, giving visitors a smooth experience and better SEO rankings."
  }, {
    title: "Low Hosting Costs",
    description: "Static sites can be hosted on affordable platforms without expensive servers."
  }, {
    title: "High Security",
    description: "No live database means fewer risks of hacks or downtime."
  }, {
    title: "Easy Maintenance",
    description: "Minimal ongoing updates needed — perfect if your services and pricing don't change daily."
  }];
  return <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Static E-commerce Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Static E-commerce Websites with Retail X AI System
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
              Retail X builds Static eCommerce Websites—pre-built online stores where each page is generated ahead of time 
              and delivered instantly to your customers. No live database or backend processing slows down your site.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 text-brand-purple">
              Why Choose Static eCommerce with Retail X?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {staticEcommerceFeatures.map((item, index) => <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.feature}</h4>
                    <p className="text-sm text-gray-600">{item.benefit}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Static Website Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is a Static Website?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
              Retail X builds static websites — fast, secure, and pre-built online stores or service sites where every page 
              is generated in advance and served instantly to visitors.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 text-brand-purple">
              Why Choose a Static Website with Retail X?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staticWebsiteBenefits.map((benefit, index) => <Card key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg text-brand-purple mb-3">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          
        </div>
      </div>
    </section>;
};
export default StaticWebsiteExplanation;
