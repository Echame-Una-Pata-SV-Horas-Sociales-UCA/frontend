export default function SupportSection() {
    const supportOptions = [
      {
        title: "Doná",
        description: "alimento, insumos de limpieza o efectivo",
        icon: (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        ),
      },
      {
        title: "Apadriná",
        description: "mensualmente con $10.00 a un peludo rescatado que vive en el refugio",
        icon: (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ),
      },
      {
        title: "Adoptá",
        description: "responsablemente a un peludo rehabilitado en nuestro refugio",
        icon: (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h6v-2h-4z" />
          </svg>
        ),
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
                  <div className="text-black">{option.icon}</div>
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
  