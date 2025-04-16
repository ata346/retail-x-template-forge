import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Store, Zap, Users, Clock, Star } from "lucide-react";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  const { toast } = useToast();
  
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this to your backend
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail("");
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Boutique Owner",
      content: "Retail X transformed my business. In just 3 hours, I had a stunning online store that perfectly matched my brand. Sales increased by 45% in the first month!",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "Electronics Store Owner",
      content: "The templates are incredibly professional and easy to customize. Customer support was outstanding when I needed help with product categories.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Beauty Shop Entrepreneur",
      content: "As someone with zero technical skills, I was amazed at how quickly I could set up my store. The interface is intuitive and the results are beautiful.",
      rating: 4,
    },
  ];

  const features = [
    {
      icon: <Zap className="h-10 w-10 text-brand-purple" />,
      title: "AI-Powered Setup",
      description: "Launch your online store in just 3 hours with our AI-driven automation and expert guidance."
    },
    {
      icon: <Users className="h-10 w-10 text-brand-purple" />,
      title: "Customer-Focused",
      description: "Create shopping experiences your customers will love with intuitive navigation and checkout flow."
    },
    {
      icon: <Store className="h-10 w-10 text-brand-purple" />,
      title: "20+ Templates",
      description: "Choose from our diverse template library designed for various retail niches and customize to fit your brand."
    },
    {
      icon: <Clock className="h-10 w-10 text-brand-purple" />,
      title: "Time-Saving",
      description: "Focus on your business while our AI handles all technical aspects of your online store setup."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center bg-gradient-to-r from-brand-purple to-brand-purple/90 overflow-hidden">
        <div className="hero-blob left-[10%] top-[20%]"></div>
        <div className="hero-blob right-[10%] bottom-[20%]"></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl flex items-center">
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI-Powered Business Automation
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Retail X is not a no-code or low-code e-commerce builder. It's an advanced AI system integrated 
                with over 60 workflows and 13+ AI agents, working seamlessly to optimize and automate 
                various processes for building e-commerce stores and static websites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  asChild 
                  className="text-base bg-white text-brand-purple hover:bg-white/90"
                >
                  <a href="https://formspree.io/f/xblgelaz" target="_blank" rel="noopener noreferrer">Design Requirements</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/714d8f7b-2ee5-4ed2-9762-740270cbb8d4.png"
              alt="Retail X Logo"
              className="h-24 mb-4"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-purple mb-2">Retail X</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-Powered eCommerce Platform
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-purple">Why Choose Retail X?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine AI technology with beautiful design to help your business thrive online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-purple">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-purple">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover why businesses trust Retail X for their e-commerce needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-brand-coral fill-brand-coral" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-gray-600">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="bg-brand-peach/20 h-12 w-12 rounded-full flex items-center justify-center text-brand-purple font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-brand-purple">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-brand-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-brand-peach mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest template releases and retail insights.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button type="submit" className="whitespace-nowrap bg-brand-coral hover:bg-brand-coral/90 text-white">
              Subscribe Now
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
