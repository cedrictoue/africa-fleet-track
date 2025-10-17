import logo from "@/assets/logo.png";

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
            <p className="text-white/70 text-base leading-relaxed">
              Leader de la gestion de flottes connectées en Afrique
            </p>
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
                <a href="tel:+2250777856011">+225 07 77 85 60 11</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="mailto:c.toue@mappingcontrolafrique.com" className="break-all">
                  c.toue@mappingcontrolafrique.com
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
