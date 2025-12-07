import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import DenunciaSeccion from "../components/denuncia/denunciaSeccion";
import RequisitoDenuncia from "../components/denuncia/requisitosDenuncia";
import MiniHero from "../components/commons/miniHero";
import heroDenuncia from "../assets/img/perro1.png";

export default function Denuncia() {
  return (
    <>
      <Navbar />
          
      <MiniHero
        media={heroDenuncia}
        title="  Denunciá y protegé vidas"
        subtitle="Reportá casos de riesgo y ayudanos a proteger a los peluditos."
        align="center"
      >
      </MiniHero>

      {/* SECCIÓN DE REQUISITOS (ya es responsive, pero envíamela si querés optimizarla también) */}
      <RequisitoDenuncia />

      {/* SECCIÓN DE CAMBIOS */}
      <div className="px-4">
        <DenunciaSeccion />
      </div>

      <Footer />
    </>
  );
}
