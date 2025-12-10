import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import MiniHero from "../components/commons/miniHero";
import MadreRefugiosHubSection from "../components/hubNetwork/madreRefugiosHubSection";
/* import ColaboradoresSection from "../components/voluntarios/colaboradoresSection";
 */import HubCarousel from "../components/hubNetwork/hubCarousel";
import heroHubNetwork from "../assets/voluntarios/img-3.jpg";

export default function HubNetwork() {
  return (
    <>
      <Navbar />
      <MiniHero
        media={heroHubNetwork}
        title="Red de Apoyo"
        subtitle="Madre de refugios"
        align="center"
      />
      <MadreRefugiosHubSection />
{/*       <ColaboradoresSection />
 */}      <HubCarousel />
      <Footer />
    </>
  );
}
