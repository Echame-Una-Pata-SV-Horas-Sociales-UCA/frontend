import { useRef, useState } from "react";

interface FullWidthSectionProps {
  height?: string;
  videoSrc: string;
  className?: string;
}

export default function FullWidthSection({
  height = "40vh",
  videoSrc,
  className = "",
}: FullWidthSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = () => {
    if (!videoRef.current) return;

    if (!soundOn) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
    } else {
      videoRef.current.muted = true;
    }

    setSoundOn(!soundOn);
  };

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <button
        onClick={toggleSound}
        className="absolute bottom-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-md text-sm"
      >
        {soundOn ? "Silenciar" : "Activar sonido"}
      </button>
    </section>
  );
}
