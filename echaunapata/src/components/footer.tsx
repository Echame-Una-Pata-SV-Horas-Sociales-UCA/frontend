export default function Footer() {
    return (
      <footer className="bg-black text-white py-12 px-6 rounded-t-3xl">
        <div className="max-w-7xl mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Left section - Social networks and logo */}
            <div className="md:col-span-1">
              <h3 className="text-sm font-bold mb-4 tracking-wide">NUESTRAS REDES</h3>
              <div className="flex gap-4 mb-8">
                <a href="#" className="hover:text-yellow-400 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22.4C6.37 22.4 1.6 17.63 1.6 12S6.37 1.6 12 1.6s10.4 4.77 10.4 10.4-4.77 10.4-10.4 10.4m3.41-15.6c0 .442-.358.8-.8.8s-.8-.358-.8-.8.358-.8.8-.8.8.358.8.8m-8.41 6.4c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4m1.6 0c0-1.324 1.076-2.4 2.4-2.4s2.4 1.076 2.4 2.4-1.076 2.4-2.4 2.4-2.4-1.076-2.4-2.4" />
                  </svg>
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.025 0-2.031.313-2.896.893L4.734 5.309c.321-.624.88-1.23 1.646-1.526 2.954-.998 6.208.277 8.034 3.199 1.095 1.783 1.407 3.893.93 5.884-.574 2.384-2.325 4.359-4.681 5.038-2.356.679-4.926.222-6.893-1.24-.528-.398-1.016-.87-1.44-1.394l1.859-1.078c.607.704 1.408 1.305 2.327 1.74 1.519.73 3.309.694 4.775-.098 1.466-.793 2.433-2.263 2.818-3.936.385-1.673.067-3.508-1.01-4.939-.882-1.14-2.154-1.848-3.5-1.845" />
                  </svg>
                </a>
              </div>
              <div className="border-t border-gray-700 pt-8">
                <svg className="w-20 h-20" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="2" />
                  <circle cx="70" cy="80" r="8" fill="white" />
                  <circle cx="130" cy="80" r="8" fill="white" />
                  <path d="M 75 100 Q 100 120 125 100" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
  
            {/* Services section */}
            <div className="md:col-span-1">
              <h3 className="text-sm font-bold mb-6 tracking-wide">SERVICIOS</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Refugio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Adopta
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Apadrina
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Join section */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold mb-6 tracking-wide">ÚNETE</h3>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Hogares de acogida
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Denuncia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition">
                    Colabora
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-400">
            <p>ÉCHAME UNA PATA SV © 2025. TODOS LOS DERECHOS RESERVADOS</p>
          </div>
        </div>
      </footer>
    )
  }
  