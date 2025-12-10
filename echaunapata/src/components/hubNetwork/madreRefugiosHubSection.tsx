import heroHubNetwork from "../../assets/img/red.png";
import PetsIcon from "@mui/icons-material/Pets";

export default function MadreRefugiosHubSection() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-10 lg:px-20">

      {/* CONTENIDO SUPERIOR (TEXTO + IMAGEN) */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* TEXTO */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 uppercase">
              Madre de refugios
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A lo largo de nuestra trayectoria, Échame Una Pata ha funcionado como un
              verdadero eje de apoyo para otros refugios y rescatistas independientes.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Brindamos insumos, alimento, materiales, donaciones y acompañamiento
              en momentos de emergencia, fortaleciendo así la red de protección animal
              en nuestra región y asegurando que más animales reciban el cuidado que
              necesitan.
            </p>
          </div>

          {/* IMAGEN */}
          <div className="w-full h-[280px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
            <img
              src={heroHubNetwork}
              alt="Madre de refugios"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* SUBSECCIÓN FULL WIDTH CON FONDO RESTAURADO */}
      <div className="w-full mt-20 bg-[#F6F6F6] py-14 px-3 rounded-xl">

        {/* TÍTULO */}
        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#6E3434] mb-4 text-center">
          A quienes apoyamos
        </h3>

        {/* SUBTÍTULO */}
        <p className="text-gray-700 text-lg max-w-2xl mx-auto text-center mb-12">
          Como madre de refugios, extendemos nuestra ayuda a rescatistas y 
          organizaciones que trabajan incansablemente por el bienestar animal.
        </p>

        {/* LISTA CON ICONOS MATERIAL DESIGN + COLOR CAFÉ */}
        <div className="text-gray-800 text-xl font-semibold space-y-4 mb-14 
                        flex flex-row justify-center flex-wrap gap-10">

          <div className="flex items-center gap-2">
            <PetsIcon sx={{ color: "#6E3434", fontSize: 28 }} />
            <span>Iván Handal</span>
          </div>

          <div className="flex items-center gap-2">
            <PetsIcon sx={{ color: "#6E3434", fontSize: 28 }} />
            <span>Peluditos 503</span>
          </div>

          <div className="flex items-center gap-2">
            <PetsIcon sx={{ color: "#6E3434", fontSize: 28 }} />
            <span>Silvia Guerrero</span>
          </div>

          <div className="flex items-center gap-2">
            <PetsIcon sx={{ color: "#6E3434", fontSize: 28 }} />
            <span>Doña Paty</span>
          </div>

        </div>

        {/* BOTÓN CENTRADO */}
        <div className="flex justify-center">
          <a
            href="mailto:echameunapatasv@gmail.com"
            className="
              inline-flex bg-[#6E3434] text-white font-semibold
              px-8 py-3 rounded-full text-base
              transition-all hover:scale-105 shadow-md
            "
          >
            Quiero contactarme
          </a>
        </div>

      </div>

    </section>
  );
}
