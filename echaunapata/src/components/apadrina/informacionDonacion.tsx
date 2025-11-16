export default function InformacionDonacion() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 uppercase">
          ¿CÓMO PODÉS DONAR?
        </h2>
        
        <div className="space-y-6 mb-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            El principal apoyo que recibimos es mediante el <strong>Plan Padrino Mensual</strong>. 
            Con una colaboración de $10.00 mensual (equivalente a $0.33 por día) podés apadrinar 
            a un perro, cubriendo su alimentación, vitaminas, vacunas, desparasitación y cuidados básicos.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-black">
            Formas de donación
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 bg-[#F23413] text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                1
              </span>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed flex-1">
                Puedes hacer tu donación de cualquier monto a una de nuestras cuentas.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

