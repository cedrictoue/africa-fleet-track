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
            Leader africain des solutions de gestion de flottes connectées
          </p>
        </div>

        {/* Main paragraph */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Mapping Control Afrique est née au cœur de l'opérationnel : anciennement filiale Afrique d'Optimum Automotive, l'un des pionniers européens de la télématique, la société est devenue indépendante en 2025.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">Nous combinons aujourd'hui la puissance des technologies éprouvée avec une expertise africaine unique, construite au fil de 15 années de déploiements terrain dans plus de 25 pays.</p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Nous accompagnons banques, concessionnaires, groupes industriels, transporteurs, PME et acteurs publics dans la transformation et la sécurisation de leurs flottes, avec une approche résolument orientée résultats : réduction des coûts, amélioration de la productivité, conformité opérationnelle et protection des collaborateurs.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Notre force repose sur une équipe locale dédiée : support, opérations, qualité, intégration et accompagnement utilisateurs. C'est ce qui fait de nous un partenaire durable, fiable et proche des réalités quotidiennes.
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
                Permettre aux décideurs africains d'améliorer la performance, la sécurité et la visibilité de leurs flottes grâce à des solutions fiables, évolutives et adaptées aux conditions réelles du terrain. Nous transformons la gestion de flotte en un avantage stratégique.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Notre Différence
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Une technologie européenne, enrichie par une connaissance approfondie des usages africains : déploiements multi-pays, formations multilingues, support local réactif et capacité d'adaptation terrain.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous ne vendons pas une plateforme : nous accompagnons nos clients sur la durée, avec engagement et transparence.
              </p>
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
          value: "Plus de 10 000",
          label: "Interventions réalisées ou supervisées / an"
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
            description: "Nous développons et intégrons des solutions fiables, performantes et capables de répondre aux conditions d'utilisation les plus exigeantes. Notre priorité : garantir précision, stabilité et sécurité pour chaque flotte."
          }, {
            title: "Support client premium",
            description: "Plus de 70 % de notre équipe est dédiée au support, au déploiement et à l'accompagnement client. Nous offrons un service réactif, humain, multilingue et parfaitement adapté aux réalités opérationnelles africaines."
          }, {
            title: "Innovation continue",
            description: "Nos solutions évoluent en fonction des usages, des contraintes et des besoins du marché africain : carburant, sécurité, conditions de route, types d'entreprises. Chaque amélioration vise un objectif simple : optimiser, sécuriser et simplifier vos opérations."
          }, {
            title: "Engagement & transparence",
            description: "Nous construisons des partenariats durables, basés sur la confiance, la fiabilité et la clarté. Notre engagement : délivrer des résultats mesurables, accompagnés d'un suivi constant."
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