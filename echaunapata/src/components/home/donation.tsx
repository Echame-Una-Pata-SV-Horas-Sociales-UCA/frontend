import { VolunteerActivismOutlined, Vaccines, NightShelterOutlined, SosOutlined } from "@mui/icons-material";
import { Link } from 'react-router-dom';

export default function Donation() {
  const donationItems = [
    {
      title: "Comida",
      description: "Podés apadrinar a todos nuestros perritos con pagos mensuales.",
      Icon: VolunteerActivismOutlined,
      circleColor: "#FFE3E7", // rosado suave
    },
    {
      title: "Medicina",
      description: "Podés apadrinar a todos nuestros perritos con pagos mensuales.",
      Icon: Vaccines,
      circleColor: "#E1E8FF", // azul suave
    },
    {
      title: "Refugio",
      description: "Podés apadrinar a todos nuestros perritos con pagos mensuales.",
      Icon: NightShelterOutlined,
      circleColor: "#EBFFD7", // verde suave
    },
    {
      title: "Emergencias",
      description: "Podés apadrinar a todos nuestros perritos con pagos mensuales.",
      Icon: SosOutlined,
      circleColor: "#FFEFBF", // amarillo suave
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
              SOMOS UN REFUGIO QUE FUNCIONA AL 100% CON DONACIONES
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Mantener un refugio con tantos peludos no es fácil. Cada día implica altos costos 
                y grandes esfuerzos. Tu apoyo económico nos permite seguir rescatando y cuidando vidas.
              </p>

              <p>
                Tu donación, grande o pequeña, puede cambiar la vida de un perro abandonado.
              </p>
            </div>

            <Link to="/apadrina" className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-900 transition inline-block text-center">
              ¡DONAR!
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-6">
            {donationItems.map((item, index) => {
              const IconComp = item.Icon;
              return (
                <div
                  key={index}
                  className="border-2 border-gray-800 rounded-2xl p-6 space-y-3 shadow-sm bg-white"
                >
                  {/* Circle icon */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: item.circleColor }}
                  >
                    <IconComp className="text-black" fontSize="medium" />
                  </div>

                  <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
