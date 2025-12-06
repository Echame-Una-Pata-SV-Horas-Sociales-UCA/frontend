import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/homelogo.png";

interface NavbarProps {
  solid?: boolean;
}

export default function Navbar({ solid = false }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Detecta si bajó suficiente para volverse sólido
      setScrolled(current > 60);

      // Solo Desktop
      if (window.innerWidth >= 1024) {
        if (current > lastScroll && current > 80) {
          // Bajando → ocultar
          setHidden(true);
        } else {
          // Subiendo → mostrar
          setHidden(false);
        }
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`
        fixed left-0 right-0 z-50
        transition-transform duration-300 ease-out

        ${hidden ? "-translate-y-full" : "translate-y-0"}

        ${
          solid
            ? "bg-black shadow-sm"
            : scrolled
              ? "bg-black shadow-sm"   /* NAVBAR NEGRO AL BAJAR */
              : "bg-black lg:bg-black/40 lg:backdrop-blur-sm"
        }
      `}
    >
      {/* NAVBAR CONTENT */}
      <div className="w-full px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between w-full">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-20" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/refugio" className="text-white hover:text-gray-300">Refugio</Link>
            <Link to="/nosotros" className="text-white hover:text-gray-300">Nosotros</Link>
            <Link to="/adopta" className="text-white hover:text-gray-300">Adopta</Link>
            <Link to="/apadrina" className="text-white hover:text-gray-300">Donacion</Link>
            <Link to="/denuncia" className="text-white hover:text-gray-300">Denuncia</Link>
          </div>

          {/* DESKTOP DONATE */}
          <div className="hidden lg:flex">
            <Link
              to="/apadrina"
              className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all font-semibold"
            >
              ¡Donar!
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            className="lg:hidden text-white focus:outline-none"
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
          className="fixed inset-0 bg-black z-[60] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0
          bg-black text-white
          z-[70] shadow-xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        {/* CLOSE */}
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-6 px-8 text-xl mt-4">
          <Link to="/refugio" onClick={() => setOpen(false)}>Refugio</Link>
          <Link to="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link to="/adopta" onClick={() => setOpen(false)}>Adopta</Link>
          <Link to="/apadrina" onClick={() => setOpen(false)}>Apadrina</Link>
          <Link to="/denuncia" onClick={() => setOpen(false)}>Denuncia</Link>
        </nav>

        {/* DONATE */}
        <div className="px-8 mt-10">
          <Link
            to="/apadrina"
            className="w-full block text-center border-2 border-white text-white py-3 rounded-full hover:bg-white hover:text-black transition-all font-semibold"
          >
            ¡Donar!
          </Link>
        </div>
      </div>
    </nav>
  );
}
