import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Mapping Control Afrique" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              Demander une Démo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white hover:bg-primary-foreground/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-white hover:bg-primary-foreground/10 rounded-md"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="block w-full text-left px-4 py-2 text-white hover:bg-primary-foreground/10 rounded-md"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-white hover:bg-primary-foreground/10 rounded-md"
            >
              À Propos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-white hover:bg-primary-foreground/10 rounded-md"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              Demander une Démo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
