
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Careers = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-purple text-white py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Join the Team That's Building the Future of eCommerce
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Retail X is on a mission to empower local businesses with smart, AI-powered online stores.
            </p>
          </div>
        </div>
        <div className="hero-blob left-1/4 top-1/3 opacity-20"></div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-purple mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our dynamic team and help shape the future of local eCommerce
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-t-4 border-t-brand-purple hover:shadow-lg transition-shadow">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-purple">Telecaller (Cold Caller) – Freelance</h3>
                    <p className="text-gray-500 mt-1">5 Openings</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium">
                      Freelance
                    </span>
                    <span className="bg-brand-coral/10 text-brand-coral px-3 py-1 rounded-full text-sm font-medium">
                      Malayalam
                    </span>
                    <span className="bg-brand-peach/10 text-brand-peach px-3 py-1 rounded-full text-sm font-medium">
                      Remote
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Make outbound calls to potential leads</li>
                    <li>Convert leads into paying clients</li>
                    <li>Meet a monthly target of 6 successful client closures</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Excellent communication in Malayalam</li>
                    <li>Ability to close deals independently</li>
                    <li>Self-motivated and results-driven</li>
                    <li>Freshers and 1+ year experienced candidates welcome</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Compensation:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>₹1,200 per client (if minimum 6 clients closed in a month)</li>
                    <li>₹220 per client (if fewer than 6 clients closed)</li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full sm:w-auto" variant="default">
                    <a 
                      href="https://forms.gle/7oPg5C8rroo6ucsy8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Apply Now <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Join Retail X Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-brand-purple mb-4">Why Join Retail X</h2>
            <p className="text-gray-600">
              Be part of a growing team that's transforming eCommerce for local businesses
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="border-none shadow-md bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple">
                    <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6l5 5v9a2 2 0 0 1-2 2h-6"></path><path d="m3 15 4 4 4-4"></path><path d="M7 19V9"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">100% Remote</h3>
                <p className="text-gray-600">Work from anywhere with flexible freelance opportunities</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple">
                    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Performance-Based</h3>
                <p className="text-gray-600">Earn more when you achieve better results</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Supportive Team</h3>
                <p className="text-gray-600">Join a goal-driven environment that helps you succeed</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-brand-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 13h8"></path><path d="M8 17h8"></path><path d="M8 9h2"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Long-term Growth</h3>
                <p className="text-gray-600">Opportunity for continued collaboration and career development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 md:py-20 bg-brand-purple text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">How to Apply</h2>
            <p className="text-lg mb-8 opacity-90">
              Send your resume or portfolio to:
              <br />
              <a href="mailto:adwebcomicagency@gmail.com" className="underline hover:opacity-90">adwebcomicagency@gmail.com</a>
            </p>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-purple">
              <a 
                href="https://forms.gle/7oPg5C8rroo6ucsy8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Apply Now <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="hero-blob right-1/4 bottom-1/3 opacity-20"></div>
      </section>
    </div>
  );
};

export default Careers;
