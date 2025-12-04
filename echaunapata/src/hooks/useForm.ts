import { useState } from "react";

export const useForm = <T extends Record<string, any>>(initForm: T) => {
  const [formValues, setFormValues] = useState<T>(initForm);

  const InputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormValues(initForm); // no {initForm}, solo initForm
  };

  return {
    ...formValues,
    formValues,
    InputChange,
    resetForm,
  };
};
