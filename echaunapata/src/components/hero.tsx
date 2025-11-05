import hero from '../assets/homeframe.png'
export default function Hero() {
    return (
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero}
            alt="Perros rescatados"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
  
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              ¡El cambio comienza en ti!
            </h1>
  
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Durante los últimos 00 años, hemos rescatado, castrado y reubicado a más de 000 perros callejeros.
              Actualmente, albergamos a más de 300 perros que buscan una familia definitiva.
            </p>
  
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg">
              ¡DONAR!
            </button>
          </div>
        </div>
      </section>
    )
  }
  