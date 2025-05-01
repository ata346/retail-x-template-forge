
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Store, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when changing from mobile to desktop view
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const textColor = isScrolled || isOpen ? "text-brand-purple" : "text-white";

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Store className={`h-7 w-7 ${textColor}`} />
            <span className={`font-heading font-bold text-xl ${textColor} hover:opacity-80 transition-colors`}>Retail X</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${textColor} font-medium hover:opacity-80 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/pricing"
              className={`${textColor} font-medium hover:opacity-80 transition-colors`}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className={`${textColor} font-medium hover:opacity-80 transition-colors`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${textColor} font-medium hover:opacity-80 transition-colors`}
            >
              Contact
            </Link>
            <Link
              to="/careers"
              className={`${textColor} font-medium hover:opacity-80 transition-colors`}
            >
              Careers
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/contact">Visit Us</Link>
            </Button>
            <Button asChild variant="default">
              <a 
                href="https://forms.gle/8EfxuZgW5dMhondk7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Apply for e-com <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <button
            className={`md:hidden ${textColor} focus:outline-none`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md z-40 p-4 animate-fade-in">
            <nav className="flex flex-col space-y-6 pt-8">
              <Link
                to="/"
                className="text-brand-purple text-lg font-medium py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/pricing"
                className="text-brand-purple text-lg font-medium py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-brand-purple text-lg font-medium py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-brand-purple text-lg font-medium py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className="text-brand-purple text-lg font-medium py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={toggleMenu}
              >
                Careers
              </Link>
              <div className="pt-4 flex flex-col space-y-4">
                <Button variant="outline" asChild className="w-full" onClick={toggleMenu}>
                  <Link to="/contact">Visit Us</Link>
                </Button>
                <Button 
                  asChild 
                  className="w-full" 
                  onClick={toggleMenu}
                  variant="default"
                >
                  <a 
                    href="https://forms.gle/8EfxuZgW5dMhondk7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 justify-center"
                  >
                    Apply for e-com <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
