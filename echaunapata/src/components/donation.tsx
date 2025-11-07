export default function Donation() {
    const donationItems = [
      {
        title: "Comida",
        description: "Podés apariñar a todos nuestros perriots con pagos mensuales.",
      },
      {
        title: "Medicina",
        description: "Podés apariñar a todos nuestros perriots con pagos mensuales.",
      },
      {
        title: "Refugio",
        description: "Podés apariñar a todos nuestros perriots con pagos mensuales.",
      },
      {
        title: "Emergencias",
        description: "Podés apariñar a todos nuestros perriots con pagos mensuales.",
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
  
              <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-bold py-3 px-8 rounded-full">
                ¡DONAR!
              </button>
            </div>
  
            {/* Right Side - Grid of Cards */}
            <div className="grid grid-cols-2 gap-6">
              {donationItems.map((item, index) => (
                <div key={index} className="border-2 border-gray-800 rounded-2xl p-6 space-y-3">
                  {/* Yellow Circle Icon */}
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
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
  