
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, Sparkles, ExternalLink } from "lucide-react";

const PricingCard = ({ 
  plan, 
  price, 
  features, 
  setupTime,
  isPopular = false,
  color = "text-foreground"
}: { 
  plan: string; 
  price: string; 
  features: string[];
  setupTime: string;
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
      <div className="mt-2 flex items-center justify-center text-sm text-gray-600">
        <Clock className="h-4 w-4 mr-1" />
        <span>Setup: {setupTime}</span>
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
      <a 
        href="https://forms.gle/8EfxuZgW5dMhondk7" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        Apply for e-com <ExternalLink className="h-4 w-4" />
      </a>
    </Button>
  </Card>
);

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-6 w-6 text-amber-500 mr-2" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-teal-500 text-lg font-medium">AI-Powered</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Retail X Pricing Plans</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose your plan, fill out a simple form, and our AI will handle the rest
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Basic Plan */}
        <PricingCard
          plan="Basic Plan"
          price="499"
          setupTime="5–7 Days"
          features={[
            "1 Online Store",
            "Up to 5 Products",
            "Basic Themes",
            "Email Support",
            "No Custom Domain",
            "AI-Generated Product Descriptions"
          ]}
        />
        
        {/* Standard Plan */}
        <PricingCard
          plan="Standard Plan"
          price="999"
          setupTime="4–6 Days"
          features={[
            "1 Online Store",
            "Up to 15 Products",
            "Premium Themes",
            "Custom Domain",
            "SEO Tools"
           
          ]}
        />
        
        {/* Premium Plan */}
        <PricingCard
          plan="Premium Plan"
          price="1,999"
          setupTime="2–4 Days"
          features={[
            "1 Online Store",
            "Up to 25 Products",
            "Advanced Premium Themes",
            "Custom Domain",
            "Priority Support (Whatsapp + Call)"
          ]}
        />
        
        {/* Elite Premium Plan */}
        <PricingCard
          plan="Elite Premium Plan"
          price="4,999"
          setupTime="1–3 Days"
          isPopular={true}
          color="text-amber-600"
          features={[
            "1 Online Store",
            "Up to 50 Products",
            "Exclusive Design Templates",
            "Custom Domain",
            "Advanced Automation ",
            "Custom Development Support",
            "AI Business Report"
          ]}
        />
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto text-center p-8 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-retail-100 flex items-center justify-center mb-4">
              <span className="font-bold text-retail-600">1</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Select a Plan</h3>
            <p className="text-gray-600">Choose the plan that fits your business needs</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-retail-100 flex items-center justify-center mb-4">
              <span className="font-bold text-retail-600">2</span>
            </div>
            <h3 className="text-lg font-medium mb-2">Fill Requirements</h3>
            <p className="text-gray-600">Complete a simple form with your store details</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-retail-100 flex items-center justify-center mb-4">
              <span className="font-bold text-retail-600">3</span>
            </div>
            <h3 className="text-lg font-medium mb-2">We Build It</h3>
            <p className="text-gray-600">Our AI creates your store automatically</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
