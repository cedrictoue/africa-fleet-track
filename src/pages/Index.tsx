import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedClients from "@/components/TrustedClients";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustedClients />
        <Services />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
