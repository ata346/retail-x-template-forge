
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Store, Mail, Phone, MapPin, FileText, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mnnddnyp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        toast({
          title: "Subscribed!",
          description: `Thank you for subscribing with ${email}`
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Store className="h-8 w-8 text-retail-400" />
              <span className="font-heading font-bold text-xl">Retail X</span>
            </div>
            <p className="mb-4 text-gray-300">
              Building the future of e-commerce, one store at a time.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/retailx.site/" className="hover:text-retail-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-retail-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-retail-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-retail-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-retail-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-retail-400 transition-colors flex items-center gap-2">
                  <Briefcase size={16} /> Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-retail-400 transition-colors flex items-center gap-2">
                  <FileText size={16} /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-retail-400 transition-colors flex items-center gap-2">
                  <FileText size={16} /> Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-300">
              <p className="flex items-start gap-2 mb-2">
                <MapPin size={16} className="text-retail-400 flex-shrink-0 mt-1" />
                <span>Quilandy - Thamarassery - Balussery Road, Ullieryi19</span>
              </p>
              <p className="mt-2">Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p className="flex items-center gap-2 mt-2">
                <Phone size={16} className="text-retail-400 flex-shrink-0" />
                <a href="tel:+919656778508" className="hover:text-retail-400">+91 9656778508</a>
              </p>
              <div className="flex flex-col space-y-2 mt-2">
                <div className="flex items-start gap-2">
                  <Mail size={16} className="text-retail-400 flex-shrink-0 mt-1" />
                  <div>
                    <a href="mailto:retailx.ad@f5.si" className="hover:text-retail-400 break-all">retailx.ad@f5.si</a>
                    <span className="text-sm text-gray-400 block">(General Inquiries)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={16} className="text-retail-400 flex-shrink-0 mt-1" />
                  <div>
                    <a href="mailto:retailx.help.ad@f5.si" className="hover:text-retail-400 break-all">retailx.help.ad@f5.si</a>
                    <span className="text-sm text-gray-400 block">(Technical Support)</span>
                  </div>
                </div>
              </div>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Your email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-r-none border-gray-700 bg-gray-800 text-white w-full" 
                />
                <Button 
                  type="submit" 
                  className="rounded-l-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Mail size={16} />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Retail X. All rights reserved.</p>
          <p className="mt-2">
            Powered by <a href="https://adwebcomicagency.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-retail-400 hover:underline">Ad Web Comic Agency</a>
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:text-retail-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-retail-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/careers" className="hover:text-retail-400 transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
