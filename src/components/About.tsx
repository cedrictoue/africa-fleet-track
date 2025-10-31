import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-building.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            À Propos de Mapping Control Afrique
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leader africain en solutions de gestion de flottes connectées
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={aboutImage} 
              alt="Mapping Control Afrique" 
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Right - Text content */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Notre Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Accompagner les décideurs à protéger leurs investissements grâce à des solutions 
                fiables, évolutives et adaptées aux réalités africaines. Nous transformons la gestion 
                de flotte en un avantage compétitif pour nos clients.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Notre Différence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Une présence dans 22 pays, une expertise de plus de 15 ans et un support multilingue 
                disponible 24h/24. Nous ne nous contentons pas de vendre une technologie : nous 
                offrons un partenariat durable pour votre réussite.
              </p>
            </div>
          </div>
        </div>

        {/* Stats circles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "200+", label: "Pays couverts" },
            { value: "40K+", label: "Véhicules suivis" },
            { value: "40K+", label: "Interventions" },
            { value: "10+", label: "Années d'expertise" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
              </div>
              <p className="text-sm font-semibold text-foreground uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence technologique",
                description: "Nous utilisons les dernières technologies pour garantir fiabilité et performance."
              },
              {
                title: "Support client premium",
                description: "Un accompagnement personnalisé 24h/24 en français pour votre tranquillité."
              },
              {
                title: "Innovation continue",
                description: "Nous évoluons constamment pour répondre aux nouveaux besoins du marché africain."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-lg border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
