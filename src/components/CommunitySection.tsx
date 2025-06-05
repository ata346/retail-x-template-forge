
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageCircle, TrendingUp, Star } from 'lucide-react';
import CommunityJoinButton from './CommunityJoinButton';
import { officialLinks } from '@/lib/seo-utils';

const CommunitySection: React.FC = () => {
  const communityStats = [{
    icon: <Users className="h-6 w-6" />,
    value: "2,500+",
    label: "Business Owners"
  }, {
    icon: <MessageCircle className="h-6 w-6" />,
    value: "Daily",
    label: "Static Website Tips"
  }, {
    icon: <TrendingUp className="h-6 w-6" />,
    value: "40%",
    label: "Avg Growth"
  }, {
    icon: <Star className="h-6 w-6" />,
    value: "4.9/5",
    label: "Community Rating"
  }];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Static Website & E-commerce AI Community
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with successful business owners, entrepreneurs, and developers using our AI system for static websites. 
            Share insights, get support, and grow your static online business with expert networking and AI-powered solutions.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <CommunityJoinButton variant="primary" className="text-lg px-8 py-4" />
            <p className="text-sm text-gray-500">
              Free to join • Exclusive static website tips • AI system insights • Business growth strategies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
