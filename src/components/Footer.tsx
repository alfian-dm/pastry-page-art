import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-bakery-chocolate text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Bakery Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4 text-bakery-gold">
              Golden Crust
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Bringing you fresh, artisan-baked goods daily since 1985. From our family to yours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-bakery-gold rounded-full flex items-center justify-center hover:bg-bakery-gold/80 transition-colors">
                <span className="text-white text-lg">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-bakery-gold rounded-full flex items-center justify-center hover:bg-bakery-gold/80 transition-colors">
                <span className="text-white text-lg">@</span>
              </a>
              <a href="#" className="w-10 h-10 bg-bakery-gold rounded-full flex items-center justify-center hover:bg-bakery-gold/80 transition-colors">
                <span className="text-white text-lg">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-bakery-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-bakery-gold transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-white/80 hover:text-bakery-gold transition-colors">Menu</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-bakery-gold transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-bakery-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-white/80">Custom Cakes</span></li>
              <li><span className="text-white/80">Wedding Catering</span></li>
              <li><span className="text-white/80">Corporate Orders</span></li>
              <li><span className="text-white/80">Baking Classes</span></li>
              <li><span className="text-white/80">Online Ordering</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">
              Get weekly updates on our fresh specials and seasonal treats!
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-bakery-gold"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-bakery-gold hover:bg-bakery-gold/80 text-white border-0"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Golden Crust Bakery. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-bakery-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-bakery-gold text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;