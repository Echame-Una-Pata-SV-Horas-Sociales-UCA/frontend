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
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        />
      </MiniHero>

      <RequisitosAdopcion />
      <PerrosDisponibles />
      <CambioSection />

      <Footer />
    </>
  );
}
