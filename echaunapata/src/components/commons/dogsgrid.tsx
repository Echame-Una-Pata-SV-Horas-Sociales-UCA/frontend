import perro1 from "../../assets/img/perro1.png";
import perro2 from "../../assets/img/perro2.png";
import perro3 from "../../assets/img/perro3.png";
import perro4 from "../../assets/img/perro4.png";
import perroGrande from "../../assets/img/perro5.png"; // imagen de la derecha

interface DogsGridProps {
  showGallery?: boolean;
  title: string;
  description: string | string[];
}

export default function DogsGrid({ title, description }: DogsGridProps) {
  const descriptionArray = Array.isArray(description) ? description : [description];

  const gallery = [perro1, perro2, perro3, perro4];

  return (
    <section className="w-full bg-white">

      {/* GRID SUPERIOR: TEXTO + IMAGEN */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">

 {/* Texto */}
<div className="px-4 sm:px-8 lg:px-16 py-12 flex items-center">
  <div className="max-w-xl mx-auto text-center lg:text-left">
    <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-6">
      {title}
    </h2>

    {descriptionArray.map((p, i) => (
      <p
        key={i}
        className={`text-gray-700 text-lg leading-relaxed ${
          i < descriptionArray.length - 1 ? "mb-6" : ""
        }`}
      >
        {p}
      </p>
    ))}
  </div>
</div>


        {/* Imagen grande — ahora se ve COMPLETA */}
        <div className="w-full h-[260px] sm:h-[340px] md:h-[380px] lg:h-[420px] overflow-hidden bg-black">
          <img
            src={perroGrande}
            alt="Perro en el refugio"
            className="
              w-full h-full
              object-cover
              object-center
            "
          />
        </div>

      </div>

      {/* GALERÍA INFERIOR FULL-WIDTH */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">

        {gallery.map((img, index) => (
          <div
            key={index}
            className="h-[200px] sm:h-[200px] md:h-[240px] overflow-hidden"
          >
            <img
              src={img}
              alt={`Perro ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>

    </section>
  );
}
