import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import Hero from "../components/commons/hero";
import Button from "../components/commons/button";
import RequisitosAdopcion from "../components/adopta/requisitos";
import PerrosDisponibles from "../components/adopta/perrosDisponibles";

export default function Adopta() {
  return (
    <>
      <Navbar />
      <Hero>
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            ADOPTÁ A UN PELUDITO
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            y comenzá una nueva historia
          </p>
        </div>
      </Hero>
      <RequisitosAdopcion />
      <PerrosDisponibles />
      <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            ¡El cambio comienza en ti!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
            Vivimos gracias al apoyo de personas solidarias que donan alimento, insumos y fondos para nuestros más de 130 perros.
          </p>
          <Button text="¡DONAR!" color="#F23413" />
        </div>
      </section>
      <Footer />
    </>
  );
}

