
import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors touch-target"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-brand-purple" />
        ) : (
          <Menu className="h-6 w-6 text-brand-purple" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu */}
      <div className={cn(
        "fixed top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden transition-all duration-300 ease-in-out",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <nav className="p-4 space-y-4">
          <Link
            to="/"
            onClick={closeMenu}
            className={cn(
              "block py-3 px-4 rounded-lg transition-colors touch-target",
              isActive('/') 
                ? "bg-brand-purple text-white" 
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            Home
          </Link>
          
          <Link
            to="/templates"
            onClick={closeMenu}
            className={cn(
              "block py-3 px-4 rounded-lg transition-colors touch-target",
              isActive('/templates') 
                ? "bg-brand-purple text-white" 
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            Templates
          </Link>
          
          <Link
            to="/about"
            onClick={closeMenu}
            className={cn(
              "block py-3 px-4 rounded-lg transition-colors touch-target",
              isActive('/about') 
                ? "bg-brand-purple text-white" 
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            About
          </Link>
          
          <Link
            to="/pricing"
            onClick={closeMenu}
            className={cn(
              "block py-3 px-4 rounded-lg transition-colors touch-target",
              isActive('/pricing') 
                ? "bg-brand-purple text-white" 
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            Pricing
          </Link>
          
          <Link
            to="/contact"
            onClick={closeMenu}
            className={cn(
              "block py-3 px-4 rounded-lg transition-colors touch-target",
              isActive('/contact') 
                ? "bg-brand-purple text-white" 
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-gray-200 space-y-3">
            <Button 
              asChild 
              className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white touch-target"
              onClick={closeMenu}
            >
              <a 
                href="https://forms.gle/8EfxuZgW5dMhondk7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Build Website <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNavbar;
