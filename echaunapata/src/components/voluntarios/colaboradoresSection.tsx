import purinaLogo from "../../assets/voluntarios/concentrix.webp";
import amicanLogo from "../../assets/voluntarios/foundever.jpg";
import cascadaLogo from "../../assets/voluntarios/ugb.webp";
import petlandLogo from "../../assets/voluntarios/petland.webp";
import starbucks from "../../assets/voluntarios/starbucks.jpg";
import purina from "../../assets/voluntarios/purina-logo.jpg";

export default function ColaboradoresSection() {
  const colaboradores = [
    { nombre: "Foundever", logo: amicanLogo },
    { nombre: "UGB", logo: cascadaLogo },
    { nombre: "Concentrix", logo: purinaLogo },
    { nombre: "Petland", logo: petlandLogo },
    { nombre: "Starbucks", logo: starbucks },
    { nombre: "Purina", logo: purina },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-16 text-center uppercase">
          Nuestros colaboradores
        </h2>

        {/* SLIDER */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">

            {/* Duplicación para scroll infinito */}
            {colaboradores.concat(colaboradores).map((colab, index) => (
              <img
                key={index}
                src={colab.logo}
                alt={colab.nombre}
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition"
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
