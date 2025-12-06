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
import dogAnimation from "../assets/animations/lamidaDog.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <div>
      <Navbar solid={false} />
      <Hero>
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20 relative">
          {/* TEXTOS IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 max-w-2xl text-center md:text-left z-10"
          >
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-white mb-0 md:mb-6 mt-16 leading-tight">
              ¡El cambio comienza en ti!
            </h1>

            <p className="text-md md:text-xl text-white/90 mb-8 leading-relaxed">
              Durante los últimos 00 años, hemos rescatado, castrado y reubicado
              a más de 000 perros callejeros. Actualmente albergamos más de 300
              que buscan una familia definitiva.
            </p>

            <Button text="¡DONAR!" color="#F23413" />
          </motion.div>

          {/* ANIMACIÓN DERECHA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[320px] xl:w-[360px] mt-6 md:mt-0 flex justify-center md:justify-end"
          >
            <Lottie animationData={dogAnimation} loop autoplay />
          </motion.div>
        </div>
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
