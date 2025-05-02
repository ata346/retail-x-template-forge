import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Clock, Sparkles, Zap, Rocket, ExternalLink, Smartphone, MessageSquare, Link } from "lucide-react";
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
  return <Card className={`h-full flex flex-col ${isPopular ? 'border-2 border-amber-500' : 'border border-gray-200'} rounded-xl shadow-sm bg-white`}>
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
          {features.map((feature, index) => <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 mr-2" />
              <span className="text-sm">{feature.text}</span>
            </div>)}
        </div>
        
        <div className="mt-6">
          <Button asChild className="w-full" variant={isPopular ? "default" : "outline"}>
            <a href="https://forms.gle/8EfxuZgW5dMhondk7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
              Apply for e-com <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </Card>;
};
const PricingSection = () => {
  const plans = [{
    title: "MiniSites Plan",
    price: "299",
    setupTime: "1–2 Days",
    features: [{
      text: "Single-Page Website (Intro, Services, Contact)"
    }, {
      text: "Mobile Responsive Design"
    }, {
      text: "Contact Form or MessageSquare Button"
    }, {
      text: "Social Media Links"
    }, {
      text: "Email Support"
    }]
  }, {
    title: "Business Website Plan",
    price: "399",
    setupTime: "2–3 Days",
    features: [{
      text: "1 Static Business Website (Non-eCommerce)"
    }, {
      text: "Up to 3 Pages (e.g., Home, About, Contact)"
    }, {
      text: "Mobile Responsive Design"
    }, {
      text: "Basic Themes"
    }, {
      text: "Limited Customization"
    }, {
      text: "Contact Form"
    }, {
      text: "Social Media Links"
    }, {
      text: "MessageSquare Chat Button Integration"
    }]
  }, {
    title: "Basic Plan",
    price: "499",
    setupTime: "5–7 Days",
    features: [{
      text: "1 Online Store"
    }, {
      text: "Up to 5 Products"
    }, {
      text: "Basic Themes"
    }, {
      text: "Email Support"
    }, {
      text: "No Custom Domain"
    }, {
      text: "AI-Generated Product Descriptions"
    }]
  }, {
    title: "Standard Plan",
    price: "999",
    setupTime: "4–6 Days",
    features: [{
      text: "1 Online Store"
    }, {
      text: "Up to 15 Products"
    }, {
      text: "Premium Themes"
    }, {
      text: "Custom Domain"
    }, {
      text: "SEO Tools"
    }, {
      text: "Abandoned Cart Recovery"
    }, {
      text: "MessageSquare & Email Support"
    }, {
      text: "AI Product Optimization"
    }]
  }, {
    title: "Premium Plan",
    price: "1,999",
    setupTime: "2–4 Days",
    features: [{
      text: "1 Online Store"
    }, {
      text: "Up to 25 Products"
    }, {
      text: "Advanced Premium Themes"
    }, {
      text: "Custom Domain"
    }, {
      text: "AI Store Assistant"
    }, {
      text: "Analytics Dashboard"
    }, {
      text: "Team Access (Up to 5 users)"
    }, {
      text: "Priority Support (Whatsapp + Call)"
    }, {
      text: "AI-Powered Sales Insights"
    }]
  }, {
    title: "Elite Premium Plan",
    price: "4,999",
    setupTime: "1–3 Days",
    features: [{
      text: "1 Online Store"
    }, {
      text: "Up to 50 Products"
    }, {
      text: "Exclusive Design Templates"
    }, {
      text: "Custom Domain"
    }, {
      text: "Advanced Automation Features"
    }, {
      text: "Custom Development Support"
    }, {
      text: "Multiple Team Member Access"
    }, {
      text: "Complete AI Business Suite"
    }],
    isPopular: true,
    color: "text-amber-600"
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <Sparkles className="h-5 w-5 text-amber-500 mr-2" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-teal-500 text-base font-medium">AI-Powered</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a plan, fill out a form, and our AI takes care of the rest
          </p>
        </div>
        
        <div className="mb-12 max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-amber-500 mr-2" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                At Retail X, our mission is to empower business owners by providing a fully automated eCommerce platform. 
                With the power of AI, we handle everything from building your website to connecting your custom domain 
                and launching your store. All you need to do is fill out a form, and we take care of the rest.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <Rocket className="h-6 w-6 text-amber-500 mr-2" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                Our vision is to revolutionize how businesses set up and manage their online presence. 
                By leveraging advanced AI technology, we simplify the process so that business owners can focus 
                on what matters most, while we handle the technical side of launching and managing their eCommerce store.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {plans.map((plan, index) => <PricingPlan key={index} title={plan.title} price={plan.price} setupTime={plan.setupTime} features={plan.features} isPopular={plan.isPopular} color={plan.color} />)}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button asChild size="lg" variant="outline">
            <RouterLink to="/pricing">View Full Pricing Details</RouterLink>
          </Button>
          <Button asChild size="lg" variant="default">
            
          </Button>
        </div>
      </div>
    </section>;
};
export default PricingSection;
