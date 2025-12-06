import CTASection from "../components/home/ctssection";
import Hero from "../components/commons/hero";
import Navbar from "../components/commons/navbar";
import QueHacemos from "../components/home/quehacemos";
import StatsSection from "../components/home/stats";
import Donation from "../components/home/donation";
import DogsGrid from "../components/commons/dogsgrid";
import SupportSection from "../components/home/support";
import Footer from "../components/commons/footer";
import Button from "../components/commons/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-xl md:text-6xl lg:text-7xl font-bold text-white mb-6 mt-10 leading-tight">
            ¡El cambio comienza en ti!
          </h1>

          <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed">
            Durante los últimos 10 años, hemos rescatado, castrado y reubicado a
            más de 1000 perros callejeros. Actualmente, albergamos a más de 300
            perros que buscan una familia definitiva.
          </p>

          <Link to="/nosotros">
            <Button text="Conocé sobre nosotros" color="#F23413" />
          </Link>
        </motion.div>
      </Hero>
      <StatsSection />

      <DogsGrid
        showGallery={true}
        title="NUESTROS ACOGIDOS"
        description={[
          "En nuestro refugio puedes encontrar cachorros rescatados, perros mayores y perros con discapacidad, abonados o enfermos.",
          "Pero por encima de todo, todos nuestros perros son únicos y merecen una vida feliz y saludable.",
        ]}
      />
      <QueHacemos />

      <Donation />
      <CTASection />
      <SupportSection />
      <Footer />
    </div>
  );
}
