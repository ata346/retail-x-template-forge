import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Store, Zap, Users, Clock, Star } from "lucide-react";

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
      <section className="relative h-screen max-h-[800px] flex items-center bg-gradient-to-r from-retail-600 via-retail-500 to-retail-400">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern retail space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Launch Your Online Store in Just 3 Hours
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Choose from 20 professionally designed templates and transform your retail business with a custom e-commerce solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link to="/templates">Browse Templates</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-base">
                <Link to="/contact">Visit Our Store</Link>
              </Button>
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

      {/* CTA Section - Build Your Store */}
      <section className="bg-retail-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Own Store?</h2>
              <p className="text-lg mb-6">
                Apply now to get started with our expert team. We'll help you choose the perfect template and customize it to match your brand identity.
              </p>
              <Button size="lg" variant="secondary" asChild className="font-semibold text-retail-800">
                <Link to="/contact">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="lg:w-5/12">
              <Card className="bg-white text-foreground border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-retail-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-retail-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">3 Hour Setup</h3>
                      <p className="text-muted-foreground">Quick and efficient process</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Template selection assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Brand customization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Product catalog setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Payment integration</span>
                    </li>
                  </ul>
                  <p className="text-center text-sm text-muted-foreground mb-1">Starting at</p>
                  <p className="text-center text-3xl font-bold mb-6">$499</p>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
