import type { ReactNode } from "react";
import hero from "../../assets/img/homeframe.png";

interface HeroProps {
  children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return (
    <section
      className="
        relative 
        overflow-hidden

        h-[65vh]           /* más compacto en móviles */
        xs:h-[70vh]        /* pantallas pequeñas */
        sm:h-[75vh]
        md:min-h-screen
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
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10
          w-full
          max-w-[90%]
          mx-auto

          px-4 sm:px-8 md:px-16
          text-center md:text-left

          flex flex-col gap-2 sm:gap-4
        "
      >
        <div
          className="
            text-white space-y-2 sm:space-y-4

            /* h1 responsive MUY agresivo */
            [&>h1]:text-2xl
            [&>h1]:xs:text-3xl 
            [&>h1]:sm:text-4xl 
            [&>h1]:md:text-6xl
            [&>h1]:font-bold 
            [&>h1]:leading-tight

            /* párrafo */
            [&>p]:text-xs
            [&>p]:xs:text-sm
            [&>p]:sm:text-base
            [&>p]:md:text-lg

            /* botón dentro del children */
            [&>a]:py-2
            [&>a]:px-4
            [&>a]:text-xs
            [&>a]:xs:text-sm
            [&>a]:sm:text-base
          "
        >
          {children}
        </div>
      </div>
    </section>
  );
}
