import { CheckCircle2 } from "lucide-react";

const About = () => {
  const advantages = [
    "Expertise approfondie du marché africain et de ses spécificités",
    "Support en français par une équipe locale dédiée",
    "Plus de 15 ans d'expérience en géolocalisation",
    "Infrastructure présente dans 22 pays",
    "Solutions adaptées aux réalités locales",
    "Accompagnement personnalisé à chaque étape"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi Mapping Contrôle Afrique ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Le partenaire de confiance pour la gestion de flottes en Afrique
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Notre Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Basés en Côte d'Ivoire, nous sommes le leader incontesté de la gestion de flottes connectées en Afrique. Notre connaissance approfondie du marché africain et notre équipe d'experts locaux nous permettent d'offrir des solutions parfaitement adaptées à vos besoins.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Avec plus de 40 000 véhicules surveillés dans 22 pays, nous avons l'expérience et l'infrastructure nécessaires pour accompagner votre croissance, quelle que soit la taille de votre organisation.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Notre Mission
                </p>
                <p className="text-muted-foreground">
                  Sécuriser et optimiser les flottes africaines grâce à des technologies innovantes et un accompagnement de proximité.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nos Avantages Compétitifs
              </h3>
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-secondary/50 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
