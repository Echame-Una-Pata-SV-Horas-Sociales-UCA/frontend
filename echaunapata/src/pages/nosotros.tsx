import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
/* import Hero from "../components/commons/hero"; */
import HistoriaSection from "../components/nosotros/historiaSection";
import HorizontalGridSection from "../components/nosotros/horizontalgridsection";
import CardsSection from "../components/nosotros/cardsSection";
import ChangeSection from "../components/nosotros/changeSection";
import FounderWordsSection from "../components/nosotros/founderWordsSection";
import MiniHero from "../components/commons/miniHero"; 
import TeamEUP from "../assets/img/nosotrosHero.png" 

export default function Nosotros() {
  return (
    <>
      <Navbar />
       <MiniHero
         media={TeamEUP}
         title="Nuestra historia"
         subtitle="y cómo comenzó"
         align="center"
       >
      
       </MiniHero>

      <HistoriaSection />

      <HorizontalGridSection />
      <FounderWordsSection />
      <CardsSection />
      <ChangeSection />
      <Footer />
    </>
  );
}
