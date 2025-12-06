import { Link } from "react-router-dom";
import logo from "../../assets/logo/homelogo.png";
import shakiraImg from "../../assets/img/shakira.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { toast } from "react-hot-toast";

export default function Footer() {
  const showShakiraToast = () => {
    toast.custom(
      // render function or JSX is supported
      () => (
        <div role="img" aria-label="Shakira Eguizábal" className="p-0 m-0">
          <img src={shakiraImg} alt="Shakira Eguizábal" className="w-28 h-28 object-cover rounded-md" />
        </div>
      ),
      {
        duration: 3000,
        position: "bottom-right",
        // remove default toast background/padding/shadow so only the image shows
        style: {
          padding: 0,
          background: 'transparent',
          boxShadow: 'none',
        },
      }
    );
  };

  const onKeyPressShakira = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      showShakiraToast();
    }
  };

  return (
    <footer className="bg-[#000000] text-[#FFF5F5] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* GRID HORIZONTAL COMO EN EL DISEÑO */}
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-[1.2fr_1fr_1fr_1fr]
          gap-12
        ">
          
          {/* -------- IZQUIERDA: REDES + LOGO -------- */}
          <div>
            <h3 className="text-sm font-bold tracking-wide mb-4">
              NUESTRAS REDES
            </h3>

            {/* ICONOS */}
            <div className="flex gap-4 mb-4">
              <a href="https://www.facebook.com/echameunapatasv/?locale=es_LA"
                 className="hover:text-yellow-400 hover:scale-110 transition-all duration-200">
                <FacebookIcon fontSize="small" />
              </a>

              <a href="https://www.instagram.com/echameunapatasv/?hl=en"
                 className="hover:text-yellow-400 hover:scale-110 transition-all duration-200">
                <InstagramIcon fontSize="small" />
              </a>

              <a href="https://api.whatsapp.com/send?phone=50379291589"
                 className="hover:text-yellow-400 hover:scale-110 transition-all duration-200">
                <WhatsAppIcon fontSize="small" />
              </a>
            </div>

            {/* LINEA */}
            <div className="w-32 border-t border-[#FFF5F5] my-6"></div>

            {/* LOGO */}
            <img src={logo} alt="logo" className="w-28" />
          </div>

          {/* -------- SERVICIOS -------- */}
          <div>
            <h3 className="text-sm font-bold tracking-wide mb-6">SERVICIOS</h3>

            <ul className="space-y-3">
              <li><Link to="/nosotros" className="hover:text-yellow-400 transition-all duration-200">Nosotros</Link></li>
              <li><Link to="/refugio" className="hover:text-yellow-400 transition-all duration-200">Refugio</Link></li>
              <li><Link to="/adopta" className="hover:text-yellow-400 transition-all duration-200">Adopta</Link></li>
              <li><Link to="/apadrina" className="hover:text-yellow-400 transition-all duration-200">Apadrina</Link></li>
            </ul>
          </div>

          {/* -------- ÚNETE -------- */}
          <div>
            <h3 className="text-sm font-bold tracking-wide mb-6">ÚNETE</h3>

            <ul className="space-y-3">
              {/*<li><Link to="/hogares" className="hover:text-yellow-400 transition-all duration-200">Hogares de acogida</Link></li>*/}
              <li><Link to="/denuncia" className="hover:text-yellow-400 transition-all duration-200">Denuncia</Link></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-200">Colabora</a></li>
            </ul>
          </div>

          {/* -------- COLABORA -------- */}
          <div>
            <h3 className="text-sm font-bold tracking-wide mb-6">COLABORA</h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-200">Voluntariado</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-200">Donaciones</a></li>
            </ul>
          </div>
        </div>

        {/* -------- COPYRIGHT -------- */}
        <div className="pt-4 mt-12 text-center text-xs text-[#FFF5F5]">
          <p>ÉCHAME UNA PATA SV © 2025. TODOS LOS DERECHOS RESERVADOS</p>
          <p
            className="italic mt-2 cursor-pointer hover:opacity-90 transition-all duration-150"
            role="button"
            tabIndex={0}
            aria-label="En memoria de Shakira Eguizábal Medrano - mostrar imagen"
            onClick={showShakiraToast}
            onKeyDown={onKeyPressShakira}
          >
            En memoria de Shakira Eguizábal Medrano
          </p>
        </div>
      </div>
    </footer>
  );
}
