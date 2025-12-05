import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import CambioSection from "../components/adopta/CambioSection";
import ButtonForms from "../components/commons/buttonForms";
import flecosPhoto from "../assets/flecos.png";
import { GetAnimalById } from "../service/AnimalServices";
import {
  CrueltyFree,
  Pets,
  MedicalServices,
  MedicationLiquid,
} from "@mui/icons-material";

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

  // SCROLL ALWAYS TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FETCH ANIMAL BY ID
  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const res = await GetAnimalById(id!); // backend devuelve { message, data }
        setAnimal(res.data);
      } catch (error) {
        console.error("Error cargando animal:", error);
      }
    };

    fetchAnimal();
  }, [id]);

  // LOADING STATE
  if (!animal) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando información...</p>
      </div>
    );
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

      <div className="pt-28">
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex justify-center lg:justify-start">
              <img
                src={animal.photo || flecosPhoto}
                alt={animal.name}
                className="w-[260px] sm:w-[300px] lg:w-[330px] rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full w-max mb-4">
                {animal.sex || "SIN SEXO"}
              </span>

              <h1 className="text-4xl font-extrabold mb-2">{animal.name}</h1>

              <p className="text-gray-700 text-lg mb-1">
                {"Refugio Echa Una Patita"}
              </p>
              <p className="text-gray-700 text-lg mb-6">
                {animal.age || "Sin edad"}
              </p>

              <h2 className="text-xl font-bold mb-3">
                Acerca de {animal.name}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                {animal.initialDescription ||
                  "Este animal aún no tiene descripción completa. Pronto se actualizará su información."}
              </p>

              <Link to="/adoption-form" state={{ animal }}>
                <ButtonForms
                  text="LLENAR SOLICITUD DE ADOPCIÓN"
                  className="w-full"
                />
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-xl font-bold mb-10">
              Más detalles de {animal.name}
            </h3>

            <div className="flex justify-between items-start divide-x divide-gray-200">
              {details.map((detail, index) => (
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
