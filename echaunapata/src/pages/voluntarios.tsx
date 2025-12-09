import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import MiniHero from "../components/commons/miniHero";
import MadreRefugiosSection from "../components/voluntarios/madreRefugiosSection";
import ColaboradoresSection from "../components/voluntarios/colaboradoresSection";
import VoluntariosGrid from "../components/voluntarios/voluntariosGrid";
import NosotrosHero from "../assets/img/nosotrosHero.png";

export default function Voluntarios() {
  return (
    <>
      <Navbar />
      <MiniHero
        media={NosotrosHero}
        title="Voluntarios"
        subtitle="El corazón de nuestra organización"
        align="center"
      />
      <MadreRefugiosSection />
      <ColaboradoresSection />
      <VoluntariosGrid />
      <Footer />
    </>
  );
}

