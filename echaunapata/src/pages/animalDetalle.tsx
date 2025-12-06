import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import ButtonForms from "../components/commons/buttonForms";
import flecosPhoto from "../assets/img/perro7.png";
import { GetAnimalById } from "../service/AnimalServices";
import {
  CrueltyFree,
  Pets,
  MedicalServices,
  MedicationLiquid,
} from "@mui/icons-material";
import SkeletonAnimal from "../components/commons/skeletonAnimal";

export interface Animal {
  id: string;
  name: string;
  species: string;
  state: string;
  sex: string;
  race?: string;
  age: string | number | null;
  initialDescription?: string;
  sterilized: boolean;
  missingLimb: boolean;
  photo?: string;
  rescueLocation?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function AnimalDetalle() {
  const { id } = useParams();
  const [animal, setAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const res = await GetAnimalById(id!);
        setAnimal(res.data);
      } catch (error) {
        console.error("Error cargando animal:", error);
      }
    };

    fetchAnimal();
  }, [id]);

  if (!animal) {
    return <SkeletonAnimal />;
  }

  const details = [
    {
      label: "Especie",
      value: animal.species,
      bg: "bg-yellow-100",
      icon: <CrueltyFree className="text-yellow-600" fontSize="small" />,
    },
    {
      label: "Raza",
      value: animal.race || "Sin raza",
      bg: "bg-pink-100",
      icon: <Pets className="text-pink-600" fontSize="small" />,
    },
    {
      label: "Esterilizado",
      value: animal.sterilized ? "Sí" : "No",
      bg: "bg-green-100",
      icon: <MedicalServices className="text-green-600" fontSize="small" />,
    },
    {
      label: "Amputado",
      value: animal.missingLimb ? "Sí" : "No",
      bg: "bg-blue-100",
      icon: <MedicationLiquid className="text-blue-600" fontSize="small" />,
    },
  ];

  return (
    <>
      <Navbar solid={true} />

      <div className="pt-20 sm:pt-24 md:pt-28">

        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10">

          {/* GRID PRINCIPAL */}
          <div className="
            grid grid-cols-1 lg:grid-cols-2 
            gap-10 sm:gap-12
            text-center lg:text-left
            items-center
          ">

            {/* Imagen */}
            <div className="flex justify-center">
              <img
                src={animal.photo || flecosPhoto}
                alt={animal.name}
                className="
                  w-full max-w-[260px] sm:max-w-[300px] md:max-w-[330px]
                  rounded-xl object-cover shadow-lg
                "
              />
            </div>

            {/* Información */}
            <div className="flex flex-col justify-center items-center lg:items-start">

              <span className="
                bg-blue-500 text-white text-xs font-bold 
                px-4 py-1 rounded-full 
                w-max mb-4
              ">
                {animal.sex || "SIN SEXO"}
              </span>

              <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
                {animal.name}
              </h1>

              <p className="text-gray-700 text-base sm:text-lg mb-1">
                Refugio Échame Una Patita
              </p>

              <p className="text-gray-700 text-base sm:text-lg mb-6">
                {animal.age || "Sin edad"}
              </p>

              <h2 className="text-xl font-bold mb-3">
                Acerca de {animal.name}
              </h2>

              <p className="
                text-gray-600 text-sm sm:text-base 
                leading-relaxed mb-8 max-w-lg
              ">
                {animal.initialDescription ||
                  "Este animal aún no tiene descripción completa. Pronto se actualizará su información."}
              </p>

              <Link to="/adoption-form" state={{ animal }} className="w-full max-w-sm">
                <ButtonForms
                  text="LLENAR SOLICITUD DE ADOPCIÓN"
                  className="w-full text-sm sm:text-base"
                />
              </Link>

            </div>
          </div>

          {/* DETALLES */}
          <div className="mt-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-10 text-center lg:text-left">
              Más detalles de {animal.name}
            </h3>

          <div className="
              grid 
              grid-cols-1         
              sm:grid-cols-2      
              md:grid-cols-4       
              gap-6 sm:gap-8 
              text-center
            ">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center px-2 gap-3"
                >
                  <div
                    className={`${detail.bg} 
                      w-12 h-12 sm:w-14 sm:h-14 
                      rounded-full flex items-center justify-center
                    `}
                  >
                    {detail.icon}
                  </div>

                  <p className="font-semibold text-xs sm:text-sm">{detail.label}</p>
                  <p className="text-gray-600 text-xs sm:text-sm break-words">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>

        <Footer />
      </div>
    </>
  );
}
