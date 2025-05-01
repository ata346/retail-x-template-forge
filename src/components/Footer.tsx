import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Store, Mail, Phone, MapPin, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Footer = () => {
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    // In a real app, you would send this to a backend
    toast({
      title: "Subscribed!",
      description: `Thank you for subscribing with ${email}`
    });
    form.reset();
  };
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Store className="h-8 w-8 text-retail-400" />
              <span className="font-heading font-bold text-xl">Retail X</span>
            </div>
            <p className="mb-4 text-gray-300">
              Building the future of e-commerce, one store at a time.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="hover:text-retail-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-retail-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-retail-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-retail-400 transition-colors">
                <Linkedin size={20} />
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
                
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-retail-400 transition-colors">
                  Contact Us
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
              <p className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-retail-400 flex-shrink-0" />
                <span>Quilandy - Thamarassery - Balussery Road, Ullieryi19</span>
              </p>
              <p className="mt-2">Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p className="flex items-center gap-2 mt-2">
                <Phone size={16} className="text-retail-400 flex-shrink-0" />
                <a href="tel:+919656778508" className="hover:text-retail-400">+91 9656778508</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-retail-400 flex-shrink-0" />
                <a href="mailto:retailx.ad@f5.si" className="hover:text-retail-400">retailx.ad@f5.si</a>
                <span className="text-sm text-gray-400">(General Inquiries)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-retail-400 flex-shrink-0" />
                <a href="mailto:retailx.help.ad@f5.si" className="hover:text-retail-400">retailx.help.ad@f5.si</a>
                <span className="text-sm text-gray-400">(Technical Support)</span>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <div className="flex">
                <Input type="email" name="email" placeholder="Your email" required className="rounded-r-none border-gray-700 bg-gray-800 text-white" />
                <Button type="submit" className="rounded-l-none">
                  <Mail size={16} />
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Retail X. All rights reserved.</p>
          <p className="mt-2">
            Powered by <a href="https://adwebcomicagency.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-retail-400 hover:underline">Ad Web Comic Agency</a>
          </p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-retail-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-retail-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;