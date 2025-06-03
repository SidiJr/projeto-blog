import React from "react";
import { FormProvider } from "../../contexts/FormContext";
import Form from "../../components/Form/Form";

const CategoriasForm = () => {
  const fields = [
    {
      name: "nome",
      type: "text",
      label: "Nome",
      required: true,
    },
    {
      name: "descricao",
      type: "textarea",
      label: "Descrição",
      required: true,
    },
  ];

  return (
    <FormProvider>
      <Form fields={fields} type={"categorias"} />
    </FormProvider>
  );
};

export default CategoriasForm;
