
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
import { Menu } from "lucide-react"
import { siteConfig } from '@/config/site';
import { Icons } from './icons';

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
      <div className="container flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">

        {/* Mobile Menu - Left aligned */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through Retail X
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  to={item.href} 
                  className="block py-3 px-2 text-lg font-medium hover:text-primary transition-colors rounded-md hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo - Center on mobile, left on desktop */}
        <Link to="/" className="font-bold text-lg sm:text-xl lg:text-2xl flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none">
          <Icons.logo className="h-6 w-auto sm:h-7 lg:h-8" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex items-center gap-2 xl:gap-4">
          <NavigationMenuList className="flex gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link 
                  to={item.href} 
                  className="relative block py-2 px-3 font-medium text-sm xl:text-base transition-colors hover:text-primary data-[active]:text-primary rounded-md hover:bg-accent/50"
                >
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Spacer for mobile to balance the hamburger menu */}
        <div className="w-10 lg:hidden"></div>

      </div>
    </div>
  );
};

export default Navbar;
