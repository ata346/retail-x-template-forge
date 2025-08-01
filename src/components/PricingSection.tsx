
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, Sparkles, Zap, Rocket, ExternalLink, Calculator } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

interface PlanFeature {
  text: string;
}

interface PricingPlanProps {
  title: string;
  price: string;
  setupTime: string;
  features: PlanFeature[];
  isPopular?: boolean;
  color?: string;
}

const PricingPlan = ({
  title,
  price,
  setupTime,
  features,
  isPopular = false,
  color = "text-navy-800"
}: PricingPlanProps) => {
  return (
    <Card className={`h-full flex flex-col ${isPopular ? 'border-2 border-amber-500 shadow-lg' : 'border border-gray-200'} rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow duration-200`}>
      <div className="p-4 sm:p-6 flex flex-col h-full">
        <div className="text-center mb-4 sm:mb-6">
          <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${color} leading-tight`}>
            {title}
          </h3>
          <div className="mt-2 sm:mt-3">
            <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${color}`}>
              ₹{price}
            </span>
            <span className="text-gray-600 ml-1 text-sm sm:text-base">/month</span>
          </div>
          <div className="mt-1 sm:mt-2 flex items-center justify-center text-xs sm:text-sm text-gray-600">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span>Setup: {setupTime}</span>
          </div>
        </div>
        
        <div className="flex-grow space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5 mr-2" />
              <span className="text-xs sm:text-sm leading-relaxed">{feature.text}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-4 sm:mt-6">
          <Button 
            asChild 
            className="w-full text-xs sm:text-sm py-2 sm:py-3" 
            variant={isPopular ? "default" : "outline"}
          >
            <a 
              href="https://forms.gle/8EfxuZgW5dMhondk7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 sm:gap-2 justify-center"
            >
              Apply for e-com <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

const PricingSection = () => {
  const plans = [
    {
      title: "MiniSites Plan",
      price: "479",
      setupTime: "1–2 Days",
      features: [
        { text: "Single-Page Website (Intro, Services, Contact)" },
        { text: "Mobile Responsive Design" },
        { text: "Contact Form or MessageSquare Button" },
        { text: "Social Media Links" },
        { text: "Email Support" }
      ]
    },
    {
      title: "Business Website Plan",
      price: "719",
      setupTime: "2–3 Days",
      features: [
        { text: "1 Static Business Website (Non-eCommerce)" },
        { text: "Up to 3 Pages (e.g., Home, About, Contact)" },
        { text: "Mobile Responsive Design" },
        { text: "Basic Themes" },
        { text: "Limited Customization" },
        { text: "Contact Form" },
        { text: "Social Media Links" },
        { text: "MessageSquare Chat Button Integration" }
      ]
    },
    {
      title: "Business Website Pro Plan",
      price: "2,999",
      setupTime: "3–5 Days",
      features: [
        { text: "1 Custom Static Website" },
        { text: "Up to 6 Pages (Home, About, Services, Portfolio, Blog, Contact)" },
        { text: "Premium Design Templates" },
        { text: "Custom Domain Integration" },
        { text: "Mobile-Optimized Design" },
        { text: "Basic SEO Setup" },
        { text: "Google Maps Integration" },
        { text: "Contact Form + WhatsApp Chat Button" },
        { text: "WhatsApp & Email Support" }
      ],
      color: "text-teal-600"
    },
    {
      title: "Basic Plan",
      price: "599",
      setupTime: "5–7 Days",
      features: [
        { text: "1 Online Store" },
        { text: "Up to 5 Products" },
        { text: "Basic Themes" },
        { text: "Email Support" },
        { text: "No Custom Domain" },
        { text: "AI-Generated Product Descriptions" }
      ]
    },
    {
      title: "Standard Plan",
      price: "1,199",
      setupTime: "4–6 Days",
      features: [
        { text: "1 Online Store" },
        { text: "Up to 15 Products" },
        { text: "Premium Themes" },
        { text: "Custom Domain" },
        { text: "MessageSquare & Email Support" },
        { text: "AI Product Optimization" }
      ]
    },
    {
      title: "Premium Plan",
      price: "2,399",
      setupTime: "2–4 Days",
      features: [
        { text: "1 Online Store" },
        { text: "Up to 25 Products" },
        { text: "Advanced Premium Themes" },
        { text: "Custom Domain" },
        { text: "AI Store Assistant" },
        { text: "Priority Support (Whatsapp + Call)" },
        { text: "AI-Powered Sales Insights" }
      ]
    },
    {
      title: "Elite Premium Plan",
      price: "8,399",
      setupTime: "1–3 Days",
      features: [
        { text: "1 Online Store" },
        { text: "Up to 50 Products" },
        { text: "Exclusive Design Templates" },
        { text: "Custom Domain" },
        { text: "Advanced Automation Features" },
        { text: "Custom Development Support" }
      ],
      isPopular: true,
      color: "text-amber-600"
    },
    {
      title: "Ecom Growth Plan",
      price: "15,599",
      setupTime: "1–2 Days",
      features: [
        { text: "1 Online Store" },
        { text: "Up to 88 Products" },
        { text: "Exclusive Design Templates" },
        { text: "Custom Domain" },
        { text: "Advanced Automation Features" },
        { text: "Custom Development Support" },
        { text: "Google Ads – ₹1,000/mo + 25% fee" },
        { text: "Facebook & Instagram Ads – ₹1,000/mo + 25% fee" }
      ],
      color: "text-emerald-600"
    }
  ];
  
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 mr-2" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-teal-500 text-sm sm:text-base font-medium">
              AI-Powered
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Choose Your Plan
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Select a plan, fill out a form, and our AI takes care of the rest
          </p>
        </div>
        
        <div className="mb-8 sm:mb-12 max-w-5xl mx-auto bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col">
              <div className="flex items-center mb-3 sm:mb-4">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 mr-2" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At Retail X, our mission is to empower business owners by providing a fully automated eCommerce platform. 
                With the power of AI, we handle everything from building your website to connecting your custom domain 
                and launching your store. All you need to do is fill out a form, and we take care of the rest.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-3 sm:mb-4">
                <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 mr-2" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our vision is to revolutionize how businesses set up and manage their online presence. 
                By leveraging advanced AI technology, we simplify the process so that business owners can focus 
                on what matters most, while we handle the technical side of launching and managing their eCommerce store.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns, Large: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index} 
              title={plan.title} 
              price={plan.price} 
              setupTime={plan.setupTime} 
              features={plan.features} 
              isPopular={plan.isPopular} 
              color={plan.color} 
            />
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 max-w-md sm:max-w-none mx-auto">
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <RouterLink to="/pricing">View Full Pricing Details</RouterLink>
          </Button>
          <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
            <RouterLink to="/pricing" className="flex items-center gap-2">
              <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
              Use Pricing Calculator
            </RouterLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
