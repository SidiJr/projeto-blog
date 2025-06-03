import React from "react";
import { FormProvider } from "../../contexts/FormContext";
import Form from "../../components/Form/Form";

const AutoresForm = () => {
  const fields = [
    {
      name: "nome",
      type: "text",
      label: "Nome",
      required: true,
    },
    {
      name: "email",
      type: "text",
      label: "E-mail",
      required: true,
    },
  ];

  return (
    <FormProvider>
      <Form fields={fields} type={"autores"} />
    </FormProvider>
  );
};

export default AutoresForm;
