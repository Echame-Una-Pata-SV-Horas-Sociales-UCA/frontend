import Button from "../commons/button";
import Lottie from "lottie-react";

import pawsAnimation from "../../assets/animations/pawsAnimation.json";

export default function ChangeSection() {
  return (
    <section
      className="
        relative w-full 
        px-4 sm:px-8 lg:px-16 
        overflow-hidden 
        flex items-center justify-center
        min-h-[500px] sm:min-h-[650px] lg:min-h-[750px]
      "
      style={{
        background: "linear-gradient(135deg, #ffffff, #f8f3ef)",
      }}
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <Lottie
          animationData={pawsAnimation}
          loop
          autoplay
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl sm:text-5xl leading-tight font-semibold text-[#543B2E] mb-6">
          Un pequeño acto de bondad puede iluminar toda una vida ✨
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Juntos creamos historias donde el abandono se transforma en esperanza.
        </p>

        <Button text="Ser parte del cambio" color="#F23413" to="/apadrina" />
      </div>
    </section>
  );
}
