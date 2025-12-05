import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/homelogo.png";

interface NavbarProps {
  solid?: boolean;
}

export default function Navbar({ solid = false }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={
        solid
          ? "fixed top-0 left-0 right-0 z-50 bg-black shadow-sm"
          : open
          ? "fixed top-0 left-0 right-0 z-50 bg-black" // ← MENU ABIERTO = SIEMPRE NEGRO
          : "absolute top-0 left-0 right-0 z-50 bg-black md:bg-black/40 backdrop-blur-sm"
      }
    >
      <div className="w-full px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between w-full">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-20" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/refugio" className="text-white hover:text-gray-300">Refugio</Link>
            <Link to="/nosotros" className="text-white hover:text-gray-300">Nosotros</Link>
            <Link to="/adopta" className="text-white hover:text-gray-300">Adopta</Link>
            <Link to="/apadrina" className="text-white hover:text-gray-300">Apadrina</Link>
            <Link to="/denuncia" className="text-white hover:text-gray-300">Denuncia</Link>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all font-semibold">
              ¡Donar!
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setOpen(true)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 z-[60]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MENU MOBILE */}
      <div
        className={`fixed top-0 right-0 h-full 
        w-full sm:w-80 bg-black text-white 
        z-[70] shadow-xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 text-xl">
          <Link to="/refugio" onClick={() => setOpen(false)}>Refugio</Link>
          <Link to="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link to="/adopta" onClick={() => setOpen(false)}>Adopta</Link>
          <Link to="/apadrina" onClick={() => setOpen(false)}>Apadrina</Link>
          <Link to="/denuncia" onClick={() => setOpen(false)}>Denuncia</Link>
        </nav>

        <div className="px-6 mt-8">
          <button className="w-full border-2 border-white text-white py-2 rounded-full hover:bg-white hover:text-black transition-all font-semibold">
            ¡Donar!
          </button>
        </div>
      </div>
    </nav>
  );
}
