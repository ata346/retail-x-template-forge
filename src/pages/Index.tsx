import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Store, Zap, Users, Clock, Star, ExternalLink } from "lucide-react";
import PricingSection from "@/components/PricingSection";
import { Link } from "react-router-dom";
import { 
  setPageTitle, 
  setMetaDescription, 
  setMetaKeywords, 
  injectStructuredData, 
  structuredData, 
  setSocialMetaTags,
  officialLinks 
} from "@/lib/seo-utils";
import { seoKeywords } from "@/lib/seo-keywords";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  // Countdown timer states
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  // Enhanced SEO setup with keywords integration
  useEffect(() => {
    // Set enhanced page title with keywords
    setPageTitle("AI-Powered E-commerce Platform | Launch Your Store in 3 Hours");
    
    // Set meta description with primary keywords
    setMetaDescription(
      "Create your perfect online store with Retail X - Choose from 20+ templates and launch your AI-powered e-commerce business in just 3 hours. Best-in-class automation for small businesses.",
      "primary"
    );
    
    // Set meta keywords from multiple categories
    setMetaKeywords(['primary', 'secondary', 'longTail', 'features']);
    
    // Set social media tags with backlinks
    setSocialMetaTags(
      "Retail X - AI-Powered E-commerce Platform | Launch Your Store in 3 Hours",
      "Create your perfect online store with AI automation. 20+ templates, 3-hour setup, and powerful features for modern e-commerce businesses.",
      "/lovable-uploads/f6a19bd5-5b25-47bb-9a9c-e9531f6650ce.png",
      officialLinks.website
    );
    
    // Inject comprehensive structured data
    injectStructuredData(structuredData.organization());
    injectStructuredData(structuredData.softwareApplication());
    injectStructuredData(structuredData.website());
    
    // Enhanced JSON-LD with SEO keywords
    const enhancedStructuredData = {
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
      "description": "AI-Powered E-commerce Platform that helps businesses launch online stores in 3 hours with automated workflows and intelligent design templates",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127"
      },
      "keywords": [...seoKeywords.primary, ...seoKeywords.secondary, ...seoKeywords.technical].slice(0, 20).join(', '),
      "sameAs": [
        officialLinks.website,
        officialLinks.instagram,
        officialLinks.linkedin
      ],
      "provider": {
        "@type": "Organization",
        "name": "Retail X",
        "url": officialLinks.website,
        "sameAs": [
          officialLinks.instagram,
          officialLinks.linkedin
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(enhancedStructuredData);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

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

    return () => clearInterval(timer);
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
    content: "Retail X transformed my traditional spice business with AI-powered ecommerce automation. Now customers from all over Kerala can order our authentic spices online through our professional online store. My sales have increased by 40% in just two months using this intelligent retail platform!",
    rating: 5
  }, {
    name: "Lakshmi Nair",
    role: "Saree Boutique Owner, Trivandrum",
    content: "The handloom sarees from my shop are now reaching customers across India thanks to Retail X's AI-driven ecommerce solution. The automated store builder platform is so easy to use, even for someone like me who isn't tech-savvy. Best online store creation experience!",
    rating: 5
  }, {
    name: "Rajesh Gopinathan",
    role: "Ayurvedic Products Entrepreneur, Thrissur",
    content: "Our family's 3-generation Ayurvedic formulations are now available worldwide through our AI-powered online marketplace. Retail X's automated ecommerce platform helped us preserve our tradition while embracing modern digital commerce technology. Excellent customer support and retail automation!",
    rating: 4
  }];

  const features = [{
    icon: <Zap className="h-10 w-10 text-brand-purple" />,
    title: "AI-Powered Automation & Smart Store Setup",
    description: "Launch your professional online store in just 3 hours with our advanced AI-driven ecommerce automation, intelligent product management, and expert guidance for modern retail businesses."
  }, {
    icon: <Users className="h-10 w-10 text-brand-purple" />,
    title: "Customer-Focused Design & UX Optimization",
    description: "Create exceptional shopping experiences your customers will love with intuitive navigation, optimized checkout flow, mobile-responsive design, and conversion-focused ecommerce templates."
  }, {
    icon: <Store className="h-10 w-10 text-brand-purple" />,
    title: "20+ Professional Templates & Industry Solutions",
    description: "Choose from our diverse template library designed for various retail niches including fashion, electronics, beauty, and more. Customize to fit your brand with AI-powered design automation."
  }, {
    icon: <Clock className="h-10 w-10 text-brand-purple" />,
    title: "Time-Saving Automation & Business Intelligence",
    description: "Focus on growing your business while our AI handles all technical aspects of your online store setup, inventory management, customer analytics, and automated marketing workflows."
  }];

  return <div className="flex flex-col min-h-screen">
      {/* Enhanced Hero Section with SEO keywords */}
      <section aria-labelledby="hero-heading" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center bg-gradient-to-r from-brand-purple to-brand-purple/90 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-0">
          <div className="max-w-3xl">
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered E-commerce Platform & Business Automation Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Retail X is not just another online store builder - it's an advanced AI-powered ecommerce platform integrated 
              with 60+ automated workflows and 13+ intelligent agents, working seamlessly to optimize and automate 
              various processes for building professional ecommerce stores, digital marketplaces, and responsive websites with cutting-edge retail technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base bg-white text-brand-purple hover:bg-white/90 flex items-center gap-2">
                <a href="https://forms.gle/8EfxuZgW5dMhondk7" target="_blank" rel="noopener noreferrer">
                  Start Your AI Store <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-white text-white hover:bg-white/10">
                <a href={officialLinks.website} target="_blank" rel="noopener noreferrer">
                  Visit Official Site <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Logo Section with SEO content */}
      <section aria-labelledby="brand-section" className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex gap-6">
              <a href={officialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                 className="text-brand-purple hover:text-brand-purple/80 transition-colors"
                 aria-label="Follow Retail X on Instagram">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href={officialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="text-brand-purple hover:text-brand-purple/80 transition-colors"
                 aria-label="Connect with Retail X on LinkedIn">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href={officialLinks.website} target="_blank" rel="noopener noreferrer" 
                 className="text-brand-purple hover:text-brand-purple/80 transition-colors"
                 aria-label="Visit Retail X Official Website">
                <ExternalLink className="w-8 h-8" />
              </a>
            </div>
          </div>
          <h2 id="brand-section" className="text-2xl md:text-3xl font-bold text-brand-purple mb-2">Retail X - Leading AI E-commerce Platform</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced AI-Powered E-commerce Solutions for Modern Online Businesses | Automated Store Builder & Digital Commerce Platform
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
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4 text-brand-purple">Why Choose Retail X AI E-commerce Platform?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge AI technology with beautiful responsive design to help your online business thrive with automated workflows and intelligent optimization.
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
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4 text-brand-purple">What Our E-commerce Clients Say About Our AI Platform</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover why businesses across India trust Retail X's AI-powered automation for their online store creation and digital commerce needs.
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
          <h2 id="newsletter-heading" className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with AI E-commerce Trends</h2>
          <p className="text-xl text-brand-peach mb-6 md:mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest AI-powered template releases, automation insights, and retail technology updates.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" required className="bg-white/10 border-white/20 text-white placeholder:text-white/60" aria-label="Email address for newsletter" />
            <Button type="submit" className="whitespace-nowrap bg-brand-coral hover:bg-brand-coral/90 text-white">
              Subscribe Now
            </Button>
          </form>
          <div className="flex justify-center gap-6 mt-8">
            <a href={officialLinks.instagram} target="_blank" rel="noopener noreferrer" 
               className="text-white/80 hover:text-white transition-colors">
              Follow us on Instagram
            </a>
            <a href={officialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
               className="text-white/80 hover:text-white transition-colors">
              Connect on LinkedIn
            </a>
            <a href={officialLinks.website} target="_blank" rel="noopener noreferrer" 
               className="text-white/80 hover:text-white transition-colors">
              Visit Our Website
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;
