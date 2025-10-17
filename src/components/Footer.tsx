import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Mapping Contrôle Afrique" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm">
              Leader de la gestion de flottes connectées en Afrique
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Tracking GPS</li>
              <li>Fleet Management</li>
              <li>Vidéo Embarquée</li>
              <li>Analyse de Conduite</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>+225 07 77 85 60 11</li>
              <li>c.toue@mappingcontrolafrique.com</li>
              <li>Abidjan, Côte d'Ivoire</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Mapping Contrôle Afrique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
