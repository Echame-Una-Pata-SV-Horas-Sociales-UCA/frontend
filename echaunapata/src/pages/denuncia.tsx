import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import Hero from "../components/commons/hero";
import CambioSection from "../components/adopta/CambioSection";
import RequisitoDenuncia from "../components/denuncia/requisitosDenuncia";

export default function Denuncia() {
  return (
    <>
      <Navbar solid={false} />

      {/* HERO RESPONSIVE */}
      <Hero>
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-4 text-center px-4">

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-white
              mb-4
              leading-snug
            "
          >
            Denunciá y protegé vidas
          </h1>

          <p
            className="
              text-base
              sm:text-lg
              md:text-xl
              text-white/90
              leading-relaxed
              max-w-2xl
              mb-6
            "
          >
            Reportá casos de riesgo y ayudanos a proteger a los peluditos.
          </p>

        </div>
      </Hero>

      {/* SECCIÓN DE REQUISITOS (ya es responsive, pero envíamela si querés optimizarla también) */}
      <RequisitoDenuncia />

      {/* SECCIÓN DE CAMBIOS */}
      <div className="px-4">
        <CambioSection />
      </div>

      <Footer />
    </>
  );
}
