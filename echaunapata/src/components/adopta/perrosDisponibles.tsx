import happyDog from '../../assets/flecos.png';
import { Pets } from '@mui/icons-material';
import { Link } from "react-router-dom";

interface Perro {
  id: string;
  nombre: string;
  genero: string;
  imagen?: string;
}

export default function PerrosDisponibles() {
  const perros: Perro[] = [
    { id: "1", nombre: "Flecos", genero: "Macho" },
    { id: "2", nombre: "Luna", genero: "Hembra" },
    { id: "3", nombre: "Tubby", genero: "Macho" },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-12 uppercase text-center">
          NUESTROS PERRITOS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {perros.map((perro) => (
            <div
              key={perro.id}
              className="w-full border border-gray-300 rounded-2xl overflow-hidden bg-white shadow-md"
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={perro.imagen || happyDog}
                  alt={perro.nombre}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <div className="flex justify-between items-center">

                  {/* Text column */}
                  <div className="flex flex-col leading-tight">
                    <h3 className="text-xl font-semibold text-black">
                      {perro.nombre}
                    </h3>
                    <p className="text-gray-600 text-base mt-0.5">
                      {perro.genero}
                    </p>
                  </div>

                  {/* Adopt button */}
                {/*   <Link
                    to={`/adopta/${perro.id}`}
                    state={{ perro }}
                    className="flex items-center gap-2 bg-[#F23413] hover:bg-[#d62b10] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md"
                  >
                    Adoptar
                    <Pets fontSize="small" />
                  </Link> */}
                <Link
                  to="/animal"
                  state={{
                    animal: {
                      name: perro.nombre,    // tu mock actual
                      sex: perro.genero,
                      age: "3 meses",
                      photo: happyDog
                    }
                  }}
                  className="flex items-center gap-2 bg-[#F23413] hover:bg-[#d62b10] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md"
                >
                  Adoptar
                  <Pets fontSize="small" />
                </Link>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
