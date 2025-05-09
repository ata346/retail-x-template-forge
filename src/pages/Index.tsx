import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Store, Zap, Users, Clock, Star, ExternalLink } from "lucide-react";
import PricingSection from "@/components/PricingSection";
import { Link } from "react-router-dom";
const Index = () => {
  const {
    toast
  } = useToast();
  const [email, setEmail] = useState("");

  // Countdown timer states
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  // Effect to update the countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        // Calculate new time
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        // If countdown is finished, reset it
        if (newHours < 0) {
          return {
            hours: 48,
            minutes: 0,
            seconds: 0
          };
        }
        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Add JSON-LD structured data for SEO
  useEffect(() => {
    // Create the structured data script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';

    // Define the JSON-LD content
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Retail X",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "499",
        "priceCurrency": "INR"
      },
      "description": "AI-Powered E-commerce Platform that helps businesses launch online stores in 3 hours",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127"
      }
    };

    // Set the script content
    script.textContent = JSON.stringify(structuredData);

    // Add the script to the document head
    document.head.appendChild(script);

    // Clean up function
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mnnddnyp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      });
      if (response.ok) {
        toast({
          title: "Subscribed!",
          description: "Thank you for subscribing to our newsletter."
        });
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive"
      });
    }
  };
  const testimonials = [{
    name: "Anoop Menon",
    role: "Spice Shop Owner, Kochi",
    content: "Retail X transformed my traditional spice business. Now customers from all over Kerala can order our authentic spices online. My sales have increased by 40% in just two months!",
    rating: 5
  }, {
    name: "Lakshmi Nair",
    role: "Saree Boutique Owner, Trivandrum",
    content: "The handloom sarees from my shop are now reaching customers across India thanks to Retail X. The platform is so easy to use, even for someone like me who isn't tech-savvy.",
    rating: 5
  }, {
    name: "Rajesh Gopinathan",
    role: "Ayurvedic Products Entrepreneur, Thrissur",
    content: "Our family's 3-generation Ayurvedic formulations are now available worldwide. Retail X helped us preserve our tradition while embracing modern technology. Excellent support too!",
    rating: 4
  }];
  const features = [{
    icon: <Zap className="h-10 w-10 text-brand-purple" />,
    title: "AI-Powered Setup",
    description: "Launch your online store in just 3 hours with our AI-driven automation and expert guidance."
  }, {
    icon: <Users className="h-10 w-10 text-brand-purple" />,
    title: "Customer-Focused",
    description: "Create shopping experiences your customers will love with intuitive navigation and checkout flow."
  }, {
    icon: <Store className="h-10 w-10 text-brand-purple" />,
    title: "20+ Templates",
    description: "Choose from our diverse template library designed for various retail niches and customize to fit your brand."
  }, {
    icon: <Clock className="h-10 w-10 text-brand-purple" />,
    title: "Time-Saving",
    description: "Focus on your business while our AI handles all technical aspects of your online store setup."
  }];
  return <div className="flex flex-col min-h-screen">
      {/* Hero Section with semantic HTML for SEO */}
      <section aria-labelledby="hero-heading" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center bg-gradient-to-r from-brand-purple to-brand-purple/90 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-0">
          <div className="max-w-3xl">
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered Business Automation
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Retail X is not a no-code or low-code e-commerce builder. It's an advanced AI system integrated 
              with over 60 workflows and 13+ AI agents, working seamlessly to optimize and automate 
              various processes for building e-commerce stores and static websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base bg-white text-brand-purple hover:bg-white/90 flex items-center gap-2">
                <a href="https://forms.gle/8EfxuZgW5dMhondk7" target="_blank" rel="noopener noreferrer">
                  Apply for e-com <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-white text-white hover:bg-white/10">
                
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section aria-labelledby="brand-section" className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center">
            
          </div>
          <h2 id="brand-section" className="text-2xl md:text-3xl font-bold text-brand-purple mb-2">Retail X</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-Powered eCommerce Platform
          </p>
        </div>
      </section>

      {/* Product Hunt Badge Section - New central position */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center">
            <a href="https://www.producthunt.com/posts/retail-x?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-retail-x" target="_blank" rel="noopener noreferrer">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=958480&theme=light&t=1746111133099" alt="Retail X - Empowering Your E-Commerce Journey, One Click at a Time | Product Hunt" style={{
              width: "250px",
              height: "54px"
            }} width="250" height="54" className="hover:shadow-md transition-all" />
            </a>
          </div>
        </div>
      </section>

      {/* Urgent Call to Action Section with improved semantics */}
      <section aria-labelledby="urgent-cta" className="py-12 bg-brand-coral">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 id="urgent-cta" className="text-3xl md:text-4xl font-bold text-white mb-2">
                Limited Time Offer! Act Now
              </h2>
              <p className="text-lg md:text-xl text-white mb-4">
                Get 30% off your first 3 months when you sign up today. This exclusive offer ends in:
              </p>
              <div className="flex gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-16 text-center">
                  <span className="block text-2xl font-bold text-white">{timeLeft.hours}</span>
                  <span className="text-xs text-white/80">Hours</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-16 text-center">
                  <span className="block text-2xl font-bold text-white">{timeLeft.minutes}</span>
                  <span className="text-xs text-white/80">Minutes</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-16 text-center">
                  <span className="block text-2xl font-bold text-white">{timeLeft.seconds}</span>
                  <span className="text-xs text-white/80">Seconds</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
                <h3 className="text-xl font-bold text-brand-purple mb-4">Claim Your Discount Now</h3>
                <p className="text-sm text-gray-600 mb-4">Enter your email to receive your exclusive discount code before time runs out!</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input type="email" name="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full" aria-label="Email address for discount" />
                  <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white flex items-center justify-center gap-2">
                    Get 30% Off Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  *Offer valid for new customers only. Discount applies to the first 3 months of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with semantic improvements */}
      <section aria-labelledby="features-heading" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4 text-brand-purple">Why Choose Retail X?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine AI technology with beautiful design to help your business thrive online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => <div key={index} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4" aria-hidden="true">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-purple">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section with semantic improvements */}
      <section aria-labelledby="testimonials-heading" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4 text-brand-purple">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover why businesses trust Retail X for their e-commerce needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? "text-brand-coral fill-brand-coral" : "text-gray-300"}`} />)}
                  </div>
                  <p className="mb-6 text-gray-600 flex-grow">"{testimonial.content}"</p>
                  <div className="flex items-center mt-auto">
                    <div className="bg-brand-peach/20 h-12 w-12 rounded-full flex items-center justify-center text-brand-purple font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-brand-purple">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Newsletter Section with semantic improvements */}
      <section aria-labelledby="newsletter-heading" className="bg-brand-purple text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-brand-peach mb-6 md:mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest template releases and retail insights.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" required className="bg-white/10 border-white/20 text-white placeholder:text-white/60" aria-label="Email address for newsletter" />
            <Button type="submit" className="whitespace-nowrap bg-brand-coral hover:bg-brand-coral/90 text-white">
              Subscribe Now
            </Button>
          </form>
        </div>
      </section>
    </div>;
};
export default Index;
