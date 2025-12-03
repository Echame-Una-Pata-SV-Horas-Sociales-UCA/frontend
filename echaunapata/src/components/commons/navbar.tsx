import { Link } from 'react-router-dom';
import logo from '../../assets/homelogo.png';

interface NavbarProps {
  solid?: boolean; // <-- AGREGADO
}

export default function Navbar({ solid = false }: NavbarProps) {

  return (
    <nav
      className={
        solid
          ? "fixed top-0 left-0 right-0 z-50 bg-black shadow-sm"
          : "absolute top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm"
      }
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/refugio" className="text-white hover:text-gray-300">Refugio</Link>
            <Link to="/nosotros" className="text-white hover:text-gray-300">Nosotros</Link>
            <Link to="/adopta" className="text-white hover:text-gray-300">Adopta</Link>
            <Link to="/apadrina" className="text-white hover:text-gray-300">Apadrina</Link>
            <Link to="/denuncia" className="text-white hover:text-gray-300">Denuncia</Link>
          </div>

          {/* Botón Donar + Usuario */}
          <div className="flex items-center gap-4">
            <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all font-semibold">
              ¡Donar!
            </button>
            <button className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
