import Button from "../commons/button";

export default function StatsSection() {
    return (
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              CASA DE <span className="text-red-500">+300</span> PERROS
            </h2>
  
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Échame una pata SV es un hogar temporal para miles de cachorros que buscan una segunda oportunidad, pero
              también somos el hogar permanente de muchos otros que podrían no encontrar una familia propia debido a su
              apariencia, edad o necesidades y tratamientos especiales.
            </p>
  
            <Button text="¡DONAR!" color="#4A1214" />  
          </div>
  
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl sm:text-5xl font-bold text-red-900 mb-2">+1000</p>
              <p className="text-gray-600 text-sm sm:text-base">Perros rescatados en los últimos 15 años</p>
            </div>
  
            {/* Stat 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl sm:text-5xl font-bold text-red-900 mb-2">1000</p>
              <p className="text-gray-600 text-sm sm:text-base">Perros entregados en adopción</p>
            </div>
  
            {/* Stat 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl sm:text-5xl font-bold text-red-900 mb-2">1000</p>
              <p className="text-gray-600 text-sm sm:text-base">
                Perros actualmente alimentados y cuidados en el Santuario
              </p>
            </div>
  
            {/* Stat 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-4xl sm:text-5xl font-bold text-red-900 mb-2">+1000</p>
              <p className="text-gray-600 text-sm sm:text-base">Padrinos de todo el mundo</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  