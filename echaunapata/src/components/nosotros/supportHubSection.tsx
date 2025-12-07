import Button from "../commons/button"; // Ajusta ruta según tu proyecto

export default function SupportHubSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
          Madre de refugios
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
          A lo largo de nuestra trayectoria, Échame Una Pata ha funcionado como un
          verdadero eje de apoyo para otros refugios y rescatistas independientes,
          proporcionando insumos, alimento, materiales, donaciones y acompañamiento
          en momentos de emergencia.
        </p>

        <Button
          text="Conoce nuestra red de apoyo"
          color="#7A1F1F"
          to="/red-de-apoyo"  // Ajusta la ruta según tu sitio
        />

      </div>
    </section>
  );
}
