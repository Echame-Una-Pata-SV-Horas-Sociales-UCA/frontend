import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import Hero from "../components/commons/hero";
import RequisitosAdopcion from "../components/adopta/requisitos";
import PerrosDisponibles from "../components/adopta/perrosDisponibles";
import CambioSection from "../components/adopta/cambioSection";

export default function Adopta() {
  return (
    <>
      <Navbar />
      <Hero>
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            ADOPTÁ A UN PELUDITO
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            y comenzá una nueva historia
          </p>
        </div>
      </Hero>
      <RequisitosAdopcion />
      <PerrosDisponibles />
      <CambioSection/>
      <Footer />
    </>
  );
}

