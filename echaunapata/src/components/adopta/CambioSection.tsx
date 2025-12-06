import { PawPrint, HeartHandshake, ShieldCheck } from "lucide-react";

export default function CambioSection() {
  return (
    <section className="w-full py-24 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] tracking-tight">
          ¡El cambio comienza en ti!
        </h2>

        <div className="w-28 h-1 bg-[#F23413] rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <PawPrint size={42} className="text-[#F23413] mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">+300 perros</h3>
            <p className="text-sm text-gray-600 mt-2">
              Rescatados y en búsqueda de un hogar.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <HeartHandshake size={42} className="text-[#F23413] mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">
              Donaciones reales
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Tu ayuda mantiene a nuestros peluditos sanos y felices.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <ShieldCheck size={42} className="text-[#F23413] mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">
              Cuidado seguro
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Protección, alimento y atención veterinaria constante.
            </p>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl leading-relaxed mt-4">
          Tu apoyo se convierte en alimento, medicinas, refugio y nuevas
          oportunidades para quienes han sufrido abandono.
        </p>
      </div>
    </section>
  );
}
