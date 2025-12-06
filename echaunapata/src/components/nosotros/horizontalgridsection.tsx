import perro1 from '../../assets/img/dog01.jpg';
import perro4 from '../../assets/img/dog02.jpg';
import perro3 from '../../assets/img/dog03.jpg';
import perro2 from '../../assets/img/dog04.jpg';

export default function HorizontalGridSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-8 uppercase text-center">ASI, EN DICIEMBRE DE 2018</h1>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center mb-8">Se abrieron las puertas del refugio en San Miguel, un lugar donde hoy viven, se cuidan y se recuperan decenas de perros abandonados y maltratados.</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
              <img src={perro1} alt="Perro rescatado 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
              <img src={perro2} alt="Perro rescatado 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
              <img src={perro3} alt="Perro rescatado 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
              <img src={perro4} alt="Perro rescatado 4" className="w-full h-full object-cover" />
            </div>
          </div>
      </div>
    </section>
  )
}