import { Building2, Car, Factory, Store } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

const Clients = () => {
  const clientSegments = [
    {
      icon: Building2,
      title: "Banques & Institutions Financières",
      description: "Protégez vos actifs et optimisez la gestion de vos flottes institutionnelles avec une traçabilité complète et des rapports conformes aux normes bancaires.",
      benefits: [
        "Gestion sécurisée des véhicules de fonction",
        "Reporting détaillé pour conformité",
        "Suivi des véhicules financés"
      ]
    },
    {
      icon: Car,
      title: "Concessionnaires Automobiles",
      description: "Sécurisez l'intégralité de vos stocks et véhicules de démonstration avec un système de tracking performant adapté au secteur automobile.",
      benefits: [
        "Protection anti-vol des stocks",
        "Gestion des véhicules de démonstration",
        "Suivi des véhicules en transit"
      ]
    },
    {
      icon: Factory,
      title: "Grandes Entreprises",
      description: "Optimisez la performance de vos flottes importantes grâce à nos outils d'analyse avancés et notre accompagnement dédié aux grandes structures.",
      benefits: [
        "Tableaux de bord personnalisés",
        "Optimisation des trajets et consommations",
        "Formation et support prioritaire"
      ]
    },
    {
      icon: Store,
      title: "TPE & PME",
      description: "Bénéficiez de solutions de gestion de flotte accessibles et performantes, adaptées aux budgets et besoins des petites et moyennes entreprises.",
      benefits: [
        "Solutions économiques et flexibles",
        "Installation et formation incluses",
        "Support technique réactif"
      ]
    }
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Segments Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions adaptées à chaque secteur d'activité
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {clientSegments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {segment.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {segment.description}
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3 pt-2">
                      {segment.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
