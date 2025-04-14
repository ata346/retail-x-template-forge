
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import { Link } from "react-router-dom";

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
    <Card className={`h-full flex flex-col ${isPopular ? 'border-2 border-amber-500' : 'border border-gray-200'} rounded-xl shadow-sm bg-white`}>
      <div className="p-6 flex flex-col h-full">
        <div className="text-center mb-6">
          <h3 className={`text-2xl font-bold ${color}`}>{title}</h3>
          <div className="mt-3">
            <span className={`text-3xl font-bold ${color}`}>₹{price}</span>
            <span className="text-gray-600 ml-1">/month</span>
          </div>
          <div className="mt-2 flex items-center justify-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span>Setup: {setupTime}</span>
          </div>
        </div>
        
        <div className="flex-grow space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 mr-2" />
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Button 
            asChild
            className="w-full"
            variant={isPopular ? "default" : "outline"}
          >
            <Link to="/design-requirements/1">Get Started</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

const PricingSection = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "499",
      setupTime: "5–7 Days",
      features: [
        { text: "1 Online Store" },
        { text: "Up to 5 Products" },
        { text: "Basic Themes" },
        { text: "Email Support" },
        { text: "No Custom Domain" },
      ],
    },
    {
      title: "Standard Plan",
      price: "999",
      setupTime: "4–6 Days",
      features: [
        { text: "1 Online Store" },
        { text: "Up to 15 Products" },
        { text: "Premium Themes" },
        { text: "Custom Domain" },
        { text: "SEO Tools" },
        { text: "Abandoned Cart Recovery" },
        { text: "WhatsApp & Email Support" },
      ],
    },
    {
      title: "Premium Plan",
      price: "1,999",
      setupTime: "2–4 Days",
      features: [
        { text: "1 Online Store" },
        { text: "Up to 25 Products" },
        { text: "Advanced Premium Themes" },
        { text: "Custom Domain" },
        { text: "AI Store Assistant" },
        { text: "Analytics Dashboard" },
        { text: "Team Access (Up to 5 users)" },
        { text: "Priority Support (Whatsapp + Call)" },
      ],
    },
    {
      title: "Elite Premium Plan",
      price: "4,999",
      setupTime: "1–3 Days",
      features: [
        { text: "1 Online Store" },
        { text: "Up to 50 Products" },
        { text: "Exclusive Design Templates" },
        { text: "Custom Domain" },
        { text: "Advanced Automation Features" },
        { text: "Custom Development Support" },
        { text: "Multiple Team Member Access" },
      ],
      isPopular: true,
      color: "text-amber-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect pricing plan for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link to="/pricing">View Full Pricing Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
