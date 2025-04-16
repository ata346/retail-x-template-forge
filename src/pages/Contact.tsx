
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will contact you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-brand-purple text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl">
              Have questions? Get in touch with our team or visit our store.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Get in Touch</h2>
              
              <div className="grid gap-4 md:gap-8">
                <Card>
                  <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                    <div className="bg-brand-peach/30 p-2 md:p-3 rounded-full shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-brand-coral" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 md:mb-2">Our Location</h3>
                      <address className="not-italic text-gray-700 text-sm md:text-base">
                        Quilandy - Thamarassery - Balussery Road<br />
                        Ullieryi19<br />
                        India
                      </address>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                    <div className="bg-brand-peach/30 p-2 md:p-3 rounded-full shrink-0">
                      <Clock className="h-5 w-5 md:h-6 md:w-6 text-brand-coral" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 md:mb-2">Business Hours</h3>
                      <ul className="text-gray-700 text-sm md:text-base">
                        <li>Monday - Friday: 9am - 6pm</li>
                        <li>Saturday: 10am - 4pm</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                    <div className="bg-brand-peach/30 p-2 md:p-3 rounded-full shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-brand-coral" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 md:mb-2">Phone</h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        <a href="tel:+919656778508" className="hover:text-brand-coral">
                          +91 9656778508
                        </a>
                      </p>
                      <p className="text-gray-700 text-xs md:text-sm mt-1">Sales & Support available</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                    <div className="bg-brand-peach/30 p-2 md:p-3 rounded-full shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-brand-coral" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 md:mb-2">Email</h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        <a href="mailto:retailx.ad@f5.si
" className="hover:text-brand-coral">
                          retailx.ad@f5.si

                        </a>
                      </p>
                      <p className="text-gray-700 text-xs md:text-sm mt-1">For general inquiries</p>
                      <p className="text-gray-700 text-sm md:text-base mt-2">
                        <a href="mailto:retailx.help.ad@f5.si" className="hover:text-brand-coral">
                          retailx.help.ad@f5.si
                        </a>
                      </p>
                      <p className="text-gray-700 text-xs md:text-sm mt-1">For technical support</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 mt-8 lg:mt-0">Send Us a Message</h2>
              
              <Card>
                <CardContent className="p-4 md:p-6">
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="font-medium text-sm md:text-base">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="h-10 md:h-11"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="font-medium text-sm md:text-base">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="h-10 md:h-11"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="font-medium text-sm md:text-base">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          className="h-10 md:h-11"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="font-medium text-sm md:text-base">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help you?"
                          className="h-10 md:h-11"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="font-medium text-sm md:text-base">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please provide details about your inquiry..."
                        className="min-h-[100px] md:min-h-[150px] text-sm md:text-base"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full h-11"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Find Our Store</h2>
            <p className="text-gray-600 text-sm md:text-base">
              Visit our retail location to explore templates in person and talk to our experts.
            </p>
          </div>
          
          <div className="overflow-hidden rounded-lg shadow-md">
            <div className="h-[250px] md:h-[350px] lg:h-[400px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4244762951826!2d75.78443507481538!3d11.449256888743397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6636db34204c5%3A0xc2fa9d054e3a60af!2sAD%20WEB%20COMIC%20Agency!5e0!3m2!1sen!2sin!4v1744436146754!5m2!1sen!2sin!4v1744436146754!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Find quick answers to common questions about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How long does it take to set up my store?",
                answer: "Setup times vary by plan:\n- Basic Plan: 5 days\n- Standard Plan: 3 days\n- Premium Plan: 2 days\n- Elite Premium Plan: 24/7 hours"
              },
              {
                question: "Can I customize the templates to match my brand?",
                answer: "Yes, all of our templates are fully customizable. We can tailor the colors, fonts, and layouts to perfectly match your brand identity. Once you apply, you'll receive an email where you can browse and select your preferred template."
              },
              {
                question: "Do you offer ongoing support after launch?",
                answer: "Absolutely! We offer various support packages to help maintain and update your store after it launches."
              },
              {
                question: "How much does a custom store cost?",
                answer: "Our standard package starts at 499 INR, which includes template selection, customization, and product setup. Custom solutions may vary in price."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3">{faq.question}</h3>
                  <p className="text-gray-600 text-sm md:text-base" style={{ whiteSpace: 'pre-line' }}>{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
