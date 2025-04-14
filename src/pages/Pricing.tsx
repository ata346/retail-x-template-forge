
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingCard = ({ 
  plan, 
  price, 
  features, 
  isPopular = false,
  color = "text-foreground"
}: { 
  plan: string; 
  price: string; 
  features: string[];
  isPopular?: boolean;
  color?: string;
}) => (
  <Card className={`relative flex flex-col p-6 ${isPopular ? 'border-2 border-amber-500' : 'border border-gray-200'} rounded-xl shadow-sm`}>
    <div className="mb-5">
      <h3 className={`text-center text-2xl font-bold ${color}`}>{plan}</h3>
      <div className="mt-4 text-center">
        <span className={`text-4xl font-bold ${color}`}>₹{price}</span>
        <span className="text-gray-600 ml-1 text-lg">/month</span>
      </div>
    </div>
    
    <div className="space-y-4 flex-grow">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center">
          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
    
    <Button 
      asChild 
      className="mt-6" 
      variant={isPopular ? "default" : "outline"}
    >
      <Link to="/design-requirements/1">Get Started</Link>
    </Button>
  </Card>
);

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Retail X Pricing Plans</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your business needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Basic Plan */}
        <PricingCard
          plan="Basic Plan"
          price="499"
          features={[
            "1 Online Store",
            "Up to 5 Products",
            "Basic Themes",
            "Email Support",
            "No Custom Domain"
          ]}
        />
        
        {/* Standard Plan */}
        <PricingCard
          plan="Standard Plan"
          price="999"
          features={[
            "1 Online Store",
            "Up to 15 Products",
            "Premium Themes",
            "Custom Domain",
            "SEO Tools",
            "Abandoned Cart Recovery",
            "WhatsApp & Email Support"
          ]}
        />
        
        {/* Premium Plan */}
        <PricingCard
          plan="Premium Plan"
          price="1,999"
          features={[
            "1 Online Store",
            "Up to 25 Products",
            "Advanced Premium Themes",
            "Custom Domain",
            "AI Store Assistant",
            "Analytics Dashboard",
            "Team Access (Up to 5 users)",
            "Priority Support (Whatsapp + Call)"
          ]}
        />
        
        {/* Elite Premium Plan */}
        <PricingCard
          plan="Elite Premium Plan"
          price="4,999"
          isPopular={true}
          color="text-amber-600"
          features={[
            "1 Online Store",
            "Up to 50 Products",
            "Exclusive Design Templates",
            "Custom Domain",
            "Advanced Automation Features",
            "Custom Development Support",
            "Multiple Team Member Access"
          ]}
        />
      </div>
    </div>
  );
};

export default Pricing;
