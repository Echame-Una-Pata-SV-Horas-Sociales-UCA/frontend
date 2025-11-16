import type { ReactNode } from 'react';
import hero from '../../assets/homeframe.png'

interface HeroProps {
  children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
    return (
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero}
            alt="Perros rescatados"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
  
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          {children}
        </div>
      </section>
    )
  }
  