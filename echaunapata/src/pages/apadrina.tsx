import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import InformacionDonacion from "../components/apadrina/informacionDonacion";
import MetodosDonacion from "../components/apadrina/metodosDonacion";
import MiniHero from "../components/commons/miniHero";
import heroApradrina from "../assets/img/perro1.png";

export default function Apadrina() {
  return (
    <>
      <Navbar/>
          <MiniHero
              media={heroApradrina}
              title="  Denunciá y protegé vidas"
              subtitle="Reportá casos de riesgo y ayudanos a proteger a los peluditos."
              align="center"
            >
            </MiniHero>
      <InformacionDonacion />
      <MetodosDonacion />
      <Footer />
    </>
  );
}
