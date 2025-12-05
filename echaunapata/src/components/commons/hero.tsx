import type { ReactNode } from "react";
import hero from "../../assets/homeframe.png";

interface HeroProps {
  children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return (
    <section
      className="
        relative 
        overflow-hidden
        h-[80vh]           /* mobile */
        md:min-h-screen    /* desktop */
        flex items-center
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Perros rescatados"
          className="
            w-full h-full 
            object-cover
            object-center
          "
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10
          w-full
          max-w-[95%]          /* evita overflow */
          mx-auto
          
          px-6 sm:px-10 lg:px-20  /* ← MÁS PADDING IZQUIERDO */
                               /* mobile   tablet    desktop */

          text-center md:text-left /* centrado en mobile, izquierda en desktop */
        "
      >
        {children}
      </div>
    </section>
  );
}
