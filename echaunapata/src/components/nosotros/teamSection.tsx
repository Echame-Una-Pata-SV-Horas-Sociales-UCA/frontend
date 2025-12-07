import team from "../../assets/img/team.jpeg";

export default function TeamSection() {
  return (
    <section className="w-full py-18 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="flex flex-col justify-start">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase mb-4">
            Nuestro equipo
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Nuestro equipo está formado por personas que comparten una misma convicción: cada vida importa.
            Trabajamos unidos para rescatar, rehabilitar y proteger a los perros que han sufrido abandono o maltrato,
            poniendo al frente el respeto, la empatía y el compromiso con su bienestar.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Somos voluntarios, rescatistas, cuidadores, médicos veterinarios, diseñadores, comunicadores y amantes de los animales
            que aportan tiempo, esfuerzo y corazón para que cada peludito tenga la oportunidad de conocer un futuro seguro y lleno de cariño.
          </p>
        </div>

        <div className="w-full h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden">
          <img
            src={team}
            alt="Equipo EUP"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          <span className="font-bold">
            Creemos en el trabajo en equipo, en la educación, en la acción y en la esperanza.
          </span>{" "}
          Porque detrás de cada rescate hay un esfuerzo colectivo, y detrás de cada adopción,
          una historia que nos motiva a seguir adelante.
        </p>
      </div>
    </section>
  );
}
