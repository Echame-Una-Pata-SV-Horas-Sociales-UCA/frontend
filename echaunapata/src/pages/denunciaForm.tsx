import { useEffect, useState } from "react";
import Navbar from "../components/commons/navbar";
import Footer from "../components/commons/footer";
import CambioSection from "../components/adopta/CambioSection";
import ExpandableSection from "../components/forms/expandableSection";
import InputField from "../components/forms/inputField";
import CommitmentField from "../components/forms/commitmentField";
import ObservationsField from "../components/forms/observationsField";
import ButtonForms from "../components/commons/buttonForms";
import FileUploadField from "../components/forms/fileUploadField";
import { useDenunciaForm } from "../hooks/useDenunciaForm";
import { createReport } from "../service/reportService";
import { notifySuccess, notifyError } from "../components/utils/toastUtils";

export default function DenunciaForm() {

  const { values, photo, setPhoto, handleInputChange, handleRadioBoolean, handleRadioString, reset } = useDenunciaForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = async () => {
    if (!values.type) return notifyError("Seleccione el tipo de denuncia");
    if (!values.description) return notifyError("La descripción es obligatoria");
    if (!photo) return notifyError("Debe subir una evidencia (imagen)");

    setLoading(true);

    const formData = new FormData();

    formData.append("type", values.type);
    formData.append("description", values.description);
    formData.append("location", values.location);
    formData.append("locationUrl", values.locationUrl);
    formData.append("isAnonymous", String(values.isAnonymous));
    formData.append("contactPhone", values.contactPhone);
    formData.append("contactEmail", values.contactEmail);
    if (!values.isAnonymous) {
      formData.append("person.firstNames", values.firstNames || "");
      formData.append("person.lastNames", values.lastNames || "");
      formData.append("person.email", values.contactEmail || "");
      formData.append("person.phoneNumber", values.contactPhone || "");
      formData.append("person.dui", values.dui || "");
      formData.append("person.address", values.address || "");
      formData.append("person.city", values.city || "");
    }
    formData.append("photo", photo);

    try {
      await createReport(formData);
      notifySuccess("Denuncia enviada con éxito");
      reset();
      setPhoto(null);
    } catch {
      notifyError("Error al enviar la denuncia");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar solid={true} />

      <div className="pt-28">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">

          {/* TITULO */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            FICHA DE DENUNCIA
          </h1>

          <p className="text-center text-gray-600 mb-10 text-lg sm:text-xl">
            (Maltrato/Emergencia)
          </p>

          <div className="gap-6 flex flex-col items-center w-full">

            {/* SECCIÓN 1 */}
            <ExpandableSection title="Datos de identificación y contacto del denunciante (opcional)">
              <CommitmentField
                icon="ErrorOutline"
                question="¿Deseás permanecer como denunciante anónimo?"
                name="isAnonymous"
                value={values.isAnonymous}
                onChange={handleRadioBoolean}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  placeholder="Nombres"
                  icon="PersonOutlined"
                  name="firstNames"
                  value={values.firstNames}
                  onChange={handleInputChange}
                  disabled={values.isAnonymous}
                />

                <InputField
                  placeholder="DUI"
                  icon="BadgeOutlined"
                  name="dui"
                  value={values.dui}
                  onChange={handleInputChange}
                  disabled={values.isAnonymous}
                />
              </div>
            </ExpandableSection>

            {/* SECCIÓN 2 */}
            <ExpandableSection title="Contacto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  placeholder="Correo electrónico"
                  icon="Email"
                  name="contactEmail"
                  value={values.contactEmail}
                  onChange={handleInputChange}
                />

                <InputField
                  placeholder="Teléfono"
                  icon="CallOutlined"
                  name="contactPhone"
                  value={values.contactPhone}
                  onChange={handleInputChange}
                />
              </div>
            </ExpandableSection>

            {/* SECCIÓN 3 */}
            <ExpandableSection title="Tipo de denuncia">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 gap-4 sm:gap-0">

                <p className="text-gray-800 font-medium">Tipo de denuncia</p>

                <div className="flex gap-8 sm:gap-10">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="maltrato"
                      checked={values.type === "maltrato"}
                      onChange={handleRadioString}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">Maltrato</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="emergencia"
                      checked={values.type === "emergencia"}
                      onChange={handleRadioString}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">Emergencia</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  placeholder="Dirección"
                  icon="MapOutlined"
                  name="location"
                  value={values.location}
                  onChange={handleInputChange}
                />

                <InputField
                  placeholder="Link de la dirección"
                  icon="LinkOutlined"
                  name="locationUrl"
                  value={values.locationUrl}
                  onChange={handleInputChange}
                />
              </div>
            </ExpandableSection>

            {/* SECCIÓN 4 */}
            <ExpandableSection title="Evidencia">
              <FileUploadField onFileSelect={setPhoto} file={photo} />

              {photo && (
                <p className="text-sm text-gray-600 mt-2">
                  Archivo seleccionado:{" "}
                  <span className="font-semibold">{photo.name}</span>
                </p>
              )}

              <ObservationsField
                title="Descripción *"
                description="Describe la situación con detalle."
                name="description"
                value={values.description}
                onChange={handleInputChange}
              />
            </ExpandableSection>

            <ButtonForms
              text={loading ? "ENVIANDO..." : "ENVIAR DENUNCIA"}
              disabled={loading}
              className="w-full sm:w-80"
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
