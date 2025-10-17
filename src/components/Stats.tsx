import { Globe2, Car, Users, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Globe2,
      value: "22",
      label: "pays couverts",
      description: "Présence continentale forte"
    },
    {
      icon: Car,
      value: "40 000+",
      label: "véhicules suivis",
      description: "Flotte connectée en temps réel"
    },
    {
      icon: Users,
      value: "500+",
      label: "clients actifs",
      description: "Partenaires de confiance"
    },
    {
      icon: Award,
      value: "15+",
      label: "ans d'expertise",
      description: "Leader du marché africain"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-6">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-5xl font-bold text-foreground mb-3">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
