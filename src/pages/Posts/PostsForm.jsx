import React from "react";
import { FormProvider } from "../../contexts/FormContext";
import Form from "../../components/Form/Form";

const PostsForm = () => {
  const fields = [
    {
      name: "titulo",
      type: "text",
      label: "Título",
      required: true,
    },
    {
      name: "conteudo",
      type: "text",
      label: "Conteúdo",
      required: true,
    },
  ];

  return (
    <FormProvider>
      <Form fields={fields} title={"Post"} />
    </FormProvider>
  );
};

export default PostsForm;
