import { Button } from "@/components/ui/button";
import { MapPin, Shield, BarChart3 } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary/5 to-accent/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Mapping Contrôle Afrique" className="w-full max-w-3xl h-auto" />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
            <span className="text-accent font-semibold">Leader en Afrique</span>
            <span className="text-foreground">• 22 pays • 40 000+ véhicules</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Solutions de Gestion de Flottes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Connectées
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Tracking, Fleet Management, Analyse de Conduite et Vidéo Embarquée pour sécuriser et optimiser votre flotte en Afrique
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card backdrop-blur-sm border border-border shadow-sm">
              <MapPin className="w-8 h-8 text-accent" />
              <h3 className="font-semibold text-foreground">Tracking GPS</h3>
              <p className="text-sm text-muted-foreground">Localisation en temps réel</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card backdrop-blur-sm border border-border shadow-sm">
              <Shield className="w-8 h-8 text-accent" />
              <h3 className="font-semibold text-foreground">Sécurisation</h3>
              <p className="text-sm text-muted-foreground">Blocage à distance</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card backdrop-blur-sm border border-border shadow-sm">
              <BarChart3 className="w-8 h-8 text-accent" />
              <h3 className="font-semibold text-foreground">Optimisation</h3>
              <p className="text-sm text-muted-foreground">Réduction des coûts</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
            >
              Demander une Démo
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              Découvrir nos Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
