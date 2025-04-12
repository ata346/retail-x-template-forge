
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Store, Search, X, ChevronRight } from "lucide-react";

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Template categories
  const categories = [
    "All",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home",
    "Food",
    "Sports",
    "Jewelry"
  ];

  // Template data
  const allTemplates = [
    {
      id: 1,
      name: "Fashion Forward",
      image: "https://images.unsplash.com/photo-1609146708541-adbf8e3b8151?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Fashion",
      description: "Modern and sleek template perfect for clothing brands.",
      popular: true
    },
    {
      id: 2,
      name: "Tech Hub",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Electronics",
      description: "Showcase your tech products with this innovative design.",
      popular: true
    },
    {
      id: 3,
      name: "Beauty Glow",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Beauty",
      description: "Elegant template for beauty and cosmetic products."
    },
    {
      id: 4,
      name: "Home Elegance",
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80",
      category: "Home",
      description: "Showcase furniture and home decor with style."
    },
    {
      id: 5,
      name: "Foodie Delight",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Food",
      description: "Perfect for restaurants and food delivery services."
    },
    {
      id: 6,
      name: "Sport Max",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Sports",
      description: "Dynamic template for sports equipment and apparel."
    },
    {
      id: 7,
      name: "Jewelry Luxe",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
      category: "Jewelry",
      description: "Elegant showcase for jewelry and accessories."
    },
    {
      id: 8,
      name: "Urban Wear",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Fashion",
      description: "Street style fashion template with bold design."
    },
    {
      id: 9,
      name: "Gadget World",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Electronics",
      description: "Showcase your gadgets with this tech-focused template."
    },
    {
      id: 10,
      name: "Natural Beauty",
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80",
      category: "Beauty",
      description: "Perfect for organic and natural beauty products."
    },
    {
      id: 11,
      name: "Modern Living",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Home",
      description: "Contemporary template for modern home furnishings."
    },
    {
      id: 12,
      name: "Gourmet Market",
      image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Food",
      description: "Showcase gourmet food products with this elegant design."
    },
    {
      id: 13,
      name: "Active Life",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Sports",
      description: "Energetic template for active lifestyle products."
    },
    {
      id: 14,
      name: "Gem Collection",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Jewelry",
      description: "Showcase fine jewelry with this luxurious template."
    },
    {
      id: 15,
      name: "Haute Couture",
      image: "https://images.unsplash.com/photo-1629374029669-aab2f060553b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      category: "Fashion",
      description: "Sophisticated template for high-end fashion brands."
    },
    {
      id: 16,
      name: "Smart Home",
      image: "https://images.unsplash.com/photo-1556196148-1fb724238998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      category: "Electronics",
      description: "Perfect for smart home devices and accessories."
    },
    {
      id: 17,
      name: "Spa Retreat",
      image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Beauty",
      description: "Serene template for spa and wellness products."
    },
    {
      id: 18,
      name: "Artisan Craft",
      image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
      category: "Home",
      description: "Showcase handcrafted home goods with this rustic template."
    },
    {
      id: 19,
      name: "Fitness Pro",
      image: "https://images.unsplash.com/photo-1517344368193-41552b6ad3f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Sports",
      description: "Dynamic template for fitness equipment and supplements."
    },
    {
      id: 20,
      name: "Vintage Charm",
      image: "https://images.unsplash.com/photo-1579503841518-61c907becee9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Jewelry",
      description: "Showcase vintage and antique jewelry collections."
    }
  ];

  // Filter templates based on tab and search
  const filterTemplates = (category: string, query: string) => {
    return allTemplates.filter(template => {
      const matchesCategory = category === "All" || template.category === category;
      const matchesSearch = template.name.toLowerCase().includes(query.toLowerCase()) || 
                           template.description.toLowerCase().includes(query.toLowerCase()) ||
                           template.category.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-retail-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">E-commerce Templates</h1>
            <p className="text-xl mb-8">
              Choose from our collection of 20 professional templates designed for various retail niches.
            </p>
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <X className="h-5 w-5 text-white/60 hover:text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All">
            <div className="overflow-x-auto pb-4 mb-6">
              <TabsList className="bg-white border border-gray-200">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="px-5 py-2.5 data-[state=active]:bg-retail-600 data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterTemplates(category, searchQuery).map((template) => (
                    <Card key={template.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative overflow-hidden h-56">
                        <img
                          src={template.image}
                          alt={template.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {template.popular && (
                          <Badge className="absolute top-3 right-3 bg-white text-retail-600">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-xl">{template.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {template.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-6">{template.description}</p>
                        <div className="flex justify-between items-center">
                          <Button variant="outline" asChild className="text-sm">
                            <Link to={`/templates/${template.id}`}>
                              Preview
                            </Link>
                          </Button>
                          <Button asChild className="text-sm">
                            <Link to="/contact">
                              Select <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filterTemplates(category, searchQuery).length === 0 && (
                  <div className="text-center py-12">
                    <Store className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">No templates found</h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button onClick={() => setSearchQuery("")} variant="outline">
                      Clear Search
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Don't see a template that fits your needs? Our team can create a custom design 
              tailored specifically for your business.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us for Custom Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;
