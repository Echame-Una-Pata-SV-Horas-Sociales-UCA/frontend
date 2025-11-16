import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import Hero from "../components/commons/hero";
import DogsGrid from "../components/commons/dogsgrid";
import HorizontalGridSection from "../components/nosotros/horizontalgridsection";
import CardsSection from "../components/nosotros/cardsSection";
import ChangeSection from "../components/nosotros/changeSection";

export default function Nosotros() {
  return (
     <>
     <Navbar />
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
     <DogsGrid
       showGallery={false}
       title="Todo comienza en el 2016"
       description={[
         "Échame Una Pata SV es un proyecto de rescate animal que nació en marzo de 2015, como iniciativa de nuestra fundadora Silvia Ayala, con el propósito de apoyar a rescatistas independientes y refugios brindando ayuda en necesidades básicas como alimento y medicina.",
         "Con el tiempo, y ante la indiferencia hacia los perros en situación de calle y las precarias condiciones en las que muchos sobrevivían, surgió la necesidad de crear un espacio propio para rehabilitarlos y ofrecerles una segunda oportunidad."
       ]}
     />
     <HorizontalGridSection />
     <CardsSection />
     <ChangeSection />
     <Footer />
     </>
  )
}

