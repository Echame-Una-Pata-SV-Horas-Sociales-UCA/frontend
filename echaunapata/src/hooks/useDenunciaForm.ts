import { useState } from "react";

interface DenunciaFormErrors {
  dui?: string;
  firstNames?: string;
  contactEmail?: string;
  contactPhone?: string;
  type?: string;
  description?: string;
}

export const useDenunciaForm = () => {
  const [values, setValues] = useState({
    isAnonymous: false,
    firstNames: "",
    lastNames: "",
    dui: "",
    contactEmail: "",
    contactPhone: "",
    type: "",
    location: "",
    locationUrl: "",
    description: "",
    address: "",
    city: "",
  });

  const [photo, setPhoto] = useState<File | null>(null);

  const [errors, setErrors] = useState<DenunciaFormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioBoolean = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value === "true",
    }));
  };

  const handleRadioString = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors: DenunciaFormErrors = {};

    if (!values.isAnonymous) {
      // DUI
      if (!/^\d{8}-\d$/.test(values.dui)) {
        newErrors.dui = "Formato de DUI inválido (00000000-0)";
      }

      // Nombre
      if (!values.firstNames.trim()) {
        newErrors.firstNames = "El nombre es obligatorio";
      }
    }

    // Email
    if (
      values.contactEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.contactEmail)
    ) {
      newErrors.contactEmail = "Correo inválido";
    }

    // Teléfono
    if (values.contactPhone && !/^\d{8,12}$/.test(values.contactPhone)) {
      newErrors.contactPhone = "Debe contener solo números (8–12 dígitos)";
    }

    // Tipo de denuncia
    if (!values.type) {
      newErrors.type = "Debe seleccionar un tipo de denuncia";
    }

    // Descripción
    if (!values.description.trim()) {
      newErrors.description = "La descripción es obligatoria";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const reset = () => {
    setValues({
      isAnonymous: false,
      firstNames: "",
      lastNames: "",
      dui: "",
      contactEmail: "",
      contactPhone: "",
      type: "",
      location: "",
      locationUrl: "",
      description: "",
      address: "",
      city: "",
    });
    setErrors({});
    setPhoto(null);
  };

  return {
    values,
    errors,
    loading,
    setLoading,

    photo,
    setPhoto,

    handleInputChange,
    handleRadioBoolean,
    handleRadioString,

    validate,
    reset,
  };
};
