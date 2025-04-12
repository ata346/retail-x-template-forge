
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Users, Award, Briefcase, Target } from "lucide-react";

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

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate experts behind Retail X dedicated to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=654&q=80"
              },
              {
                name: "Samantha Lee",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
              },
              {
                name: "Michael Roberts",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Priya Sharma",
                role: "Customer Success",
                image: "https://images.unsplash.com/photo-1619346088889-2e3a2108ad99?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
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
