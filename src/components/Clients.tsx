import { Building2, Car, Factory, Store, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import bankImage from "@/assets/bank-building.jpg";
import dealershipImage from "@/assets/dealership.jpg";
import corporateImage from "@/assets/corporate-building.jpg";
import smeImage from "@/assets/sme-vehicles.jpg";

const Clients = () => {
  const clientSegments = [
    {
      icon: Factory,
      title: "Grandes Entreprises",
      description: "Pilotez vos opérations avec précision grâce à une plateforme unifiée qui optimise les coûts, améliore la productivité et renforce la sécurité de vos équipes.",
      image: corporateImage,
      benefits: [
        "Vision consolidée des flottes multi-sites et multi-pays",
        "Optimisation des trajets, carburant et coûts d'exploitation",
        "Suivi de la productivité des équipes terrain",
        "Amélioration de la sécurité des collaborateurs",
        "Tableaux de bord et reporting personnalisés"
      ]
    },
    {
      icon: Building2,
      title: "Banques & Institutions Financières",
      description: "Sécurisez vos financements automobiles et gardez une visibilité totale sur les véhicules financés ou mis en garantie, partout en Afrique. Nos technologies renforcent votre gestion du risque.",
      image: bankImage,
      benefits: [
        "Suivi en temps réel des véhicules financés et alertes automatiques",
        "Détection précoce des comportements anormaux et mouvements suspects",
        "Rapports d'usage détaillés pour le scoring et le contrôle des risques",
        "Réduction des fraudes, impayés et pertes financières",
        "Pilotage multi-pays et multi-agences avec consolidation instantanée"
      ]
    },
    {
      icon: Car,
      title: "Concessionnaires Automobiles",
      description: "Renforcez la sécurité de vos parcs et enrichissez votre offre commerciale grâce à des services connectés à forte valeur ajoutée.",
      image: dealershipImage,
      benefits: [
        "Sécurisation intelligente des stocks neufs et d'occasion",
        "Démonstrateurs connectés pour vos équipes de vente",
        "Services GPS intégrés dans vos offres commerciales",
        "Suivi après-vente simplifié et fidélisation renforcée",
        "Réduction des vols et usages non autorisés"
      ]
    },
    {
      icon: Store,
      title: "TPE & PME",
      description: "Des solutions simples, fiables et abordables pour aider les PME à garder le contrôle sur leurs véhicules et sécuriser leurs opérations au quotidien.",
      image: smeImage,
      benefits: [
        "Tarification adaptée aux PME",
        "Installation rapide et formation incluse",
        "Suivi en temps réel pour limiter les abus",
        "Support en français 24/7",
        "Solution évolutive selon votre croissance"
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
