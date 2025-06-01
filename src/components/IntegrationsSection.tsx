
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Globe } from "lucide-react";

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "Wix Studio",
      logo: "🎨",
      category: "Design Platform"
    },
    {
      name: "Hostinger",
      logo: "🌐",
      category: "Web Hosting"
    },
    {
      name: "GoDaddy",
      logo: "🔧",
      category: "Domain & Hosting"
    },
    {
      name: "Make",
      logo: "⚡",
      category: "Automation"
    },
    {
      name: "Gemini",
      logo: "🤖",
      category: "AI Assistant"
    },
    {
      name: "UPI GEN",
      logo: "💳",
      category: "Payment Gateway"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-amber-500 mr-2" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-teal-500 text-lg font-medium">Powered By</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">RetailX Integrations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the powerful tools and workflows that make RetailX possible
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <Card key={index} className="border border-gray-200 hover:border-amber-300 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{integration.logo}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                    <p className="text-sm text-gray-600">{integration.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center">
            <Globe className="h-5 w-5 text-amber-500 mr-2" />
            <span className="text-gray-600">More integrations coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
