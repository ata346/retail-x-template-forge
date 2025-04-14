
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
      icon: <Zap className="h-10 w-10 text-retail-500" />,
      title: "Quick Setup",
      description: "Launch your online store in just 3 hours with our streamlined process and expert guidance."
    },
    {
      icon: <Users className="h-10 w-10 text-retail-500" />,
      title: "Customer-Focused",
      description: "Create shopping experiences your customers will love with intuitive navigation and checkout flow."
    },
    {
      icon: <Store className="h-10 w-10 text-retail-500" />,
      title: "20+ Templates",
      description: "Choose from our diverse template library designed for various retail niches and customize to fit your brand."
    },
    {
      icon: <Clock className="h-10 w-10 text-retail-500" />,
      title: "Time-Saving",
      description: "Focus on your business while we handle the technical aspects of your online store setup."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl flex items-center">
            <div className="w-2/3 pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                It all starts with a website
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Build Your Ecommerce Website! No coding needed, built-in payments, seamless checkout, automated workflows, and fast shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base">
                  <Link to="/pricing">Browse Plans</Link>
                </Button>
              </div>
            </div>
            <div className="w-1/3">
              <img 
                src="/lovable-uploads/15e5f579-871a-4c7c-9618-162ff708edd3.png" 
                alt="Smiling woman in traditional attire" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Retail X?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine beautiful design with powerful e-commerce functionality to help your business thrive online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
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
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-gray-600">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="bg-retail-100 h-12 w-12 rounded-full flex items-center justify-center text-retail-600 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
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
      <section className="bg-retail-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-retail-100 mb-8 max-w-2xl mx-auto">
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
            <Button type="submit" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
