import ButtonForms from "../commons/buttonForms";
import { Link } from "react-router-dom";

export default function RequisitoDenuncia() {

  return (
    <section className="w-full py-8 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto items-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 uppercase">
        ¿CÓMO PODES DENUNCIAR?
        </h2>
        
        <div className="space-y-6 mb-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Ayudanos a actuar frente a casos de maltrato, abandono o negligencia. Tu denuncia puede ser la diferencia entre el sufrimiento y una nueva oportunidad para un peludito..
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
Brindamos un espacio seguro y confidencial donde podés reportar situaciones de riesgo para cualquier animal. Cada aviso que recibimos es evaluado con responsabilidad y, cuando corresponde, trasladado a las autoridades o entidades competentes.
          </p>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-bold">
Tu voz es clave para defender a quienes no pueden hacerlo por sí mismos. Juntos podemos detener el maltrato y construir un entorno más compasivo.          </p>
        </div>
        
     <div className="flex justify-center">
      <Link to="/denuncia-form" className="w-full flex justify-center">
      <ButtonForms 
        text="LLENAR FICHA DE DENUNCIA"
        className="w-lg"
      />
    </Link>
    </div>


     
        </div>
    </section>
  );
}

