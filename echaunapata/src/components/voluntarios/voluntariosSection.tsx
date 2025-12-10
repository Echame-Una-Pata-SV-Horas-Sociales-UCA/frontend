import Voluntario from "../../assets/voluntarios/img-15.jpg";

export default function VoluntariosSection() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Imagen */}
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
            <img
              src={Voluntario}
              alt="Colaboradores de EUP"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 uppercase">
              Nuestros colaboradores
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Nuestros colaboradores son empresas, organizaciones y asociaciones
              que se suman a nuestra misión a través de donaciones, jornadas de voluntariado,
              apoyo en eventos, insumos médicos, alimento y recursos esenciales.
              Gracias a su compromiso, podemos ampliar nuestro impacto y brindar mejores
              oportunidades a los perros rescatados.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Cada alianza fortalece nuestra labor diaria y nos permite seguir ayudando
              no solo a nuestros peluditos, sino también a otros refugios y rescatistas
              independientes que forman parte de esta gran red de apoyo.
              Su solidaridad es clave para transformar vidas y construir un futuro más
              digno para los animales en El Salvador.
            </p>

            {/* BOTÓN DE CONTACTO */}
         <a
          href="mailto:echameunapatasv@gmail.com"
          className="
            inline-flex w-auto self-start
            bg-[#488ff0] text-white font-semibold
            px-6 py-3 rounded-full text-sm sm:text-base
            transition-all hover:scale-105 shadow-md
          "
        >
          Quiero ser colaborador
        </a>


          </div>
        </div>
      </div>
    </section>
  );
}
