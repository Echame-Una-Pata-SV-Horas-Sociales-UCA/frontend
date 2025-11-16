import happyDog from '../../assets/homeframe.png';

interface Perro {
  nombre: string;
  genero: string;
  imagen?: string;
}

export default function PerrosDisponibles() {
  // Datos de ejemplo - en producción vendrían de una API
  const perros: Perro[] = [
    { nombre: "Flecos", genero: "Macho" },
    { nombre: "Flecos", genero: "Macho" },
    { nombre: "Flecos", genero: "Macho" },
    { nombre: "Flecos", genero: "Macho" },
    { nombre: "Flecos", genero: "Macho" },
    { nombre: "Flecos", genero: "Macho" },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-12 uppercase text-center">
          NUESTROS PERRITOS
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perros.map((perro, index) => (
            <div
              key={index}
              className="border border-black rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
            >
              {/* Imagen del perro */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={perro.imagen || happyDog}
                  alt={perro.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Información del perro */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {perro.nombre}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {perro.genero}
                  </p>
                </div>
                
                {/* Botón de adoptar */}
                <button className="bg-[#F23413] hover:bg-[#F23413]/90 text-white font-bold text-lg px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Adoptar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

