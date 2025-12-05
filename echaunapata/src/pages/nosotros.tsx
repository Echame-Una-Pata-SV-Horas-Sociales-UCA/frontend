import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import Hero from "../components/commons/hero";
import HistoriaSection from "../components/nosotros/historiaSection";
import HorizontalGridSection from "../components/nosotros/horizontalgridsection";
import CardsSection from "../components/nosotros/cardsSection";
import ChangeSection from "../components/nosotros/changeSection";
import { motion } from "framer-motion";

export default function Nosotros() {

  return (
    <>
      <>
        <Navbar solid={false} />
        <Hero>
          <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Nuestra historia
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Como comenzo todo
            </p>
          </motion.div>
        </Hero>

        <HistoriaSection />
        <HorizontalGridSection />
        <CardsSection />
        <ChangeSection />
        <Footer />
      </>
    </>
  );
}
