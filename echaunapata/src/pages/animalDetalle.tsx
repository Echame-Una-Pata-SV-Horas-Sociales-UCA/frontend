import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import CambioSection from "../components/adopta/cambioSection";
import ButtonForms from "../components/commons/buttonForms";
import flecosPhoto from "../assets/flecos.png";

import { CrueltyFree } from "@mui/icons-material";
import { Pets } from "@mui/icons-material";
import { MedicalServices } from "@mui/icons-material";
import { MedicationLiquid } from "@mui/icons-material";

export default function AnimalDetalle() {
  const { id } = useParams();
  const { state } = useLocation();
  const perro = state?.perro; 

  const animal = {
    name: perro?.nombre || "Flecos",
    location: "La Libertad",
    age: "3 meses",
    sex: "MACHO",
    description:
      "Flecos es un Golden Retriever de seis meses, rescatado recientemente y lleno de energía. Es un cachorro juguetón, curioso y siempre dispuesto a hacer nuevos amigos. Le encanta correr, explorar y recibir atención.",
    photo: perro?.imagen || flecosPhoto,

    details: [
      {
        label: "Especie",
        value: "Perro",
        bg: "bg-yellow-100",
        icon: <CrueltyFree className="text-yellow-600" fontSize="small" />,
      },
      {
        label: "Raza",
        value: "Golden Retriever",
        bg: "bg-pink-100",
        icon: <Pets className="text-pink-600" fontSize="small" />,
      },
      {
        label: "Esterilizado",
        value: "Sí",
        bg: "bg-green-100",
        icon: <MedicalServices className="text-green-600" fontSize="small" />,
      },
      {
        label: "Amputado",
        value: "No",
        bg: "bg-blue-100",
        icon: <MedicationLiquid className="text-blue-600" fontSize="small" />,
      },
    ],
  };

  return (
    <>
      <Navbar solid={true} />

      <div className="pt-28">
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div className="flex justify-center lg:justify-start">
              <img
                src={animal.photo}
                alt={animal.name}
                className="w-[260px] sm:w-[300px] lg:w-[330px] rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full w-max mb-4">
                {animal.sex}
              </span>

              <h1 className="text-4xl font-extrabold mb-2">{animal.name}</h1>

              <p className="text-gray-700 text-lg mb-1">{animal.location}</p>
              <p className="text-gray-700 text-lg mb-6">{animal.age}</p>

              <h2 className="text-xl font-bold mb-3">Acerca de {animal.name}</h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                {animal.description}
              </p>

              <ButtonForms text="LLENAR SOLICITUD DE ADOPCIÓN" />
            </div>
          </div>

          {/* DETALLES - HORIZONTAL EXACTO */}
          <div className="mt-20">
            <h3 className="text-xl font-bold mb-10">
              Más detalles de {animal.name}
            </h3>

            <div className="flex justify-between items-start divide-x divide-gray-200">

              {animal.details.map((detail, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center px-6 gap-3 w-full"
                >
                  <div
                    className={`${detail.bg} w-14 h-14 rounded-full flex items-center justify-center`}
                  >
                    {detail.icon}
                  </div>

                  <p className="font-semibold text-sm">{detail.label}</p>
                  <p className="text-gray-600 text-sm">{detail.value}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        <CambioSection />
        <Footer />
      </div>
    </>
  );
}
