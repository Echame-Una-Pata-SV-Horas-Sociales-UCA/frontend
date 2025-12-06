import { useEffect, useState } from "react";
import happyDog from "../../assets/img/perro7.png";
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

function SkeletonCard() {
  return (
    <div className="w-full border border-gray-300 rounded-2xl overflow-hidden bg-white shadow-md animate-pulse">
      <div className="w-full h-56 bg-gray-300" />
      <div className="p-5 space-y-2">
        <div className="h-6 w-3/4 bg-gray-300 rounded-md" />
        <div className="h-4 w-1/2 bg-gray-300 rounded-md" />
        <div className="h-8 w-24 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}

export default function PerrosDisponibles() {
  const [perros, setPerros] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        setLoading(true);
        const json = await GetAllAnimalsAvailable();
        setPerros(json.data);
      } catch (error) {
        console.error("Error fetching animals", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const handleShowMore = async () => {
    setLoadingMore(true);

    // Simula un pequeño delay de carga
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoadingMore(false);
    }, 800);
  };

  const visiblePerros = perros.slice(0, visibleCount);

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-12 uppercase text-center">
          NUESTROS PERRITOS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : visiblePerros.map((perro, idx) => (
                <div
                  key={perro.id}
                  className="w-full border border-gray-300 rounded-2xl overflow-hidden bg-white shadow-md transition-opacity duration-500 opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <div className="w-full h-56 overflow-hidden">
                    <img
                      src={perro.photo || happyDog}
                      alt={perro.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col leading-tight">
                        <h3 className="text-xl font-semibold text-black">
                          {perro.name}
                        </h3>
                        <p className="text-gray-600 text-base mt-0.5">
                          {perro.sex === "MALE" ? "Macho" : "Hembra"}
                        </p>
                      </div>

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

          {/* SkeletonCards extra al mostrar más */}
          {loadingMore &&
            Array.from({ length: 6 }).map((_, idx) => (
              <SkeletonCard key={`loading-${idx}`} />
            ))}
        </div>

        {!loading && visibleCount < perros.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-[#F23413] hover:bg-[#d62b10] text-white font-semibold rounded-full shadow-md transition-colors"
            >
              Mostrar más
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s forwards;
        }
      `}</style>
    </section>
  );
}
