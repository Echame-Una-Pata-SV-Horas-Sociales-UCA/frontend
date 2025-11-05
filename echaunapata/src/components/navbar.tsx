import logo from '../assets/homelogo.png'
export default function Navbar() {
    return (
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
            </div>
  
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#refugio" className="text-white hover:text-gray-300 transition-colors text-base">
                Refugio
              </a>
              <a href="#nosotros" className="text-white hover:text-gray-300 transition-colors text-base">
                Nosotros
              </a>
              <a href="#adopta" className="text-white hover:text-gray-300 transition-colors text-base">
                Adopta
              </a>
              <a href="#apadrina" className="text-white hover:text-gray-300 transition-colors text-base">
                Apadrina
              </a>
              <a href="#hogares" className="text-white hover:text-gray-300 transition-colors text-base">
                Hogares de acogida
              </a>
              <a href="#denuncia" className="text-white hover:text-gray-300 transition-colors text-base">
                Denuncia
              </a>
            </div>
  
            {/* CTA and User Icon */}
            <div className="flex items-center gap-4">
              <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all font-semibold">
                ¡Donar!
              </button>
              <button className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  