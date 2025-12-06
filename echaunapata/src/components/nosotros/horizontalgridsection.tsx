import perro1 from "../../assets/img/perro1.png";
import perro2 from "../../assets/img/perro2.png";
import perro3 from "../../assets/img/perro3.png";
import perro4 from "../../assets/img/perro4.png";
export default function HorizontalGridSection() {

  const gallery = [perro1, perro2, perro3, perro4];

  return (
    <section className="w-full bg-white pt-16 pb-16">

      {/* Título y descripción */}
      <div className="max-w-xl mx-auto text-center mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4 uppercase">
          ASÍ, EN DICIEMBRE DE 2018
        </h1>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Se abrieron las puertas del refugio en San Miguel, un lugar donde hoy viven,
          se cuidan y se recuperan decenas de perros abandonados y maltratados.
        </p>
      </div>

      {/* GALERÍA — Full width real */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 w-full">

        {gallery.map((img, index) => (
          <div
            key={index}
            className="h-[200px] sm:h-[200px] md:h-[240px] overflow-hidden"
          >
            <img
              src={img}
              alt={`Foto ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
