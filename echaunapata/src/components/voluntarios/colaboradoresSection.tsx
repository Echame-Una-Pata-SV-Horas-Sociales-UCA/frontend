import purinaLogo from "../../assets/voluntarios/concentrix.webp";
import amicanLogo from "../../assets/voluntarios/foundever.jpg";
import cascadaLogo from "../../assets/voluntarios/ugb.webp";
export default function ColaboradoresSection() {
  // Referencias de logos de colaboradores (puedes agregar las rutas reales después)
  const colaboradores = [
    { nombre: "Colaborador 1", logo: amicanLogo },
    { nombre: "Colaborador 2", logo: cascadaLogo },
    { nombre: "Colaborador 3", logo: purinaLogo },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-16 text-center uppercase">
          Nuestros colaboradores
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {colaboradores.map((colaborador, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200 flex flex-col items-center justify-center min-h-[300px] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-48 sm:h-56 lg:h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4 p-4">
                <img 
                  src={colaborador.logo} 
                  alt={colaborador.nombre} 
                  className="w-full h-full object-contain" 
                />
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

