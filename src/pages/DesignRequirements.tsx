import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  businessDescription: z.string().min(10, {
    message: "Please provide at least a brief description of your business.",
  }),
  specialRequirements: z.string().optional(),
});

const DesignRequirements = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [templateDetails, setTemplateDetails] = useState<any>(null);
  
  // Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      businessDescription: "",
      specialRequirements: "",
    },
  });

  // Get template details based on the ID
  useEffect(() => {
    // This would typically be a fetch from an API
    // For now, we'll use the template data from the Templates page
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
    
    const template = allTemplates.find(t => t.id === Number(templateId));
    if (!template) {
      toast({
        title: "Template not found",
        description: "Please go back and select a valid template.",
        variant: "destructive",
      });
      navigate("/templates");
      return;
    }
    
    setTemplateDetails(template);
  }, [templateId, navigate, toast]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values, templateId });
    
    // Here you would typically send this data to your backend
    toast({
      title: "Requirements submitted!",
      description: "We'll be in touch with you soon about your project.",
    });
    
    // Redirect to home page or confirmation page
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  if (!templateDetails) {
    return (
      <div className="pt-20 container mx-auto px-4 py-16 flex justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="bg-retail-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Design Requirements</h1>
            <p className="text-lg mb-4">
              You've selected the <span className="font-bold">{templateDetails.name}</span> template
            </p>
            <p className="text-base opacity-90">
              Please fill out the form below to help us customize the template to your needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="md:w-1/3">
                <div className="aspect-video rounded-md overflow-hidden">
                  <img 
                    src={templateDetails.image}
                    alt={templateDetails.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">{templateDetails.name}</h3>
                <p className="text-gray-600 mb-3">{templateDetails.description}</p>
                <div className="inline-block bg-gray-200 px-3 py-1 text-sm rounded-full">
                  {templateDetails.category}
                </div>
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your business name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Person</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="businessDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your business, products/services, target audience..." 
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This helps us customize the template to match your business needs.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="specialRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requirements (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any specific features, integrations, or design preferences..." 
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Any additional requirements or preferences for your website.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end gap-4">
                  <Button type="button" variant="outline" onClick={() => navigate("/templates")}>
                    Back to Templates
                  </Button>
                  <Button type="submit">
                    Submit Requirements
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignRequirements;
