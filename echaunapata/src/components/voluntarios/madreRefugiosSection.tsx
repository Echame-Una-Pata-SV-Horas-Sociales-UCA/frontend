import perro5 from "../../assets/img/perro5.png";

export default function MadreRefugiosSection() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagen */}
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
            <img
              src={perro5}
              alt="Madre de refugios"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 uppercase">
              Voluntariado
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              El voluntariado es el corazón y la fuerza que impulsa nuestra organización.
              Sin el compromiso desinteresado de cada voluntario, sería imposible llevar
              a cabo nuestra misión de rescatar, rehabilitar y encontrar hogares para
              cientos de animales en situación de vulnerabilidad.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Cada hora dedicada, cada gesto de amor y cada esfuerzo de nuestros
              voluntarios marca la diferencia en la vida de nuestros peluditos. Su
              dedicación no solo transforma vidas animales, sino que también fortalece
              nuestra comunidad y nos permite seguir creciendo como red de apoyo para
              otros refugios y rescatistas independientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

