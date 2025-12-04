import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import CambioSection from "../components/adopta/CambioSection.tsx";
import ExpandableSection from "../components/forms/expandableSection";
import InputField from "../components/forms/inputField";
import CommitmentField from "../components/forms/commitmentField";
import ObservationsField from "../components/forms/observationsField";
import ButtonForms from "../components/commons/buttonForms";
import { useForm } from "../hooks/useForm.ts";
import { CreateAdoption } from "../service/AdoptionService";
import { notifyError, notifySuccess } from "../components/utils/toastUtils";

interface AdoptionFormData {
  firstNames: string;
  lastNames: string;
  address: string;
  city: string;
  email: string;
  phoneNumber: string;
  dui: string;
  ref1_name: string;
  ref1_phone: string;
  ref2_name: string;
  ref2_phone: string;
  veterinarianName: string;
  veterinarianPhone: string;
  observations: string;
  animalId: string;
}

export default function AdoptionForm() {
  const initialForm: AdoptionFormData = {
    firstNames: "",
    lastNames: "",
    email: "",
    phoneNumber: "",
    dui: "",
    address: "",
    city: "",
    veterinarianName: "",
    veterinarianPhone: "",
    ref1_name: "",
    ref1_phone: "",
    ref2_name: "",
    ref2_phone: "",
    observations: "",
    animalId: "",
  };

  const { formValues, InputChange, resetForm } =
    useForm<AdoptionFormData>(initialForm);

  const [ownHome, setOwnHome] = useState<boolean | null>(null);
  const [acceptsVisits, setAcceptsVisits] = useState<boolean | null>(null);
  const [commitmentToSterilization, setCommitmentToSterilization] = useState<boolean | null>(null);
  const [commitmentToSendPhotos, setCommitmentToSendPhotos] = useState<boolean | null>(null);

  const [loading, setLoading] = useState(false);

  const { state } = useLocation();
  const animal = state?.animal || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // -------------------------
  // VALIDACIONES
  // -------------------------
  const validateForm = () => {
    if (formValues.firstNames.trim().length < 2)
      return notifyError("Ingrese su nombre correctamente");

    if (formValues.lastNames.trim().length < 2)
      return notifyError("Ingrese sus apellidos correctamente");

    if (!formValues.email.includes("@"))
      return notifyError("Ingrese un correo válido");

    if (!/^\d{8,}$/.test(formValues.phoneNumber))
      return notifyError("Ingrese un teléfono válido");

    if (!/^\d{8}-\d$/.test(formValues.dui))
      return notifyError("El DUI debe tener el formato 00000000-0");

    if (!formValues.address.trim())
      return notifyError("La dirección es obligatoria");

    if (!formValues.city.trim())
      return notifyError("La ciudad es obligatoria");

    // Referencias
    if (!formValues.ref1_name.trim())
      return notifyError("Ingrese la primera referencia");

    if (!/^\d{8,}$/.test(formValues.ref1_phone))
      return notifyError("Teléfono de referencia 1 inválido");

    if (!formValues.ref2_name.trim())
      return notifyError("Ingrese la segunda referencia");

    if (!/^\d{8,}$/.test(formValues.ref2_phone))
      return notifyError("Teléfono de referencia 2 inválido");

    // Compromisos
    if (ownHome === null)
      return notifyError("Debe indicar si dispone de hogar propio");

    if (acceptsVisits === null)
      return notifyError("Debe indicar si acepta visitas");

    if (commitmentToSterilization === null)
      return notifyError("Debe aceptar el compromiso de esterilización");

    if (commitmentToSendPhotos === null)
      return notifyError("Debe aceptar enviar fotos periódicas");

    if (formValues.observations.trim().length < 10)
      return notifyError("Las observaciones deben tener mínimo 10 caracteres");

    return true;
  };

  // -------------------------
  // SUBMIT
  // -------------------------
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    const payload = {
      veterinarianName: formValues.veterinarianName || null,
      veterinarianPhone: formValues.veterinarianPhone || null,

      animalId: animal.id, // ← si viene del state, úsalo
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
      observations: formValues.observations,
    };

    try {
      await CreateAdoption(payload);
      notifySuccess("Solicitud enviada con éxito");

      resetForm();
      setOwnHome(null);
      setAcceptsVisits(null);
      setCommitmentToSterilization(null);
      setCommitmentToSendPhotos(null);
    } catch (error) {
      console.error(error);
      notifyError("Error al enviar solicitud");
    } finally {
      setLoading(false);
    }
  };

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

            {/* DATOS PERSONALES */}
            <ExpandableSection title="Datos de identificación y contacto del solicitante">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField placeholder="Nombres" icon="PersonOutlined" name="firstNames" value={formValues.firstNames} onChange={InputChange} />
                <InputField placeholder="Apellidos" icon="PersonOutlined" name="lastNames" value={formValues.lastNames} onChange={InputChange} />

                <InputField placeholder="Dirección" icon="MapOutlined" name="address" value={formValues.address} onChange={InputChange} />
                <InputField placeholder="Ciudad" icon="MapOutlined" name="city" value={formValues.city} onChange={InputChange} />

                <InputField placeholder="Correo electrónico" icon="Email" name="email" value={formValues.email} onChange={InputChange} />
                <InputField placeholder="Teléfono" icon="CallOutlined" name="phoneNumber" value={formValues.phoneNumber} onChange={InputChange} />

                <InputField placeholder="DUI" icon="BadgeOutlined" name="dui" value={formValues.dui} onChange={InputChange} />
              </div>
            </ExpandableSection>

            {/* REFERENCIAS */}
            <ExpandableSection title="Referencias personales">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField placeholder="Nombres" icon="PersonOutlined" name="ref1_name" value={formValues.ref1_name} onChange={InputChange} />
                <InputField placeholder="Teléfono" icon="CallOutlined" name="ref1_phone" value={formValues.ref1_phone} onChange={InputChange} />

                <InputField placeholder="Nombres" icon="PersonOutlined" name="ref2_name" value={formValues.ref2_name} onChange={InputChange} />
                <InputField placeholder="Teléfono" icon="CallOutlined" name="ref2_phone" value={formValues.ref2_phone} onChange={InputChange} />
              </div>
            </ExpandableSection>

            {/* VETERINARIO */}
            <ExpandableSection title="Veterinario (opcional)">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField placeholder="Nombres" icon="PersonOutlined" name="veterinarianName" value={formValues.veterinarianName} onChange={InputChange} />
                <InputField placeholder="Teléfono" icon="CallOutlined" name="veterinarianPhone" value={formValues.veterinarianPhone} onChange={InputChange} />
              </div>
            </ExpandableSection>

            {/* COMPROMISOS */}
            <ExpandableSection title="Compromisos">
              <div className="grid grid-cols-1">
                <CommitmentField icon="HomeOutlined" question="¿Dispones de un hogar propio para vivir con tu mascota?" name="ownHome" value={ownHome} onChange={(e) => setOwnHome(e.target.value === "true")} />

                <CommitmentField icon="HomeOutlined" question="¿Aceptas realizar visitas programadas por parte del refugio para verificar el bienestar del animal?" name="acceptsVisits" value={acceptsVisits} onChange={(e) => setAcceptsVisits(e.target.value === "true")} />

                <CommitmentField icon="VolunteerActivism" question="¿Te comprometes a esterilizar al animal en el momento adecuado?" name="commitmentToSterilization" value={commitmentToSterilization} onChange={(e) => setCommitmentToSterilization(e.target.value === "true")} />

                <CommitmentField icon="AddAPhotoOutlined" question="¿Te comprometes a enviar fotografías periódicas del animal para su seguimiento?" name="commitmentToSendPhotos" value={commitmentToSendPhotos} onChange={(e) => setCommitmentToSendPhotos(e.target.value === "true")} />
              </div>
            </ExpandableSection>

            {/* OBSERVACIONES */}
            <ObservationsField
              title="Observaciones *"
              description="Comparte cualquier información adicional."
              name="observations"
              value={formValues.observations}
              onChange={InputChange}
            />

            {/* BOTÓN */}
            <ButtonForms
              text={loading ? "ENVIANDO…" : "ENVIAR SOLICITUD DE ADOPCIÓN"}
              className="w-lg"
              onClick={handleSubmit}
              disabled={loading}
            />
          </div>
        </section>

        <CambioSection />
        <Footer />
      </div>
    </>
  );
}
