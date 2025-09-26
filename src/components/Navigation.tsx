import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

 return (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-background/95 backdrop-blur-md shadow-warm" : "bg-transparent"
  }`}>
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className={`text-2xl font-display font-bold ${isScrolled ? "text-bakery-chocolate" : "text-white"}`}>
          Golden Crust
        </div>
        
        <div className={`hidden md:flex items-center space-x-8 ${isScrolled ? "text-bakery-chocolate" : "text-white"}`}>
          <button 
            onClick={() => scrollToSection("home")}
            className="hover:text-bakery-gold transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="hover:text-bakery-gold transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("menu")}
            className="hover:text-bakery-gold transition-colors font-medium"
          >
            Menu
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")}
            className="hover:text-bakery-gold transition-colors font-medium"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="hover:text-bakery-gold transition-colors font-medium"
          >
            Contact
          </button>
        </div>

        <Button 
          onClick={() => scrollToSection("contact")}
          className="btn-hero"
        >
          Order Now
        </Button>
      </div>
    </div>
  </nav>
);
};

export default Navigation;