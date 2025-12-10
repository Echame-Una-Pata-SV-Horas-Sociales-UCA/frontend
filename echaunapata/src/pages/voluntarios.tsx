import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import MiniHero from "../components/commons/miniHero";
import VoluntariosSection from "../components/voluntarios/voluntariosSection";
import ColaboradoresSection from "../components/voluntarios/colaboradoresSection";
import VoluntariosGrid from "../components/voluntarios/voluntariosGrid";
import voluntario from "../assets/voluntarios/voluntario.png";

export default function Voluntarios() {
  return (
    <>
      <Navbar />
      <MiniHero
        media={voluntario}
        title="Voluntarios"
        subtitle="Nuestros aliados en la misión"
        align="center"
      />
      <VoluntariosSection />
      <ColaboradoresSection />
      <VoluntariosGrid />
      <Footer />
    </>
  );
}

