
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageCircle, TrendingUp, Star } from 'lucide-react';
import CommunityJoinButton from './CommunityJoinButton';
import { officialLinks } from '@/lib/seo-utils';

const CommunitySection: React.FC = () => {
  const communityStats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "2,500+",
      label: "Business Owners"
    }, 
    {
      icon: <MessageCircle className="h-6 w-6" />,
      value: "Daily",
      label: "Expert Tips"
    }, 
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "40%",
      label: "Avg Growth"
    }, 
    {
      icon: <Star className="h-6 w-6" />,
      value: "4.9/5",
      label: "Community Rating"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Thriving Business & E-commerce Community
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with successful business owners, entrepreneurs, website developers, and e-commerce experts. 
            Share insights, get support, and grow both your online business and professional website together.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {communityStats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="bg-blue-100 p-2 rounded-full mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-blue-700">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="space-y-4">
            <CommunityJoinButton variant="primary" className="text-lg px-8 py-4" />
            <p className="text-sm text-gray-500">
              Free to join • Exclusive website tips • Expert networking • Business growth strategies
            </p>
          </div>
          
          <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-lg max-w-lg mx-auto">
            <p className="text-sm text-gray-600 italic">
              "Being part of the Retail X community has connected me with other business owners facing similar challenges. 
              The insights I've gained have helped me improve both my business website and e-commerce performance." 
              <span className="font-semibold block mt-2">— Ravi Patel, Success Story</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
