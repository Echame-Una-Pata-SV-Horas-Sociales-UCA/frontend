import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/homelogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const isDesktop = window.innerWidth >= 1024;

      setScrolled(y > 60);

      if (isDesktop) {
        if (y > lastScroll.current && y > 80) setHidden(true);
        else setHidden(false);
      } else {
        setHidden(false);
      }

      lastScroll.current = y;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled
    ? "lg:bg-black lg:shadow-md"
    : "lg:bg-black/40 lg:backdrop-blur-sm";

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${hidden ? "lg:-translate-y-full" : "translate-y-0"}
          bg-black ${navBg}
        `}
      >
        <div className="px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-20" />
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-white">
            <Link to="/refugio">Refugio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/adopta">Adopta</Link>
            <Link to="/apadrina">Donacion</Link>
            <Link to="/denuncia">Denuncia</Link>
            <Link to="/red-de-apoyo">Red de Apoyo</Link>
            <Link to="/voluntarios">Voluntarios</Link>
          </div>

          <div className="hidden lg:block">
            <Link
              to="/apadrina"
              className="border-2 border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
            >
              ¡Donar!
            </Link>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed top-[80px] left-0 right-0 bottom-0
          z-40 bg-black text-white
          transform transition-transform duration-300
          lg:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-8 flex flex-col gap-6 text-xl">
          <Link to="/refugio" onClick={() => setOpen(false)}>Refugio</Link>
          <Link to="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link to="/adopta" onClick={() => setOpen(false)}>Adopta</Link>
          <Link to="/apadrina" onClick={() => setOpen(false)}>Apadrina</Link>
          <Link to="/denuncia" onClick={() => setOpen(false)}>Denuncia</Link>
          <Link to="/voluntarios" onClick={() => setOpen(false)}>Voluntarios</Link>
        </div>

        <div className="px-8 mt-10">
          <Link
            to="/apadrina"
            className="block text-center border-2 border-white py-3 rounded-full hover:bg-white hover:text-black transition"
            onClick={() => setOpen(false)}
          >
            ¡Donar!
          </Link>
        </div>
      </div>
    </>
  );
}
