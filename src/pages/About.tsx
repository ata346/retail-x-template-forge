import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Users, Award, Briefcase, Target } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-retail-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl mb-0">
              Building the future of e-commerce, one store at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1539269071019-8bc6d57b0205?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Our team planning"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Retail X, we're on a mission to democratize e-commerce for businesses of all sizes. 
                We believe that every entrepreneur deserves access to professional online store 
                solutions without the typical barriers of time, technical expertise, or excessive cost.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our vision is to become the leading platform for rapid e-commerce deployment, 
                helping 100,000 businesses establish their online presence by 2026. We're committed 
                to continuous innovation, exceptional service, and building lasting partnerships with 
                our clients.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-retail-100 p-1 rounded-full">
                    <Check className="h-5 w-5 text-retail-600" />
                  </div>
                  <span className="font-medium">Quick 3-hour store setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-retail-100 p-1 rounded-full">
                    <Check className="h-5 w-5 text-retail-600" />
                  </div>
                  <span className="font-medium">20+ industry-specific templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-retail-100 p-1 rounded-full">
                    <Check className="h-5 w-5 text-retail-600" />
                  </div>
                  <span className="font-medium">Dedicated support team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Retail X.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-retail-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-retail-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers' needs and success in everything we do.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-retail-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-retail-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in our products and services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-retail-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-retail-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We act with honesty, transparency, and ethical standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-retail-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-retail-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our solutions to meet changing market needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The visionary behind Retail X dedicated to revolutionizing e-commerce.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="max-w-md overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src="/lovable-uploads/28143fe7-7eca-4b5d-94e9-c8a85bee7168.png" 
                  alt="Muhammed Adnan" 
                  className="w-full h-[350px] object-cover object-top bg-gradient-to-b from-purple-50 to-white"
                />
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-1">Muhammed Adnan</h3>
                <p className="text-gray-600 text-lg mb-4">Founder & CEO</p>
                <p className="text-gray-700">
                  With a passion for technology and business, Muhammed Adnan founded Retail X with a vision to democratize e-commerce for entrepreneurs worldwide. His innovative approach has transformed how businesses establish their online presence.
                </p>
                <div className="flex justify-center mt-6 space-x-4">
                  <a href="https://linkedin.com" className="text-retail-600 hover:text-retail-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="https://twitter.com" className="text-retail-600 hover:text-retail-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-retail-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Retail Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create your perfect online store in just 3 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="font-medium text-retail-800">
              <Link to="/templates">Browse Templates</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-white border-white/30 hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
