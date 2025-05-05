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
import { ModeToggle } from './ModeToggle';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { siteConfig } from '@/config/site';
import { Icons } from './icons';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Templates', href: '/templates' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <div className="bg-background border-b sticky top-0 z-50 w-full">
      <div className="container flex items-center justify-between py-4">

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:w-2/3 md:w-1/2">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through Retail X
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} className="block py-2 text-lg font-medium hover:text-primary">{item.label}</Link>
              ))}
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link to="/" className="font-bold text-xl md:text-2xl flex items-center gap-2">
          <Icons.logo className="h-6 w-6" />
          {siteConfig.name}
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex items-center gap-4">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link to={item.href} className="relative block py-2 px-3 font-medium transition-colors hover:text-primary data-[active]:text-primary data-[state=open]:bg-secondary/50">
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
