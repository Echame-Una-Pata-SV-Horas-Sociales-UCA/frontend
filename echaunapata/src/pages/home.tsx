import CTASection from "../components/ctssection";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import QueHacemos from "../components/quehacemos";
import StatsSection from "../components/stats";
import Donation from "../components/donation";
import DogsGrid from "../components/dogsgrid";
import SupportSection from "../components/support";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
     <Navbar />
     <Hero />
     <QueHacemos />
     <StatsSection />
     <CTASection />
     <Donation />
     <DogsGrid />
     <SupportSection />
     <Footer />
      </div>
  )
}