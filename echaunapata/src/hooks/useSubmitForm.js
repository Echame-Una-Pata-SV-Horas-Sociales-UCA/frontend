import { useState } from "react";

export const useSubmitForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (callback: () => Promise<any>) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await callback(); // ejecuta lo que tú pases como lógica de envío

      setSuccess(true); // si no falló, éxito
    } catch (err: any) {
      setError(err?.message || "Error al enviar el formulario");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const resetSubmitState = () => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  return {
    loading,
    success,
    error,
    submitForm,
    resetSubmitState,
  };
};
