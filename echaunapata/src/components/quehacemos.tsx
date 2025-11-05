import refugio from '../assets/house.svg'
import medical from '../assets/medical_services.svg'
import pets from '../assets/pets.svg'
import volunteer_activism from '../assets/volunteer_activism.svg'
import currency_exchange from '../assets/currency_exchange.svg'

export default function QueHacemos() {
    return (
      <section className="bg-[#4A1214] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Lo que hacemos</h2>
  
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Refugio */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img src={refugio} alt="refugio" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Refugio</h3>
            </div>
  
            {/* Apadrinamiento */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img src={volunteer_activism} alt="volunteer_activism" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Apadrinamiento</h3>
            </div>
  
            {/* Adopciones */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img src={pets} alt="pets" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Adopciones</h3>
            </div>
  
            {/* Donaciones */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img src={currency_exchange} alt="currency_exchange" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Donaciones</h3>
            </div>
  
            {/* Emergencias y denuncias */}
            <div className="flex flex-col items-center text-center col-span-2 md:col-span-3 lg:col-span-1">
              <div className="mb-4">
                <img src={medical} alt="ambulance" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Emergencias
                <br />y denuncias
              </h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
  