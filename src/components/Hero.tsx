import { Button } from "@/components/ui/button";
import { Globe2, Car, Users, Award } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-trucks.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Globe2, value: "200+", label: "PAYS COUVERTS" },
    { icon: Car, value: "22", label: "VÉHICULES" },
    { icon: Users, value: "40K+", label: "CLIENTS ACTIFS" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Fleet Management" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8">
            <img src={logo} alt="Mapping Control Afrique" className="h-24 w-auto" />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Solutions de Fleet Management{" "}
            <span className="text-secondary">
              et tracking
            </span>{" "}
            partout en Afrique
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Sécurisez et optimisez votre flotte grâce à nos technologies GPS, vidéos embarquées et outils d'analyse avancée.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg shadow-lg"
            >
              📍 DEMANDER UNE DEMO
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg"
            >
              📚 TÉLÉCHARGER LA BROCHURE
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-3">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
