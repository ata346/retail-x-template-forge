
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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 mr-2" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-teal-500 text-base sm:text-lg font-medium">
              Powered By
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
            RetailX Integrations
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the powerful tools and workflows that make RetailX possible
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                    {integration.logo}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                      {integration.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {integration.category}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="flex items-center justify-center p-4 rounded-lg bg-gradient-to-r from-amber-50 to-teal-50 inline-flex">
            <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-2" />
            <span className="text-sm sm:text-base text-gray-600 font-medium">
              More integrations coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
