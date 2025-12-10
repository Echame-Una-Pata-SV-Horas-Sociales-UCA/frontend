import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import InformacionDonacion from "../components/apadrina/informacionDonacion";
import MetodosDonacion from "../components/apadrina/metodosDonacion";
import MiniHero from "../components/commons/miniHero";
import heroApradrina from "../assets/img/apadrina.jpg";

export default function Apadrina() {
  return (
    <>
      <Navbar/>
          <MiniHero
              media={heroApradrina}
              title="Apadriná un peludito"
              subtitle="Cambiá su vida para siempre"
              align="center"
            >
            </MiniHero>
      <InformacionDonacion />
      <MetodosDonacion />
      <Footer />
    </>
  );
}
