import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Shield, Video, BarChart3, Wrench, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Tracking GPS",
      description: "Suivi en temps réel de votre flotte avec géolocalisation précise, historique des trajets et alertes intelligentes"
    },
    {
      icon: Shield,
      title: "Sécurisation",
      description: "Protection avancée avec blocage moteur à distance, alertes anti-vol et zones de sécurité personnalisées"
    },
    {
      icon: BarChart3,
      title: "Fleet Management",
      description: "Optimisation complète de la gestion avec tableaux de bord, rapports détaillés et analyses de performance"
    },
    {
      icon: Video,
      title: "Vidéo Embarquée",
      description: "Caméras HD intelligentes avec enregistrement continu, détection d'événements et accès à distance"
    },
    {
      icon: Wrench,
      title: "Suivi d'Entretien",
      description: "Planification automatique des maintenances, alertes préventives et suivi complet de l'historique"
    },
    {
      icon: Headphones,
      title: "Support Dédié",
      description: "Accompagnement personnalisé 24/7 en français avec formation complète et assistance technique"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des technologies de pointe pour une gestion optimale de votre flotte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
