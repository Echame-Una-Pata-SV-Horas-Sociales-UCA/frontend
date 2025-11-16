export default function RequisitosAdopcion() {
  const requisitos = [
    "Tener vivienda propia o permiso para tener mascotas en caso de ser alquilada.",
    "Permitir la visita del equipo del refugio a la vivienda donde residirá el peludito.",
    "Presentar fotocopia del DUI",
    "Firmar nuestro Contrato de Adopción.",
    "Comprometerse a enviarnos fotos y videos una vez al mes para documentar y compartir su felicidad.",
    "Colaborar con $20, con lo cual se cubren los gastos de vacunación y desparasitación (incluye cartilla)."
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 uppercase">
          ¿CÓMO PODÉS ADOPTAR?
        </h2>
        
        <div className="space-y-6 mb-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            La adopción es un acto de amor que cambia dos vidas. En <strong>Échame Una Pata SV</strong> buscamos familias responsables que estén comprometidas con el bienestar de nuestros peluditos.
          </p>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-bold">
            Colaborar incluye la cartilla y la esterilización/castración (los $20 de colab).
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Requisitos para adoptar:
          </h3>
          
          <ul className="space-y-4">
            {requisitos.map((requisito, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 bg-[#F23413] text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                  {index + 1}
                </span>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed flex-1">
                  {requisito}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

