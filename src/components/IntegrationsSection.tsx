
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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-amber-500 mr-2" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-teal-500 text-sm sm:text-base md:text-lg font-medium">
              Powered By
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 px-2">
            RetailX Integrations
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Discover the powerful tools and workflows that make RetailX possible
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group touch-target"
            >
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {integration.logo}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 truncate">
                      {integration.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                      {integration.category}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-center">
          <div className="flex items-center justify-center p-3 sm:p-4 rounded-lg bg-gradient-to-r from-amber-50 to-teal-50 inline-flex">
            <Globe className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-amber-500 mr-2 shrink-0" />
            <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
              More integrations coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
