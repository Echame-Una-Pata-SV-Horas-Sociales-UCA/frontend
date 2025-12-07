import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import MiniHero from "../components/commons/miniHero";
import heroHubNetwork from "../assets/img/perro1.png";

export default function HubNetwork() {
  return (
    <>
      <Navbar />
        <MiniHero
              media={heroHubNetwork}
              title="Madre de refugio"
              subtitle="Red de apoyo para peluditos en situación de calle"
              align="center"
            >
            </MiniHero>
      {/* Add your HubNetwork page content here */}
      <Footer />
    </>
  );
}
