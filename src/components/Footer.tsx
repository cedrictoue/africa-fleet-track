import logo from "@/assets/logo.png";
import { Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Mapping Control Afrique" className="h-12 mb-6 brightness-0 invert" />
            <p className="text-white/90 text-lg font-medium mb-4">
              Mapping Control Afrique
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Leader de la gestion de flottes connectées en Afrique
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/mapping-control-afrique1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Suivez-nous sur LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/MappingControlAfrique" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-white transition-colors cursor-pointer">Tracking GPS</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sécurisation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fleet Management</li>
              <li className="hover:text-white transition-colors cursor-pointer">Vidéo Embarquée</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-white transition-colors">
                <a href="tel:+2250748977719">+225 07 48 977 719</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="mailto:contact@mappingcontrolafrique.com" className="break-all">
                  contact@mappingcontrolafrique.com
                </a>
              </li>
              <li className="text-white/70">Abidjan, Côte d'Ivoire</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Mapping Control Afrique. Tous droits réservés. | Mentions légales
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
