import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-building.jpg";
const About = () => {
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            À Propos de Mapping Control Afrique
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           Leader Africain de la Mobilité Connectée
          </p>
        </div>

        {/* Main paragraph */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Mapping Control Afrique est née sur le terrain, au cœur de l'opérationnel. Forte de 15 années d'expertise et d'implantations dans plus de 25 pays, notre mission est simple : offrir aux entreprises africaines des solutions technologiques fiables, adaptées aux réalités du continent et orientées résultats.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Nous accompagnons chaque jour banques, industriels, transporteurs, distributeurs, PME et acteurs publics dans :
            </p>
            <ul className="text-muted-foreground leading-relaxed text-lg mb-6 space-y-2 ml-6 list-disc">
              <li>la réduction des coûts,</li>
              <li>l'amélioration de la productivité,</li>
              <li>la sécurité de leurs équipes,</li>
              <li>la conformité opérationnelle,</li>
              <li>et la transformation digitale de leurs activités.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Notre atout majeur : une équipe locale engagée, experte et réactive, qui connaît parfaitement les environnements africains et les enjeux du terrain.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={aboutImage} alt="Mapping Control Afrique" className="w-full h-[500px] object-cover" />
          </div>

          {/* Right - Text content */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Notre Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
              Aider les décideurs à transformer la gestion de flotte en un avantage stratégique, grâce à des technologies fiables, une expertise locale et un accompagnement durable.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Notre Différence
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous ne livrons pas une simple plateforme.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nous construisons un partenariat : humain, durable et orienté performance.
              </p>
              <ul className="text-muted-foreground leading-relaxed space-y-2 ml-6 list-disc">
                <li>Expertise africaine éprouvée</li>
                <li>Support local multilingue 24/7</li>
                <li>Déploiements complexes multi-pays</li>
                <li>Solutions évolutives et adaptées aux réalités opérationnelles</li>
                <li>Engagement total sur la qualité et les résultats</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats circles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{
          value: "25+",
          label: "Pays accompagnés"
        }, {
          value: "20 000+",
          label: "Véhicules actifs suivis"
        }, {
          value: "+10 000",
          label: "Interventions par an"
        }, {
          value: "15",
          label: "Années d'expérience terrain"
        }].map((stat, index) => <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
              </div>
              <p className="text-sm font-semibold text-foreground uppercase">{stat.label}</p>
            </div>)}
        </div>

        {/* Values section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            title: "Excellence technologique",
            description: "Nous intégrons les meilleures technologies du marché pour garantir précision, stabilité et sécurité, même dans les environnements les plus exigeants."
          }, {
            title: "Support client premium",
            description: "70 % de notre équipe est dédiée au support, à la qualité et à l'accompagnement utilisateur. Nous offrons un service réactif, humain et adapté au terrain."
          }, {
            title: "Innovation continue",
            description: "Nous faisons évoluer nos solutions en fonction des usages, du climat, des réseaux, des routes, des besoins sectoriels et des contraintes africaines."
          }, {
            title: "Engagement & Transparence",
            description: "Nous privilégions une relation de confiance basée sur la proximité, la clarté, la responsabilité et des résultats mesurables."
          }].map((value, index) => <div key={index} className="text-center p-8 bg-card rounded-2xl shadow-lg border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;