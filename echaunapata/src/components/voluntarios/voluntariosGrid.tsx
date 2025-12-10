import img1 from "../../assets/voluntarios/img-1.jpg";
import img2 from "../../assets/voluntarios/img-2.jpg";
import img3 from "../../assets/voluntarios/img-3.jpg";
import img4 from "../../assets/voluntarios/img-4.jpg";
import img5 from "../../assets/voluntarios/img-5.jpg";
import img6 from "../../assets/voluntarios/img-6.jpg";
import img7 from "../../assets/voluntarios/img-7.jpg";

export default function VoluntariosGrid() {
  // Grid con 2 filas: primera fila 3 imágenes, segunda fila 4 imágenes
  const images = [
    img1, img2, img3, // Primera fila
    img4, img5, img6, img7 // Segunda fila
  ];

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-12 text-center uppercase">
          Nuestros voluntarios
        </h2>

        {/* Grid de imágenes */}
        <div className="w-full">
          {/* Primera fila: 3 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-0">
            {images.slice(0, 3).map((img, index) => (
              <div
                key={index}
                className="h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Voluntario ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Segunda fila: 4 columnas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
            {images.slice(3, 7).map((img, index) => (
              <div
                key={index + 3}
                className="h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Voluntario ${index + 4}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

