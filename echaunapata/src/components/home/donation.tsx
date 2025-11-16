import volunteer_activism from '../../assets/volunteer_activism.svg';
export default function Donation() {
    const donationItems = [
      {
        title: "Comida",
        description: "Podés aparinar a todos nuestros perriots con pagos mensuales.",
      },
      {
        title: "Medicina",
        description: "Podés aparinar a todos nuestros perriots con pagos mensuales.",
      },
      {
        title: "Refugio",
        description: "Podés aparinar a todos nuestros perriots con pagos mensuales.",
      },
      {
        title: "Emergencias",
        description: "Podés aparinar a todos nuestros perriots con pagos mensuales.",
      },
    ]
  
    return (
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                SOMOS UN REFUGIO QUE FUNCIONA AL 100% CON DONACIONES
              </h2>
  
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Mantener un refugio con tantos peludos no es fácil. Cada día implica altos costos y grandes esfuerzos.
                  Tu apoyo económico nos permite seguir rescatando y cuidando vidas.
                </p>
  
                <p className="leading-relaxed">
                  Tu donación, grande o pequeña, puede cambiar la vida de un perro abandonado.
                </p>
              </div>
  
              <button className="bg-[#4A1214] hover:bg-[#4A1214] transition-colors text-white font-bold py-3 px-8 rounded-full">
                ¡DONAR!
              </button>
            </div>
  
            {/* Right Side - Grid of Cards */}
            <div className="grid grid-cols-2 gap-6">
              {donationItems.map((item, index) => (
                <div key={index} className="border-2 border-gray-800 rounded-2xl p-6 space-y-3">
                  {/* Yellow Circle Icon */}
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <img src={volunteer_activism as string} alt={item.title} className="w-6 h-6 object-contain color-black" />
                  </div>
  
                  <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  