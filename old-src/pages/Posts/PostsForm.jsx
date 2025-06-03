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
      type: "textarea",
      label: "Conteúdo",
      required: true,
    },
    {
      name: "imagem",
      type: "file",
      label: "Imagem",
      required: false,
    },
    {
      name: "data_criacao",
      type: "date",
      label: "Data de Criação",
      required: true,
    },
    {
      name: "categorias",
      type: "select",
      label: "Categoria",
      required: true,
    },
    {
      name: "autores",
      type: "select",
      label: "Autor",
      required: true,
    },
  ];

  return (
    <FormProvider>
      <Form fields={fields} type={"posts"} />
    </FormProvider>
  );
};

export default PostsForm;
