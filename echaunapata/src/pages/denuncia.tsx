import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import Hero from "../components/commons/hero";
import CambioSection from "../components/adopta/cambioSection";
import RequisitoDenuncia from "../components/denuncia/requisitosDenuncia";

export default function Denuncia() {
  return (
    <>
      <Navbar solid={false} />

      <Hero>
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Denunciá y protegé vidas
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Reportá casos de riesgo y ayudanos a proteger a los peluditos.
          </p>
        </div>
      </Hero>

      <RequisitoDenuncia />

      
        <CambioSection />
    

      <Footer />
    </>
  );
}
