import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import MiniHero from "../components/commons/miniHero";
import RequisitosAdopcion from "../components/adopta/requisitos";
import PerrosDisponibles from "../components/adopta/perrosDisponibles";
import CambioSection from "../components/adopta/CambioSection";
import { motion } from "framer-motion";

import heroAdopta from "../assets/img/perro5.png"; // TODO: reemplazar img

export default function Adopta() {
  return (
    <>
      <Navbar />

      <MiniHero
        media={heroAdopta}
        title="ADOPTÁ A UN PELUDITO"
        subtitle="y comenzá una nueva historia"
        align="center"
      >
      </MiniHero>

      <RequisitosAdopcion />
      <PerrosDisponibles />
      <CambioSection />

      <Footer />
    </>
  );
}
