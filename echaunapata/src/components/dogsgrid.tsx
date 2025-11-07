import happyDog from '../assets/homeframe.png';
export default function DogsGrid() {
    return (
      <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Top row - Two columns: text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 uppercase">
                NUESTROS
                <br />
                ACOGIDOS
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                En nuestro refugio puedes encontrar cachorros rescatados, perros mayores y perros con discapacidad, abonados o enfermos.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Pero por encima de todo, todos nuestros perros son únicos y merecen una vida feliz y saludable.
              </p>
            </div>
  
            {/* Right side - Main large image */}
            <div className="w-full h-full min-h-96 lg:min-h-[500px] rounded-lg overflow-hidden">
              <img src={happyDog} alt="Perro en el refugio" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bottom row - Full width horizontal gallery with 4 images */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden">
              <img src={happyDog} alt="Perro rescatado 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden">
              <img src={happyDog} alt="Perro rescatado 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden">
              <img src={happyDog} alt="Perro rescatado 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden">
              <img src={happyDog} alt="Perro rescatado 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  