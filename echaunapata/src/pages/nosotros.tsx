import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import Hero from "../components/commons/hero";
import HistoriaSection from "../components/nosotros/historiaSection";
import HorizontalGridSection from "../components/nosotros/horizontalgridsection";
import CardsSection from "../components/nosotros/cardsSection";
import ChangeSection from "../components/nosotros/changeSection";

export default function Nosotros() {
  return (
     <>
     <Navbar solid={false} />
     <Hero>
       <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
           Nuestra historia
         </h1>
         <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
         Como comenzo todo
         </p>
       </div>
     </Hero>
     <HistoriaSection />
     <HorizontalGridSection />
     <CardsSection />
     <ChangeSection />
     <Footer />
     </>
  )
}

