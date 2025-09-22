import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bakery-chocolate mb-8">
            Visit Us Today
          </h2>
          <div className="w-24 h-1 bg-bakery-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Come taste the difference that fresh, artisan baking makes. We'd love to see you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-warm border-0 shadow-warm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold text-bakery-chocolate mb-6">
                  Bakery Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-bakery-gold rounded-full flex-shrink-0 mt-1 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-bakery-chocolate mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        123 Baker Street<br />
                        Downtown District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-bakery-gold rounded-full flex-shrink-0 mt-1 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-bakery-chocolate mb-1">Phone</h4>
                      <p className="text-muted-foreground">(555) 123-BAKE</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-bakery-gold rounded-full flex-shrink-0 mt-1 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-bakery-chocolate mb-1">Email</h4>
                      <p className="text-muted-foreground">hello@goldencrust.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-bakery-gold rounded-full flex-shrink-0 mt-1 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-bakery-chocolate mb-1">Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 6:00 AM - 7:00 PM</p>
                        <p>Saturday: 6:00 AM - 8:00 PM</p>
                        <p>Sunday: 7:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-warm overflow-hidden">
              <div className="h-64 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-bakery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Interactive Map Coming Soon
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 Baker Street, Downtown District
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-warm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold text-bakery-chocolate mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-bakery-chocolate mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-muted focus:border-bakery-gold"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-bakery-chocolate mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-muted focus:border-bakery-gold"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-bakery-chocolate mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-muted focus:border-bakery-gold"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-bakery-chocolate mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-muted focus:border-bakery-gold resize-none"
                    placeholder="Tell us about your custom order, questions, or special requests..."
                  />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;