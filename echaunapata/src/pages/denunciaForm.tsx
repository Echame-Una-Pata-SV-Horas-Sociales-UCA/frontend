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
import FileUploadField from "../components/forms/fileUploadField";

export default function DenunciaForm() {

  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar solid={true} />

      <div className="pt-28">
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12">

          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            FICHA DE DENUNCIA
          </h1>

          <p className="text-center text-gray-600 mb-10 text-2xl">
            (Maltrato/Emergencia)
          </p>

          <div className="gap-4 flex flex-col items-center">


            {/* IDENTIFICACIÓN OPCIONAL */}
            <ExpandableSection title="Datos de identificación y contacto del denunciante (opcional)">
              
              <CommitmentField
                icon="ErrorOutline"
                question="¿Deseás permanecer como denunciante anónimo?"
                name="anonimo"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField placeholder="Nombres" icon="PersonOutlined" />
                <InputField placeholder="DUI" icon="BadgeOutlined" />
              </div>

            </ExpandableSection>


            {/* CONTACTO */}
            <ExpandableSection title="Contacto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField placeholder="Correo electrónico" icon="Email" />
                <InputField placeholder="Teléfono" icon="CallOutlined" />
              </div>
            </ExpandableSection>


<ExpandableSection title="Tipo de denuncia">
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 ">

  <div className="w-full flex items-center justify-between py-4">

    <p className="text-gray-800 font-medium">Tipo de denuncia</p>

    <div className="flex items-center gap-10">

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="tipoDenuncia"
          value="maltrato"
          className="w-4 h-4"
        />
        <span className="text-gray-700">Maltrato</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="tipoDenuncia"
          value="emergencia"
          className="w-4 h-4"
        />
        <span className="text-gray-700">Emergencia</span>
      </label>

    </div>

        </div>
          <InputField placeholder="Dirección" icon="MapOutlined" />
          <InputField placeholder="Link de la dirección" icon="LinkOutlined" />

      </div>
</ExpandableSection>

           <ExpandableSection title="Evidencia">
  
          <FileUploadField onFileSelect={(file) => console.log("Archivo:", file)} />

          <ObservationsField
            title="Descripción *"
            description="Comparte cualquier información adicional que consideres importante sobre tu denuncia, la situación actual o cualquier detalle relevante."
          />
            </ExpandableSection>
            {/* BOTÓN (CORREGIDO) */}
            <ButtonForms 
              text="ENVIAR DENUNCIA" 
              className="w-lg" 
            />

          </div>
        </section>

        <CambioSection />
        <Footer />
      </div>
    </>
  );
}
 