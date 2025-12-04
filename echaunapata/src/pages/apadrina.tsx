import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import Hero from "../components/commons/hero";
import InformacionDonacion from "../components/apadrina/informacionDonacion";
import MetodosDonacion from "../components/apadrina/metodosDonacion";

export default function Apadrina() {
  return (
    <>
      <Navbar solid={false} />
      <Hero>
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Doná y compartí esperanza
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            ayudános a cuidar de los peluditos
          </p>
        </div>
      </Hero>
      <InformacionDonacion />
      <MetodosDonacion />
      <Footer />
    </>
  );
}

