import happyDog from '../../assets/img/homeframe.png';

export default function HistoriaSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Texto */}
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase mb-4">
            Todo comienza en el 2016
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Échame Una Pata SV es un proyecto de rescate animal que nació en marzo de 2015, 
            como iniciativa de nuestra fundadora Silvia Ayala, con el propósito de apoyar 
            a rescatistas independientes y refugios brindando ayuda en necesidades básicas 
            como alimento y medicina.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Con el tiempo, y ante la indiferencia hacia los perros en situación de CallOutlinede 
            y las precarias condiciones en las que muchos sobrevivían, surgió la necesidad 
            de crear un espacio propio para rehabilitarlos y ofrecerles una segunda oportunidad.
          </p>
        </div>

        {/* Imagen derecha */}
        <div className="w-full h-[260px] sm:h-[300px] lg:h-[340px] overflow-hidden">
          <img 
            src={happyDog} 
            alt="Perro historia"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
