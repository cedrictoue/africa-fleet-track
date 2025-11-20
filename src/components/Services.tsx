import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Shield, Video, BarChart3, Wrench, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Tracking GPS",
      description: "Suivi temps réel, historique complet, alertes dynamiques et cartes intelligentes pour un contrôle total de vos déplacements, où que vous soyez."
    },
    {
      icon: Shield,
      title: "Sécurisation",
      description: "Sécurité renforcée : anti-vol avancé, immobilisation moteur à distance, zones de sécurité personnalisées et alertes critiques instantanées."
    },
    {
      icon: BarChart3,
      title: "Fleet Management",
      description: "Un pilotage complet : tableaux de bord sur mesure, rapports automatiques, analyse des coûts, KPI de performance et notifications proactives."
    },
    {
      icon: Video,
      title: "Vidéo Embarquée",
      description: "Caméras HD intelligentes avec détection d’événements, enregistrement continu, coaching conducteur et accès cloud en temps réel."
    },
    {
      icon: Wrench,
      title: "Suivi d'Entretien",
      description: "Planification automatique des maintenances, alertes préventives, historique centralisé et optimisation du coût de possession (TCO)."
    },
    {
      icon: Headphones,
      title: "Support Dédié",
      description: "Une équipe experte, locale et multilingue, disponible en continu pour accompagner vos utilisateurs, techniciens et équipes terrain."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            NOS SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technologies de Pointe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions innovantes pour optimiser et sécuriser votre flotte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                <Card className="relative h-full bg-card/80 backdrop-blur-sm border-2 border-border hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
