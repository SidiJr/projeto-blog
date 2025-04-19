import React from "react";
import { FormProvider } from "../../contexts/FormContext";
import Form from "../../components/Form/Form";

const CategoriasForm= () => {
  const fields = [
    {
      name: "categoria",
      type: "text",
      label: "Categoria",
      required: true,
    },
    {
      name: "descricao",
      type: "text",
      label: "Descrição",
      required: true,
    },
  ];

  return (
    <FormProvider>
      <Form fields={fields} title={"Post"} />
    </FormProvider>
  );
};

export default CategoriasForm;
