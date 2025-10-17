import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi Mapping Control Afrique ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Leader de la gestion de flottes connectées en Afrique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Notre Différence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Avec plus de 15 ans d'expérience dans la gestion de flottes en Afrique,
                  nous comprenons les défis uniques du continent et offrons des solutions
                  conçues spécifiquement pour les réalités africaines. Notre présence dans
                  22 pays nous permet d'offrir un support local avec une vision continentale.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Notre Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fournir des technologies de pointe accessibles pour sécuriser et optimiser
                  la gestion de flottes africaines, tout en accompagnant nos clients dans leur
                  transformation digitale avec un service personnalisé et un support technique
                  réactif disponible 24h/24.
                </p>
              </div>
            </div>

            {/* Right Column - Advantages */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-md border-2 border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nos Avantages Concurrentiels
              </h3>
              <ul className="space-y-5">
                {[
                  "Expertise locale et continentale dans 22 pays",
                  "Support en français 24h/24, 7j/7",
                  "22 pays d'implantation en Afrique",
                  "Solutions adaptées aux réalités africaines",
                  "Accompagnement personnalisé à chaque étape",
                  "Installation et formation complète incluses",
                  "Technologie éprouvée et fiable"
                ].map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
