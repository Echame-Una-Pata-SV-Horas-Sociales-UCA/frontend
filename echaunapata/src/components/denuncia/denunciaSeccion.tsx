import { PawPrint, AlertTriangle, Heart } from "lucide-react";


export default function CambioSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#fff8f5] to-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#6B2E2E] mb-8">
          ¿Por qué tu denuncia es tan importante?
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
          Cada reporte que recibimos puede significar una vida rescatada, un
          caso visibilizado y un peludito que vuelve a sentir seguridad.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          <div className="p-6 rounded-2xl shadow-md bg-white border">
            <AlertTriangle className="w-12 h-12 text-[#F23413] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Detener el riesgo</h3>
            <p className="text-gray-600">
              Una denuncia a tiempo puede evitar más maltrato y sufrimiento.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white border">
            <PawPrint className="w-12 h-12 text-[#6B2E2E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Salvar vidas</h3>
            <p className="text-gray-600">
              Muchas de nuestras intervenciones inician gracias a los reportes.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white border">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Crear conciencia</h3>
            <p className="text-gray-600">
              Cuando reportás, también inspirás a otros a proteger a los
              peluditos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
