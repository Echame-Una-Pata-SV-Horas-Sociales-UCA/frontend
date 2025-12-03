import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import CambioSection from "../components/adopta/cambioSection";
import ExpandableSection from "../components/forms/expandableSection";
import InputField from "../components/forms/inputField";
import CommitmentField from "../components/forms/commitmentField";
import ObservationsField from "../components/forms/observationsField";
import ButtonForms from "../components/commons/buttonForms";

export default function AdoptionForm() {

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
                <InputField placeholder="Nombres" icon="PersonOutlined" />
                <InputField placeholder="Apellidos" icon="PersonOutlined" />
                <InputField placeholder="Dirección" icon="MapOutlined" />
                <InputField placeholder="Ciudad" icon="MapOutlined" />
                <InputField placeholder="Correo electrónico" icon="Email" />
                <InputField placeholder="Teléfono" icon="CallOutlined" />
                <InputField placeholder="DUI" icon="BadgeOutlined" />
              </div>
            </ExpandableSection>

            <ExpandableSection title="Referencias personales">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField placeholder="Nombres" icon="PersonOutlined" />
                <InputField placeholder="Teléfono" icon="CallOutlined" />
                <InputField placeholder="Nombres" icon="PersonOutlined" />
                <InputField placeholder="Teléfono" icon="CallOutlined" />
              </div>
            </ExpandableSection>

            <ExpandableSection title="Veterinario (opcional)">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField placeholder="Nombres" icon="PersonOutlined" />
                <InputField placeholder="Teléfono" icon="CallOutlined" />
              </div>
            </ExpandableSection>

            <ExpandableSection title="Compromisos">
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-0">

                <CommitmentField
                  icon="HomeOutlined"
                  question="¿Dispones de un hogar propio para vivir con tu mascota?"
                  name="casaPropia"
                />

                <CommitmentField
                  icon="HomeOutlined"
                  question="¿Aceptas realizar visitas programadas por parte del refugio para verificar el bienestar del animal?"
                  name="visitas"
                />

                <CommitmentField
                  icon="VolunteerActivism"
                  question="¿Te comprometes a esterilizar al animal en el momento adecuado, según las indicaciones del refugio y el veterinario?"
                  name="esterilizacion"
                />

                <CommitmentField
                  icon="AddAPhotoOutlined"
                  question="¿Te comprometes a enviar fotografías periódicas del animal para dar seguimiento a su bienestar?"
                  name="fotos"
                />

              </div>
            </ExpandableSection>

            <ObservationsField
              title="Observaciones *"
              description="Comparte cualquier información adicional que consideres importante sobre tu experiencia con mascotas, tu situación actual en el hogar o cualquier detalle relevante para evaluar tu solicitud de adopción."
            />

            <ButtonForms text="ENVIAR SOLICITUD DE ADOPCIÓN" className="w-lg" />

          </div>
        </section>

        <CambioSection />
        <Footer />
      </div>
    </>
  );
}
