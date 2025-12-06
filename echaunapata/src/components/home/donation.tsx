import { VolunteerActivismOutlined, Vaccines, NightShelterOutlined, SosOutlined } from "@mui/icons-material";
import { Link } from 'react-router-dom';

export default function Donation() {
  const donationItems = [
    {
      title: "Comida",
      description: "Podés apadrinar a todos nuestros perritos con pagos mensuales.",
      Icon: VolunteerActivismOutlined,
      circleColor: "#FFE3E7",
    },
    {
      title: "Medicina",
      description: "Podés apadrinar a todos nuestros perritos con pagos mensuales.",
      Icon: Vaccines,
      circleColor: "#E1E8FF",
    },
    {
      title: "Refugio",
      description: "Podés apadrinar a todos nuestros perritos con pagos mensuales.",
      Icon: NightShelterOutlined,
      circleColor: "#EBFFD7",
    },
    {
      title: "Emergencias",
      description: "Podés apadrinar a todos nuestros perritos con pagos mensuales.",
      Icon: SosOutlined,
      circleColor: "#FFEFBF",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-black">
              SOMOS UN REFUGIO QUE FUNCIONA AL 100% CON DONACIONES
            </h2>

            <div className="space-y-3 text-gray-700 text-sm sm:text-base">
              <p>
                Mantener un refugio con tantos peludos no es fácil. Cada día implica altos costos 
                y grandes esfuerzos. Tu apoyo económico nos permite seguir rescatando y cuidando vidas.
              </p>

              <p>
                Tu donación, grande o pequeña, puede cambiar la vida de un perro abandonado.
              </p>
            </div>

            <Link
              to="/apadrina"
              className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-900 transition inline-block mx-auto md:mx-0 text-sm sm:text-base"
            >
              ¡Quiero ayudar!
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            gap-6 
            place-items-center
          ">
            {donationItems.map((item, index) => {
              const IconComp = item.Icon;
              return (
                <div
                  key={index}
                  className="
                    border-2 border-gray-800 rounded-2xl p-4 sm:p-6 
                    space-y-3 shadow-sm bg-white 
                    w-full max-w-sm
                    text-center
                  "
                >
                  {/* Circle icon */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: item.circleColor }}
                  >
                    <IconComp className="text-black" fontSize="small" />
                  </div>

                  <h3 className="font-bold text-lg sm:text-xl text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
