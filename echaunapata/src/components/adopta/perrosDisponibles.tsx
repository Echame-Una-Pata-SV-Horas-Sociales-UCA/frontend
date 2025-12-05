import { useEffect, useState } from "react";
import happyDog from "../../assets/flecos.png";
import { Pets } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { GetAllAnimalsAvailable } from "../../service/AnimalServices";

interface Animal {
  id: string;
  name: string;
  species: string;
  state: string;
  sex: string;
  race: string;
  age: string | null;
  photo?: string;
}

export default function PerrosDisponibles() {
  const [perros, setPerros] = useState<Animal[]>([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const json = await GetAllAnimalsAvailable(); // ← AQUÍ ya obtienes el JSON listo
        setPerros(json.data); // ← tu API devuelve { message, data }
      } catch (error) {
        console.error("Error fetching animals", error);
      }
    };

    fetchAnimals();
  }, []);

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
                  src={perro.photo || happyDog}
                  alt={perro.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-center">
                  {/* Text column */}
                  <div className="flex flex-col leading-tight">
                    <h3 className="text-xl font-semibold text-black">
                      {perro.name}
                    </h3>
                    <p className="text-gray-600 text-base mt-0.5">
                      {perro.sex === "MALE" ? "Macho" : "Hembra"}
                    </p>
                  </div>

                  {/* Adopt button */}
                  <Link
                    to={`/animal/${perro.id}`}
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
