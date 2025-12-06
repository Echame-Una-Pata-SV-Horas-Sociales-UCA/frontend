import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/homelogo.png";

interface NavbarProps {
  solid?: boolean;
}

export default function Navbar({ solid = false }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 60);

      if (!isMobile) {
        if (current > lastScrollRef.current && current > 80) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScrollRef.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const desktopBg = scrolled
    ? "lg:bg-black lg:shadow-sm"
    : "lg:bg-black/40 lg:backdrop-blur-sm";

  const colorClasses = solid ? "bg-black shadow-sm" : `bg-black ${desktopBg}`;

  return (
    <nav
      style={isMobile ? { backgroundColor: "#000000" } : undefined}
      className={`
        fixed left-0 right-0 z-50
        transition-transform duration-300 ease-out
        ${hidden ? "lg:-translate-y-full" : "translate-y-0"}
        ${colorClasses}
      `}
    >
      <div className="w-full px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-20" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/refugio" className="text-white hover:text-gray-300">
              Refugio
            </Link>
            <Link to="/nosotros" className="text-white hover:text-gray-300">
              Nosotros
            </Link>
            <Link to="/adopta" className="text-white hover:text-gray-300">
              Adopta
            </Link>
            <Link to="/apadrina" className="text-white hover:text-gray-300">
              Donacion
            </Link>
            <Link to="/denuncia" className="text-white hover:text-gray-300">
              Denuncia
            </Link>
          </div>

          <div className="hidden lg:flex">
            <Link
              to="/apadrina"
              className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all font-semibold"
            >
              ¡Donar!
            </Link>
          </div>

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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black z-[60] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

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
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)}>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-8 text-xl mt-4">
          <Link to="/refugio" onClick={() => setOpen(false)}>
            Refugio
          </Link>
          <Link to="/nosotros" onClick={() => setOpen(false)}>
            Nosotros
          </Link>
          <Link to="/adopta" onClick={() => setOpen(false)}>
            Adopta
          </Link>
          <Link to="/apadrina" onClick={() => setOpen(false)}>
            Apadrina
          </Link>
          <Link to="/denuncia" onClick={() => setOpen(false)}>
            Denuncia
          </Link>
        </nav>

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
1