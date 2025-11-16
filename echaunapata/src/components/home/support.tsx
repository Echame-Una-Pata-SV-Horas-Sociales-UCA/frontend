import currencyExchange from '../../assets/currency_exchange.svg';
import volunteer_activism from '../../assets/volunteer_activism.svg';
import pets from '../../assets/pets.svg';
export default function SupportSection() {

    const supportOptions = [
      {
        title: "Doná",
        description: "alimento, insumos de limpieza o efectivo",
        icon: currencyExchange
      },
      {
        title: "Apadriná",
        description: "mensualmente con $10.00 a un peludo rescatado que vive en el refugio",
        icon: volunteer_activism
      },
      {
        title: "Adoptá",
        description: "responsablemente a un peludo rehabilitado en nuestro refugio",
        icon: pets
      },
    ]
  
    return (
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">¿Qué puedes hacer para apoyar?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Lorem ipsum set dolorem at met Lorem ipsum set dolorem at met Lorem ipsum set dolorem at met Lorem ipsum set
              dolorem at met
            </p>
          </div>
  
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="border-2 border-gray-400 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                {/* Icon Circle */}
                <div className="bg-yellow-400 rounded-full p-4 mb-6">
                  <img src={option.icon as string} alt={option.title} className="w-8 h-8 object-contain color-black" />
                </div>
  
                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3">{option.title}</h3>
  
                {/* Description */}
                <p className="text-gray-700 text-sm mb-6 flex-grow">{option.description}</p>
  
                {/* Button */}
                <button className="bg-black text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors">
                  QUIERO SABER MÁS
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  