import type { ReactNode } from "react";
import videoHero from "../../assets/video/videoLanding.mp4";

interface HeroProps {
  children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return (
    <section
      className="
        relative 
        overflow-hidden

        h-[65vh]
        xs:h-[70vh]
        sm:h-[75vh]
        md:min-h-screen
        flex items-center
      "
    >
      <div className="absolute inset-0 z-0">

        <video
          src={videoHero}
          autoPlay
          loop
          muted
          playsInline
          className="
            w-full h-full 
            object-cover
            object-center
          "
        >

          {/*
          <source src='/assets/video/hero-mobile.mp4' media='(max-width: 640px)' />
          <source src='/assets/video/hero-tablet.mp4' media='(max-width: 1024px)' />
          <source src='/assets/video/hero-desktop.mp4' media='(min-width: 1025px)' />
          */}

        </video>

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div
        className="
          relative z-10
          w-full
          max-w-[90%]
          mx-auto
          px-4 sm:px-8 md:px-16
          text-center md:text-left
          flex flex-col gap-2 sm:gap-4
          pt-24 md:pt-40 lg:pt-52
        "
      >
        <div
          className="
            text-white space-y-2 sm:space-y-4

            [&>h1]:text-2xl
            [&>h1]:xs:text-3xl 
            [&>h1]:sm:text-4xl 
            [&>h1]:md:text-6xl
            [&>h1]:font-bold 
            [&>h1]:leading-tight

            [&>p]:text-xs
            [&>p]:xs:text-sm
            [&>p]:sm:text-base
            [&>p]:md:text-lg

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
