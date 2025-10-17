import { Users, MapPin, Building2, TrendingUp } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: MapPin,
      value: "22",
      label: "Pays en Afrique",
      description: "Présence établie"
    },
    {
      icon: Users,
      value: "40 000+",
      label: "Véhicules Suivis",
      description: "En temps réel"
    },
    {
      icon: Building2,
      value: "500+",
      label: "Clients Actifs",
      description: "Entreprises & Institutions"
    },
    {
      icon: TrendingUp,
      value: "15+",
      label: "Années d'Expertise",
      description: "Sur le marché africain"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Notre Impact en Chiffres
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leader incontesté de la gestion de flottes connectées en Afrique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-secondary to-accent">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
