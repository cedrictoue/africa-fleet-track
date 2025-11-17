import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a success message
    toast.success("Message envoyé avec succès! Nous vous répondrons rapidement.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Africa map */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 40 L90 40 L67 58 L75 88 L50 70 L25 88 L33 58 L10 40 L40 40 Z' fill='%231E88E5' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}/>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contactez-Nous
            </h2>
            <p className="text-lg text-muted-foreground">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Nos Coordonnées
                </h3>
                <div className="space-y-6 bg-card p-6 rounded-2xl shadow-md border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Téléphone</p>
                      <a href="tel:+2250748977719" className="text-muted-foreground hover:text-primary transition-colors">
                        +225 07 48 977 719
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a href="mailto:contact@mappingcontrolafrique.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                        contact@mappingcontrolafrique.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Adresse</p>
                      <p className="text-muted-foreground">
                        Abidjan, Côte d'Ivoire
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Site Web</p>
                      <a href="https://mappingcontrolafrique.com" className="text-muted-foreground hover:text-primary transition-colors">
                        mappingcontrolafrique.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 border-2 border-secondary/20">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Demandez une Démo Gratuite
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Découvrez comment nos solutions peuvent transformer la gestion de votre flotte.
                  Contactez-nous pour planifier une démonstration personnalisée et gratuite.
                </p>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Planifier une Démo
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-md border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envoyez-nous un Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Entreprise
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full"
                    placeholder="Décrivez vos besoins..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                  size="lg"
                >
                  Envoyer le Message
                </Button>

                <p className="text-center text-sm text-muted-foreground pt-2">
                  Ou{" "}
                  <a href="#contact" className="text-primary hover:underline font-medium">
                    demandez une démo personnalisée
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
