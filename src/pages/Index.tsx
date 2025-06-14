import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Store, Zap, Users, Clock, Star, ExternalLink } from "lucide-react";
import PricingSection from "@/components/PricingSection";
import { Link } from "react-router-dom";
import { setPageTitle, setMetaDescription, setMetaKeywords, injectStructuredData, structuredData, setSocialMetaTags, officialLinks } from "@/lib/seo-utils";
import { seoKeywords } from "@/lib/seo-keywords";
import CommunitySection from "@/components/CommunitySection";
import CommunityJoinButton from "@/components/CommunityJoinButton";
import DualPlatformSection from "@/components/DualPlatformSection";
import StaticWebsiteExplanation from "@/components/StaticWebsiteExplanation";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ElevenLabsWidget from "@/components/ElevenLabsWidget";

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

  // Enhanced SEO setup with static website focus
  useEffect(() => {
    // Enhanced page title for static website building
    setPageTitle("Retail X - AI System for Static Websites & Static E-commerce | Build in 3 Hours");

    // Enhanced meta description for static website focus
    setMetaDescription("Retail X is an AI system that builds static websites and static e-commerce websites. Create professional static business sites and static online stores with advanced SEO optimization in just 3 hours.", "primary");

    // Enhanced meta keywords including static website keywords
    setMetaKeywords(['primary', 'secondary', 'longTail', 'features', 'business']);

    // Enhanced social media tags
    setSocialMetaTags(
      "Retail X - AI System for Static Websites & Static E-commerce", 
      "Retail X is an AI system that builds static websites and static e-commerce websites with advanced automation and SEO optimization.", 
      "/lovable-uploads/f6a19bd5-5b25-47bb-9a9c-e9531f6650ce.png", 
      officialLinks.website
    );

    // Enhanced structured data for static website focus
    injectStructuredData(structuredData.organization());
    injectStructuredData(structuredData.softwareApplication());
    injectStructuredData(structuredData.website());

    // Enhanced JSON-LD with static website keywords
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
      "description": "Retail X is an AI system that builds static websites and static e-commerce websites with automated workflows, professional templates, and advanced SEO optimization",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127"
      },
      "keywords": [
        ...seoKeywords.primary, 
        ...seoKeywords.secondary, 
        ...seoKeywords.business,
        "static website builder",
        "static e-commerce platform",
        "AI static website creator"
      ].slice(0, 25).join(', '),
      "sameAs": [officialLinks.website, officialLinks.instagram, officialLinks.linkedin],
      "provider": {
        "@type": "Organization",
        "name": "Retail X",
        "url": officialLinks.website,
        "sameAs": [officialLinks.instagram, officialLinks.linkedin]
      },
      "applicationSubCategory": ["Static E-commerce Platform", "Static Website Builder", "AI Static Site Generator"]
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
    content: "Retail X's AI system transformed my traditional spice business with a fast static e-commerce website. Now customers from all over Kerala can order our authentic spices through our professional static online store. My sales have increased by 40% in just two months using this intelligent static website platform!",
    rating: 5
  }, {
    name: "Lakshmi Nair",
    role: "Saree Boutique Owner, Trivandrum",
    content: "The handloom sarees from my shop are now reaching customers across India thanks to Retail X's AI-powered static e-commerce solution. The static website builder is so easy to use, even for someone like me who isn't tech-savvy. Best static online store creation experience!",
    rating: 5
  }, {
    name: "Rajesh Gopinathan",
    role: "Ayurvedic Products Entrepreneur, Thrissur",
    content: "Our family's 3-generation Ayurvedic formulations are now available worldwide through our AI-built static e-commerce website. Retail X's static website platform helped us preserve our tradition while embracing modern digital commerce. Excellent static site performance!",
    rating: 4
  }];
  const features = [{
    icon: <Zap className="h-10 w-10 text-brand-purple" />,
    title: "AI-Powered Static Website Builder",
    description: "Retail X is an AI system that builds both static business websites and static e-commerce stores in just 3 hours with advanced automation and lightning-fast performance."
  }, {
    icon: <Users className="h-10 w-10 text-brand-purple" />,
    title: "Static Website Templates",
    description: "Choose from 20+ professional static website templates designed for business sites and e-commerce stores with mobile-responsive design and SEO optimization."
  }, {
    icon: <Store className="h-10 w-10 text-brand-purple" />,
    title: "Complete Static Solutions",
    description: "From simple static business pages to complex static e-commerce platforms - our AI system handles everything with superior performance and security."
  }, {
    icon: <Clock className="h-10 w-10 text-brand-purple" />,
    title: "Rapid Static Deployment",
    description: "Launch static websites and static online stores faster than ever with our intelligent AI system handling technical setup and optimization automatically."
  }];
  return (
    <div className="flex flex-col min-h-screen">
      {/* ElevenLabs Widget - positioned at top */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3">
        <ElevenLabsWidget className="max-w-md mx-auto" />
      </div>

      {/* Enhanced Hero Section for static website focus */}
      <section aria-labelledby="hero-heading" className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center bg-gradient-to-r from-brand-purple to-brand-purple/90 overflow-hidden">
        <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-0">
          <div className="max-w-3xl">
            <h1 id="hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
              AI System for Static Websites & Static E-commerce
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 max-w-2xl leading-relaxed">
              Retail X is an AI system that builds static websites and static e-commerce stores with superior performance. 
              Create fast, secure static business sites and static online stores with advanced SEO optimization and 
              intelligent automation - all deployed in just 3 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" asChild className="text-sm sm:text-base bg-white text-brand-purple hover:bg-white/90 flex items-center justify-center gap-2 h-12 sm:h-auto touch-target">
                <a href="https://forms.gle/8EfxuZgW5dMhondk7" target="_blank" rel="noopener noreferrer">
                  Build Static Website <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </Button>
              <CommunityJoinButton variant="secondary" className="h-12 sm:h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Logo Section */}
      <section aria-labelledby="brand-section" className="py-6 sm:py-8 md:py-10 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4 gap-4 sm:gap-6">
            <a href={officialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:text-brand-purple/80 transition-colors touch-target" aria-label="Follow Retail X on Instagram">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href={officialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:text-brand-purple/80 transition-colors touch-target" aria-label="Connect with Retail X on LinkedIn">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={officialLinks.website} target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:text-brand-purple/80 transition-colors touch-target" aria-label="Visit Retail X Official Website">
              <ExternalLink className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
          </div>
          <h2 id="brand-section" className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-purple mb-1 sm:mb-2 px-2">Retail X - AI System for Static Websites</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            AI System Building Static Business Websites & Static E-commerce Stores | Advanced SEO & Performance Optimization
          </p>
        </div>
      </section>

      {/* Product Hunt Badge Section with mobile optimization */}
      <section className="py-4 sm:py-6 md:py-8 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div className="flex justify-center">
            <a href="https://www.producthunt.com/posts/retail-x?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-retail-x" target="_blank" rel="noopener noreferrer" className="touch-target">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=958480&theme=light&t=1746111133099" alt="Retail X - Empowering Your E-Commerce Journey, One Click at a Time | Product Hunt" style={{
              width: "200px",
              height: "43px"
            }} width="200" height="43" className="hover:shadow-md transition-all sm:w-[250px] sm:h-[54px]" />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section aria-labelledby="urgent-cta" className="py-8 sm:py-10 md:py-12 bg-brand-coral">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h2 id="urgent-cta" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                Limited Time Offer! Build Static Websites Now
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-5">
                Get 30% off your first 3 months when you use our AI system to build static websites today. This exclusive offer ends in:
              </p>
              <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 w-12 sm:w-16 text-center">
                  <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">{timeLeft.hours}</span>
                  <span className="text-xs text-white/80">Hours</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 w-12 sm:w-16 text-center">
                  <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">{timeLeft.minutes}</span>
                  <span className="text-xs text-white/80">Minutes</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 w-12 sm:w-16 text-center">
                  <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">{timeLeft.seconds}</span>
                  <span className="text-xs text-white/80">Seconds</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg w-full max-w-sm">
                <h3 className="text-lg sm:text-xl font-bold text-brand-purple mb-3 sm:mb-4">Claim Your Discount Now</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Enter your email to receive your exclusive discount code before time runs out!</p>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <Input type="email" name="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full h-10 sm:h-auto text-sm sm:text-base" aria-label="Email address for discount" />
                  <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white flex items-center justify-center gap-2 h-10 sm:h-auto text-sm sm:text-base">
                    Get 30% Off Now <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-center">
                  *Offer valid for new customers only. Discount applies to the first 3 months of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Features Section */}
      <section aria-labelledby="features-heading" className="py-12 sm:py-14 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-brand-purple px-2">Why Choose Retail X AI System for Static Websites?</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Our AI system specializes in building high-performance static websites and static e-commerce stores with cutting-edge technology and comprehensive SEO optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-4 sm:p-5 md:p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 sm:mb-4" aria-hidden="true">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-brand-purple">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Dual Platform Section */}
      <DualPlatformSection />

      {/* New Static Website Explanation Section */}
      <StaticWebsiteExplanation />

      {/* Pricing Section */}
      <PricingSection />

      {/* Community Section - Strategic placement for maximum engagement */}
      <CommunitySection />

      {/* Testimonials Section with mobile-optimized cards */}
      <section aria-labelledby="testimonials-heading" className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 id="testimonials-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-brand-purple px-2">What Our Clients Say About Our AI System</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Discover why businesses across India trust Retail X's AI system for building static websites and static e-commerce stores.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col h-full">
                  <div className="flex mb-3 sm:mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 sm:h-5 sm:w-5 ${i < testimonial.rating ? "text-brand-coral fill-brand-coral" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <p className="mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base text-gray-600 flex-grow">"{testimonial.content}"</p>
                  <div className="flex items-center mt-auto">
                    <div className="bg-brand-peach/20 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center text-brand-purple font-bold text-sm sm:text-base shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3 sm:ml-4 min-w-0">
                      <p className="font-semibold text-brand-purple text-sm sm:text-base truncate">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with mobile-first form */}
      <section aria-labelledby="newsletter-heading" className="bg-brand-purple text-white py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 id="newsletter-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">Stay Updated with Static Website AI Trends</h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-peach mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-4">
            Subscribe to our newsletter for the latest AI system updates, static website optimization tips, and business growth insights.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto mb-6">
            <Input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" required className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-10 sm:h-auto text-sm sm:text-base" aria-label="Email address for newsletter" />
            <Button type="submit" className="whitespace-nowrap bg-brand-coral hover:bg-brand-coral/90 text-white h-10 sm:h-auto text-sm sm:text-base touch-target">
              Subscribe Now
            </Button>
          </form>
          
          {/* Community join button in newsletter section */}
          <div className="mb-6">
            <CommunityJoinButton variant="secondary" className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a href={officialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base touch-target">
              Follow us on Instagram
            </a>
            <a href={officialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base touch-target">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Floating Community Button for persistent engagement */}
      <CommunityJoinButton variant="floating" />
    </div>
  );
};

export default Index;
