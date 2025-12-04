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

export default function Home() {
  return (
    <div>
     <Navbar solid={false} />
     <Hero>
       <div className="max-w-2xl">
         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
           ¡El cambio comienza en ti!
         </h1>
 
         <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
           Durante los últimos 00 años, hemos rescatado, castrado y reubicado a más de 000 perros callejeros.
           Actualmente, albergamos a más de 300 perros que buscan una familia definitiva.
         </p>
 
         <Button text="¡DONAR!" color="#F23413" />  
       </div>
     </Hero>
     <StatsSection />
          <QueHacemos />

     <DogsGrid
       showGallery={true}
       title="NUESTROS ACOGIDOS"
       description={[
         "En nuestro refugio puedes encontrar cachorros rescatados, perros mayores y perros con discapacidad, abonados o enfermos.",
         "Pero por encima de todo, todos nuestros perros son únicos y merecen una vida feliz y saludable."
       ]}
     />
     <Donation />
     <CTASection />
     <SupportSection />
     <Footer />
      </div>
  )
}