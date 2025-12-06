import React from "react";

interface MiniHeroProps {
  media: string;               // imagen o video
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  align?: "center" | "left";   // opcional
  isVideo?: boolean;           // indica si media es video
}

export default function MiniHero({
  media,
  title,
  subtitle,
  children,
  align = "center",
  isVideo = false,
}: MiniHeroProps) {
  return (
    <section
      className={`
        relative w-full h-[60vh] // tamaño hero 
        flex items-center
        ${align === "center" ? "justify-center text-center" : "justify-start text-left"}
      `}
    >
      {/* Fondo dinámico */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {isVideo ? (
          <video
            src={media}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={media}
            alt="Mini hero background"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/10" /> // overlay ligero
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-[90%] mx-auto px-4">
        {title && (
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-white text-sm sm:text-base mb-4">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
