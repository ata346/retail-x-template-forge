
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Store } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Store className="h-8 w-8 text-retail-600" />
            <span className="font-heading font-bold text-xl text-foreground">Retail X</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground font-medium hover:text-retail-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/pricing"
              className="text-foreground font-medium hover:text-retail-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-foreground font-medium hover:text-retail-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground font-medium hover:text-retail-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/contact">Visit Us</Link>
            </Button>
            <Button asChild>
              <Link to="/design-requirements/1">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4 animate-fade-in">
            <nav className="flex flex-col space-y-6 pt-8">
              <Link
                to="/"
                className="text-foreground text-lg font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/pricing"
                className="text-foreground text-lg font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-foreground text-lg font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-foreground text-lg font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="pt-4 flex flex-col space-y-4">
                <Button variant="outline" asChild className="w-full" onClick={toggleMenu}>
                  <Link to="/contact">Visit Us</Link>
                </Button>
                <Button asChild className="w-full" onClick={toggleMenu}>
                  <Link to="/design-requirements/1">Get Started</Link>
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
