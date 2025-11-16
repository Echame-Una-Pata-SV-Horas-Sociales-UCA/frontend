import { Link } from 'react-router-dom'
import logo from '../../assets/homelogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
                  <FacebookIcon />
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                    <InstagramIcon />
                </a>
                <a href="#" className="hover:text-yellow-400 transition">
                  <WhatsAppIcon />
                </a>
              </div>
              <div className="border-t border-gray-700 pt-8">
              <img src={logo} alt="logo" />
              </div>
            </div>
  
            {/* Services section */}
            <div className="md:col-span-1">
              <h3 className="text-sm font-bold mb-6 tracking-wide">SERVICIOS</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/nosotros" className="hover:text-yellow-400 transition">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/refugio" className="hover:text-yellow-400 transition">
                    Refugio
                  </Link>
                </li>
                <li>
                  <Link to="/adopta" className="hover:text-yellow-400 transition">
                    Adopta
                  </Link>
                </li>
                <li>
                  <Link to="/apadrina" className="hover:text-yellow-400 transition">
                    Apadrina
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Join section */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold mb-6 tracking-wide">ÚNETE</h3>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link to="/hogares" className="hover:text-yellow-400 transition">
                    Hogares de acogida
                  </Link>
                </li>
                <li>
                  <Link to="/denuncia" className="hover:text-yellow-400 transition">
                    Denuncia
                  </Link>
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
  