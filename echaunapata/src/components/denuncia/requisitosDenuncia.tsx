import ButtonForms from "../commons/buttonForms";
import { Link } from "react-router-dom";

export default function RequisitoDenuncia() {
  return (
    <section className="w-full py-20 px-4 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="w-56 mx-auto mb-8">
{/*           <Lottie animationData={protectAnimation} loop autoplay />
 */}        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-14 uppercase text-center">
          ¿CÓMO PODÉS DENUNCIAR?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ayudanos a actuar frente a casos de maltrato, abandono o
              negligencia. Tu denuncia puede ser la diferencia entre el
              sufrimiento y una nueva oportunidad para un peludito.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Brindamos un espacio seguro y confidencial donde podés reportar
              situaciones de riesgo para cualquier animal. Cada aviso que
              recibimos es evaluado responsablemente y, cuando corresponde,
              trasladado a las autoridades o entidades competentes.
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Tu voz es clave para defender a quienes no pueden hacerlo por sí
              mismos. Juntos podemos detener el maltrato y construir un entorno
              más compasivo.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Cuanto más clara y detallada sea la información brindada, más
              efectiva será la intervención.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/denuncia-form" className="w-full flex justify-center">
            <ButtonForms
              text="LLENAR FICHA DE DENUNCIA"
              className="w-full sm:w-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
