import { Building2, Car, Briefcase, Store } from "lucide-react";

const Clients = () => {
  const clientSegments = [
    {
      icon: Building2,
      title: "Banques & Institutions Financières",
      description: "Sécurisez vos financements avec notre solution de blocage à distance. Protection contre le vol et garantie en cas d'impayé.",
      benefits: [
        "Blocage moteur en cas de vol",
        "Sécurisation des impayés",
        "Suivi des biens financés",
        "Réduction des risques"
      ]
    },
    {
      icon: Car,
      title: "Concessionnaires Automobiles",
      description: "Offrez une valeur ajoutée à vos clients avec le tracking intégré et la gestion d'entretien automatisée.",
      benefits: [
        "Service de conciergerie auto",
        "Suivi des entretiens",
        "Rétention clients améliorée",
        "Réduction primes d'assurance"
      ]
    },
    {
      icon: Briefcase,
      title: "Grandes Entreprises",
      description: "Optimisez votre flotte et réduisez vos coûts opérationnels grâce à des données précises et des conseils d'experts.",
      benefits: [
        "Optimisation des trajets",
        "Réduction consommation",
        "Rapports détaillés",
        "Analyse comportements"
      ]
    },
    {
      icon: Store,
      title: "TPE & PME",
      description: "Solution clé en main avec mise en place simplifiée et accompagnement personnalisé adapté à votre structure.",
      benefits: [
        "Installation rapide",
        "Support francophone",
        "Tarifs adaptés",
        "Pas de complexité technique"
      ]
    }
  ];

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Segments Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions sur mesure pour chaque type d'organisation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {clientSegments.map((segment, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border-2 border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-secondary to-accent group-hover:scale-110 transition-transform">
                  <segment.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {segment.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {segment.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {segment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
