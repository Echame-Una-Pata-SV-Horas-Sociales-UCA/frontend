import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import CambioSection from "../components/adopta/cambioSection";
import ExpandableSection from "../components/forms/expandableSection";
import InputField from "../components/forms/inputField";
import CommitmentField from "../components/forms/commitmentField";
import ObservationsField from "../components/forms/observationsField";
import ButtonForms from "../components/commons/buttonForms";
import { useForm } from "../hooks/useForm";
import { CreateAdoption } from "../service/AdoptionService.ts";

export default function AdoptionForm() {
  const initialForm = {
    // Datos personales
    firstNames: "",
    lastNames: "",
    email: "",
    phoneNumber: "",
    dui: "",
    address: "",
    city: "",

    // Veterinario
    veterinarianName: "",
    veterinarianPhone: "",

    // Referencias personales
    ref1_name: "",
    ref1_phone: "",
    ref2_name: "",
    ref2_phone: "",

    // ID del animal (lo pasas por state)
    animalId: "",
  };

  const { formValues, InputChange } = useForm(initialForm);

  const [ownHome, setOwnHome] = useState<boolean | null>(null);
  const [acceptsVisits, setAcceptsVisits] = useState<boolean | null>(null);
  const [commitmentToSterilization, setCommitmentToSterilization] = useState<
    boolean | null
  >(null);
  const [commitmentToSendPhotos, setCommitmentToSendPhotos] = useState<
    boolean | null
  >(null);

  const handleSubmit = async () => {
    const payload = {
      veterinarianName: formValues.veterinarianName,
      veterinarianPhone: formValues.veterinarianPhone,
      animalId: "a25c3ee0-a748-4c7b-bb46-adc8301bc7da",
      ownHome,
      acceptsVisits,
      commitmentToSterilization,
      commitmentToSendPhotos,

      person: {
        firstNames: formValues.firstNames,
        lastNames: formValues.lastNames,
        email: formValues.email,
        phoneNumber: formValues.phoneNumber,
        dui: formValues.dui,
        address: formValues.address,
        city: formValues.city,
      },

      references: [
        {
          name: formValues.ref1_name,
          phone: formValues.ref1_phone,
        },
        {
          name: formValues.ref2_name,
          phone: formValues.ref2_phone,
        },
      ],
    };

    console.log("PAYLOAD PARA BACKEND:", payload);
    try {
      const response = await CreateAdoption(payload);
      console.log("Solicitud enviada:", response);
    } catch (error) {
      console.error("Error enviando solicitud", error);
    }
  };

  const { state } = useLocation();
  const animal = state?.animal || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar solid={true} />

      <div className="pt-28">
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            FICHA DE ADOPCIÓN
          </h1>

          <p className="text-center text-gray-600 mb-10 text-2xl">
            {animal.name || "Flecos"}
          </p>

          <div className="gap-4 flex flex-col items-center">
            <ExpandableSection title="Datos de identificación y contacto del solicitante">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField
                  placeholder="Nombres"
                  icon="PersonOutlined"
                  name="firstNames"
                  value={formValues.firstNames}
                  onChange={InputChange}
                />
                <InputField
                  placeholder="Apellidos"
                  icon="PersonOutlined"
                  name="lastNames"
                  value={formValues.lastNames}
                  onChange={InputChange}
                />{" "}
                <InputField
                  placeholder="Dirección"
                  icon="MapOutlined"
                  name="address"
                  value={formValues.address}
                  onChange={InputChange}
                />
                <InputField
                  placeholder="Ciudad"
                  icon="MapOutlined"
                  name="city"
                  value={formValues.city}
                  onChange={InputChange}
                />
                <InputField
                  placeholder="Correo electrónico"
                  icon="Email"
                  name="email"
                  value={formValues.email}
                  onChange={InputChange}
                />
                <InputField
                  placeholder="Teléfono"
                  icon="CallOutlined"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={InputChange}
                />
                <InputField
                  placeholder="DUI"
                  icon="BadgeOutlined"
                  name="dui"
                  value={formValues.dui}
                  onChange={InputChange}
                />
              </div>
            </ExpandableSection>

            <ExpandableSection title="Referencias personales">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField
                  placeholder="Nombres"
                  icon="PersonOutlined"
                  name="ref1_name"
                  value={formValues.ref1_name}
                  onChange={InputChange}
                />
                <InputField
                  placeholder="Teléfono"
                  icon="CallOutlined"
                  name="ref1_phone"
                  value={formValues.ref1_phone}
                  onChange={InputChange}
                />
                <InputField
                  placeholder="Nombres"
                  icon="PersonOutlined"
                  name="ref2_name"
                  value={formValues.ref2_name}
                  onChange={InputChange}
                />
                <InputField
                  placeholder="Teléfono"
                  icon="CallOutlined"
                  name="ref2_phone"
                  value={formValues.ref2_phone}
                  onChange={InputChange}
                />
              </div>
            </ExpandableSection>

            <ExpandableSection title="Veterinario (opcional)">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField
                  placeholder="Nombres"
                  icon="PersonOutlined"
                  name="veterinarianName"
                  value={formValues.veterinarianName}
                  onChange={InputChange}
                />
                <InputField
                  placeholder="Teléfono"
                  icon="CallOutlined"
                  name="veterinarianPhone"
                  value={formValues.veterinarianPhone}
                  onChange={InputChange}
                />
              </div>
            </ExpandableSection>

            <ExpandableSection title="Compromisos">
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-0">
                <CommitmentField
                  icon="HomeOutlined"
                  question="¿Dispones de un hogar propio para vivir con tu mascota?"
                  name="ownHome"
                  value={ownHome}
                  onChange={(e) => setOwnHome(e.target.value === "true")}
                />

                <CommitmentField
                  icon="HomeOutlined"
                  question="¿Aceptas realizar visitas programadas por parte del refugio para verificar el bienestar del animal?"
                  name="acceptsVisits"
                  value={acceptsVisits}
                  onChange={(e) => setAcceptsVisits(e.target.value === "true")}
                />

                <CommitmentField
                  icon="VolunteerActivism"
                  question="¿Te comprometes a esterilizar al animal en el momento adecuado, según las indicaciones del refugio y el veterinario?"
                  name="commitmentToSterilization"
                  value={commitmentToSterilization}
                  onChange={(e) =>
                    setCommitmentToSterilization(e.target.value === "true")
                  }
                />

                <CommitmentField
                  icon="AddAPhotoOutlined"
                  question="¿Te comprometes a enviar fotografías periódicas del animal para dar seguimiento a su bienestar?"
                  name="commitmentToSendPhotos"
                  value={commitmentToSendPhotos}
                  onChange={(e) =>
                    setCommitmentToSendPhotos(e.target.value === "true")
                  }
                />
              </div>
            </ExpandableSection>

            <ObservationsField
              title="Observaciones *"
              description="Comparte cualquier información adicional que consideres importante sobre tu experiencia con mascotas, tu situación actual en el hogar o cualquier detalle relevante para evaluar tu solicitud de adopción."
              name="observations"
              value={formValues.observations}
              onChange={InputChange}
            />

            <ButtonForms
              text="ENVIAR SOLICITUD DE ADOPCIÓN"
              className="w-lg"
              onClick={handleSubmit}
            />
          </div>
        </section>

        <CambioSection />
        <Footer />
      </div>
    </>
  );
}
