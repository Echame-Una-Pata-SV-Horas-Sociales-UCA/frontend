import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import CambioSection from "../components/adopta/cambioSection";
import ExpandableSection from "../components/forms/expandableSection";
import InputField from "../components/forms/inputField";
import CommitmentField from "../components/forms/commitmentField";
import ObservationsField from "../components/forms/observationsField";
import ButtonForms from "../components/commons/buttonForms";


export default function AdoptionForm() {
  return (
    <>
      <Navbar solid={true} />

      <div className="pt-28">
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">

          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            FICHA DE ADOPCIÓN
          </h1>

          {/* animal NAME (mock) */}
          <p className="text-center text-gray-600 mb-10 text-2xl">
            Flecos
          </p>
      <div className="gap-4 flex flex-col">
          {/* EXPANDABLE FORM SECTION 1 */}
          <ExpandableSection title="Datos de identificación y contacto del solicitante">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <InputField placeholder="Nombres" icon="Person" />
              <InputField placeholder="Apellidos" icon="Person" />

              <InputField placeholder="Dirección" icon="Home" />
              <InputField placeholder="Ciudad" icon="Map" />

              <InputField placeholder="Correo electrónico" icon="Email" />
              <InputField placeholder="Teléfono" icon="Call" />

              <InputField placeholder="DUI" icon="Badge" />

            </div>
          </ExpandableSection>

          {/* EXPANDABLE FORM SECTION 2 */}
          <ExpandableSection title="Referencias personales">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <InputField placeholder="Nombres" icon="Person" />
              <InputField placeholder="Teléfono" icon="Call" />
              <InputField placeholder="Nombres" icon="Person" />
              <InputField placeholder="Teléfono" icon="Call" />
            </div>
          </ExpandableSection>

 {/* EXPANDABLE FORM SECTION 3 */}
          <ExpandableSection title="Veterinario (opcional)">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <InputField placeholder="Nombres" icon="Person" />
              <InputField placeholder="Teléfono" icon="Call" />
            </div>
          </ExpandableSection>

          
 {/* EXPANDABLE FORM SECTION 4 */}
          <ExpandableSection title="Compromisos">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-0">
               <CommitmentField
                icon="Home"
                question="¿Dispones de un hogar propio para vivir con tu mascota?"
                name="casaPropia"
              />

              <CommitmentField
                icon="Home"
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

        <ButtonForms text="ENVIAR SOLICITUD DE ADOPCIÓN" />
      
      </div>
        </section>

        <CambioSection />
        <Footer />
      </div>
    </>
  );
}
