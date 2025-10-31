import { Building2, Car, Factory, Store, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import bankImage from "@/assets/bank-building.jpg";
import dealershipImage from "@/assets/dealership.jpg";
import corporateImage from "@/assets/corporate-building.jpg";
import smeImage from "@/assets/sme-vehicles.jpg";

const Clients = () => {
  const clientSegments = [
    {
      icon: Building2,
      title: "Banques & Institutions Financières",
      description: "Sécurisez vos financements automobiles et suivez vos parcs en temps réel.",
      image: bankImage,
      benefits: [
        "Géolocalisation en temps réel des véhicules financés",
        "Alertes immédiates en cas de déplacement anormal",
        "Rapports détaillés sur l'usage et l'état du véhicule",
        "Réduction des risques de fraude et de perte"
      ]
    },
    {
      icon: Car,
      title: "Concessionnaires Automobiles",
      description: "Protégez votre stock et offrez plus de sécurité à vos clients.",
      image: dealershipImage,
      benefits: [
        "Sécurisation du stock de véhicules neufs et d'occasion",
        "Offre de services de tracking à vos acheteurs",
        "Valorisation de votre proposition commerciale",
        "Suivi après-vente simplifié"
      ]
    },
    {
      icon: Factory,
      title: "Grandes Entreprises",
      description: "Optimisez la gestion de vos flottes avec des outils d'analyse avancée.",
      image: corporateImage,
      benefits: [
        "Suivi en temps réel de l'ensemble de votre flotte",
        "Optimisation des trajets et consommation de carburant",
        "Amélioration de la productivité et de la sécurité",
        "Tableaux de bord et rapports personnalisés"
      ]
    },
    {
      icon: Store,
      title: "TPE & PME",
      description: "Solutions abordables et simples pour les petites et moyennes entreprises.",
      image: smeImage,
      benefits: [
        "Prix adapté aux budgets des PME",
        "Installation rapide et formation incluse",
        "Support en français disponible 24/7",
        "Évolutivité selon vos besoins"
      ]
    }
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Solutions par Secteur
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions adaptées à chaque type d'activité
          </p>
        </div>

        <div className="space-y-12">
          {clientSegments.map((segment, index) => {
            const Icon = segment.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg border border-border`}
              >
                {/* Image */}
                <div className="flex-1">
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {segment.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {segment.description}
                  </p>

                  <div className="space-y-3">
                    {segment.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="mt-6 bg-primary hover:bg-primary/90 text-white"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
