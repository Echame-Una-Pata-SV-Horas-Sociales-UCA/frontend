import { useState } from "react";

export const useDenunciaForm = () => {
  const [values, setValues] = useState({
    firstNames: "",
    dui: "",
    contactEmail: "",
    contactPhone: "",
    type: "",
    location: "",
    locationUrl: "",
    description: "",
    isAnonymous: false,
  });

  const [errors, setErrors] = useState({
    dui: "",
    email: "",
    phone: "",
  });

  const [photo, setPhoto] = useState<File | null>(null);

  // -------- VALIDADORES --------

  const validateDui = (value: string) => {
    if (!value) return "";
    const regex = /^[0-9]{8}-[0-9]$/;
    return regex.test(value) ? "" : "Formato DUI inválido (00000000-0)";
  };

  const validateEmail = (value: string) => {
    if (!value) return "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value) ? "" : "Correo inválido";
  };

  const validatePhone = (value: string) => {
    if (!value) return "";
    const regex = /^[0-9]{8}$/;
    return regex.test(value) ? "" : "Debe contener 8 dígitos";
  };

  // -------- HANDLERS --------

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    if (name === "dui")
      setErrors((p) => ({ ...p, dui: validateDui(value) }));

    if (name === "contactEmail")
      setErrors((p) => ({ ...p, email: validateEmail(value) }));

    if (name === "contactPhone")
      setErrors((p) => ({ ...p, phone: validatePhone(value) }));
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

  const reset = () => {
    setValues({
      firstNames: "",
      dui: "",
      contactEmail: "",
      contactPhone: "",
      type: "",
      location: "",
      locationUrl: "",
      description: "",
      isAnonymous: false,
    });
    setPhoto(null);
    setErrors({
      dui: "",
      email: "",
      phone: "",
    });
  };

  return {
    values,
    errors,
    photo,
    setPhoto,
    handleInputChange,
    handleRadioBoolean,
    handleRadioString,
    reset,
  };
};
