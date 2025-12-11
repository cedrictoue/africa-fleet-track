
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import suzukiLogo from "@/assets/client-suzuki.png";
import hertzLogo from "@/assets/client-hertz.png";
import comafriqueLogo from "@/assets/client-comafrique.png";
import afrikaBanqueLogo from "@/assets/client-afrika-banque.png";
import senecartoursLogo from "@/assets/client-senecartours.png";
import loxeaLogo from "@/assets/client-loxea.png";
import cimafLogo from "@/assets/client-cimaf.png";
import mcaLogo from "@/assets/client-mca.png";
import tractafricLogo from "@/assets/client-tractafric.jpg";
import autochekLogo from "@/assets/client-autochek.png";
import nsiaLogo from "@/assets/client-nsia.jpg";
import ortecLogo from "@/assets/client-ortec.png";
import shiftmoveLogo from "@/assets/client-shiftmove.png";
import heetchLogo from "@/assets/client-heetch.png";

const TrustedClients = () => {
  const clients = [
    { name: "Suzuki", logo: suzukiLogo },
    { name: "Hertz", logo: hertzLogo },
    { name: "Comafrique Technologies", logo: comafriqueLogo },
    { name: "Afrika Banque", logo: afrikaBanqueLogo },
    { name: "Senecartours", logo: senecartoursLogo },
    { name: "Loxea", logo: loxeaLogo },
    { name: "CIMAF", logo: cimafLogo },
    { name: "Millennium Challenge Account", logo: mcaLogo },
    { name: "Tractafric Motors", logo: tractafricLogo },
    { name: "Autochek", logo: autochekLogo },
    { name: "NSIA Banque", logo: nsiaLogo },
    { name: "Ortec Group", logo: ortecLogo },
    { name: "Shiftmove", logo: shiftmoveLogo },
    { name: "Heetch", logo: heetchLogo },
  ];

  return (
    <section className="py-12 bg-gray-50/50 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-muted-foreground uppercase tracking-widest">
            Ils nous font confiance
          </h3>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4 items-center">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="h-24 px-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TrustedClients;
