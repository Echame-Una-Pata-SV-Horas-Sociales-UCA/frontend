import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
/* import Hero from "../components/commons/hero"; */
import HistoriaSection from "../components/nosotros/historiaSection";
import HorizontalGridSection from "../components/nosotros/horizontalgridsection";
import CardsSection from "../components/nosotros/cardsSection";
import ChangeSection from "../components/nosotros/changeSection";
import FounderWordsSection from "../components/nosotros/founderWordsSection";
import MiniHero from "../components/commons/miniHero"; 
import NuestroTeam from "../components/nosotros/teamSection";
import NosotrosHero from "../assets/img/nosotrosHero.png";
import SupportHubSection from "../components/nosotros/supportHubSection";

export default function Nosotros() {
  return (
    <>
      <Navbar />
       <MiniHero
         media={NosotrosHero}
         title="Nuestra historia"
         subtitle="y cómo comenzó"
         align="center"
       >
      
       </MiniHero>

      <HistoriaSection />

      <HorizontalGridSection />
      <FounderWordsSection />
      <CardsSection />
      <NuestroTeam />
      <SupportHubSection />
      <ChangeSection />
      <Footer />
    </>
  );
}
