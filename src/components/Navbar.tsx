
import React from 'react';
import { Link } from 'react-router-dom';
import { usePathname } from '@/hooks/use-pathname';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { siteConfig } from '@/config/site';
import { Icons } from './icons';
import { ThemeSelector } from './ThemeSelector';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <div className="bg-background border-b sticky top-0 z-50 w-full backdrop-blur-sm bg-background/95 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 md:px-6 lg:px-8">

        {/* Mobile Menu - Left aligned */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden shrink-0 h-9 w-9 sm:h-10 sm:w-10 hover:bg-accent"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[320px] p-4">
            <SheetHeader className="text-left">
              <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              <SheetDescription className="text-sm">
                Navigate through Retail X
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2 mt-6">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href} 
                  className="block py-3 px-3 text-base font-medium hover:text-primary transition-colors rounded-lg hover:bg-accent/80 active:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo - Center on mobile, left on desktop */}
        <Link 
          to="/" 
          className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none touch-target"
        >
          <Icons.logo className="h-5 w-auto sm:h-6 md:h-7 lg:h-8" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex items-center gap-1 xl:gap-2">
          <NavigationMenuList className="flex gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link 
                  to={item.href} 
                  className="relative block py-2 px-3 xl:px-4 font-medium text-sm xl:text-base transition-colors hover:text-primary data-[active]:text-primary rounded-md hover:bg-accent/50 touch-target"
                >
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Spacer for mobile to balance the hamburger menu */}
        <div className="w-9 sm:w-10 lg:hidden flex justify-end">
          <ThemeSelector />
        </div>

        {/* Desktop Theme Selector */}
        <div className="hidden lg:block">
          <ThemeSelector />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
