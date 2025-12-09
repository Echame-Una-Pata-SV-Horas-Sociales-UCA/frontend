import perro5 from "../../assets/img/perro5.png";

export default function MadreRefugiosHubSection() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Texto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 uppercase">
              Madre de refugios
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A lo largo de nuestra trayectoria, Échame Una Pata ha funcionado como un
              verdadero eje de apoyo para otros refugios y rescatistas independientes.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Proporcionamos insumos, alimento, materiales, donaciones y acompañamiento
              en momentos de emergencia, fortaleciendo así la red de protección animal
              en nuestra región y asegurando que más animales reciban el cuidado que
              necesitan.
            </p>
          </div>

          {/* Imagen */}
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
            <img
              src={perro5}
              alt="Madre de refugios"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

