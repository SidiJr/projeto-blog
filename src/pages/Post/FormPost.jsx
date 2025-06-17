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
    placeholder: "Selecione a imagem do post",
  },
  {
    name: "categoria_id",
    type: "search",
    label: "Categoria",
    required: true,
    placeholder: "Selecione a categoria do post",
    route: "categorias",
  },
];

const FormPost = () => {
  const user = JSON.parse(localStorage.getItem("@App:user"));

  const extraParams = () => {
    return { data_criacao: new Date(), usuario_id: user.id };
  };

  return <Form fields={fields} route="posts" extraParams={extraParams} />;
};

export default FormPost;
