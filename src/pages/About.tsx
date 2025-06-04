import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Users, Award, Briefcase, Target } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="pt-16 sm:pt-18 md:pt-20">
      {/* Hero Section with mobile optimization */}
      <section className="bg-retail-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">Our Story</h1>
            <p className="text-base sm:text-lg md:text-xl mb-0">
              Building the future of e-commerce, one store at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision with responsive layout */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1539269071019-8bc6d57b0205?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Our team planning"
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">Our Mission & Vision</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-5 md:mb-6">
                At Retail X, we're on a mission to democratize e-commerce for businesses of all sizes. 
                We believe that every entrepreneur deserves access to professional online store 
                solutions without the typical barriers of time, technical expertise, or excessive cost.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-7 md:mb-8">
                Our vision is to become the leading platform for rapid e-commerce deployment, 
                helping 100,000 businesses establish their online presence by 2026. We're committed 
                to continuous innovation, exceptional service, and building lasting partnerships with 
                our clients.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-retail-100 p-1 rounded-full shrink-0">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-retail-600" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">Quick 3-hour store setup</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-retail-100 p-1 rounded-full shrink-0">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-retail-600" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">20+ industry-specific templates</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-retail-100 p-1 rounded-full shrink-0">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-retail-600" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">Dedicated support team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with mobile-optimized grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              The principles that guide everything we do at Retail X.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm text-center">
              <div className="bg-retail-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-retail-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Customer First</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We prioritize our customers' needs and success in everything we do.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm text-center">
              <div className="bg-retail-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-retail-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We strive for the highest quality in our products and services.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm text-center">
              <div className="bg-retail-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-retail-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Integrity</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We act with honesty, transparency, and ethical standards.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm text-center">
              <div className="bg-retail-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <Target className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-retail-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We continuously evolve our solutions to meet changing market needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section with mobile-optimized card */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Meet Our Founder</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              The visionary behind Retail X dedicated to revolutionizing e-commerce.
            </p>
          </div>
          
          <div className="flex justify-center px-4">
            <Card className="max-w-sm sm:max-w-md overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src="/lovable-uploads/28143fe7-7eca-4b5d-94e9-c8a85bee7168.png" 
                  alt="Muhammed Adnan" 
                  className="w-full h-64 sm:h-80 md:h-[350px] object-cover object-top bg-gradient-to-b from-purple-50 to-white"
                />
              </div>
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-1">Muhammed Adnan</h3>
                <p className="text-gray-600 text-base sm:text-lg mb-3 sm:mb-4">Founder & CEO</p>
                <p className="text-sm sm:text-base text-gray-700">
                  With a passion for technology and business, Muhammed Adnan founded Retail X with a vision to democratize e-commerce for entrepreneurs worldwide. His innovative approach has transformed how businesses establish their online presence.
                </p>
                <div className="flex justify-center mt-4 sm:mt-6 space-x-3 sm:space-x-4">
                  <a href="https://www.linkedin.com/in/muhammedadnanvv/?locale=en_US" className="text-retail-600 hover:text-retail-800 transition-colors touch-target">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin sm:w-6 sm:h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="https://x.com/MuhammadAd93421" className="text-retail-600 hover:text-retail-800 transition-colors touch-target">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter sm:w-6 sm:h-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section with mobile-optimized buttons */}
      <section className="bg-retail-600 text-white py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Transform Your Retail Business?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-2">
            Let's work together to create your perfect online store in just 3 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button size="lg" variant="secondary" asChild className="font-medium text-retail-800 h-12 sm:h-auto text-sm sm:text-base touch-target">
              <Link to="/templates">Browse Templates</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-white/30 hover:bg-white/10 h-12 sm:h-auto text-sm sm:text-base touch-target">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
