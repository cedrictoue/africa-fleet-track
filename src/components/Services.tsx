import { Navigation, Video, BarChart3, Shield, Wrench, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Navigation,
      title: "Tracking GPS",
      description: "Suivi en temps réel de vos véhicules et équipements avec historique complet des déplacements"
    },
    {
      icon: Shield,
      title: "Sécurisation",
      description: "Blocage moteur à distance en cas de vol ou d'impayé pour protéger vos investissements"
    },
    {
      icon: BarChart3,
      title: "Fleet Management",
      description: "Optimisation de votre flotte avec rapports détaillés, analyse de consommation et réduction des coûts"
    },
    {
      icon: Video,
      title: "Vidéo Embarquée",
      description: "Solutions de vidéosurveillance pour véhicules avec enregistrement et transmission en temps réel"
    },
    {
      icon: Wrench,
      title: "Suivi d'Entretien",
      description: "Gestion automatisée des maintenances avec alertes et historique pour prolonger la durée de vie"
    },
    {
      icon: Phone,
      title: "Support Dédié",
      description: "Équipe francophone experte disponible pour vous accompagner au quotidien"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des technologies de pointe adaptées au contexte africain pour sécuriser et optimiser votre flotte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-accent group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
