import Form from "../../components/Form/Form";

const fields = [
  {
    name: "titulo",
    type: "text",
    label: "Título",
    required: true,
    placeholder: "Digite um título",
  },
  {
    name: "conteudo",
    type: "textarea",
    label: "Conteúdo",
    required: true,
    placeholder: "Escreva o conteúdo do post",
  },
  {
    name: "imagem",
    type: "file",
    label: "Imagem",
    required: true,
    placeholder: "Selecione a imagem do post",
  },
  {
    name: "categoria",
    type: "select",
    label: "Categoria",
    required: true,
    placeholder: "Selecione a categoria do post",
  }
  // tem o usuario e a data, ver como colocar
];

const FormPost = () => {
  return <Form fields={fields} route="/posts" />;
};

export default FormPost;
