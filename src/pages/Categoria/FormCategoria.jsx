import Form from "../../components/Form/Form";

const fields = [
  {
    name: "nome",
    type: "text",
    label: "Nome",
    required: true,
    placeholder: "Digite seu primeiro nome",
  },
  {
    name: "descricao",
    type: "text",
    label: "Descrição",
    required: true,
    placeholder: "Digite a descrição",
  }
];

const FormCategoria = () => {
  return (
    <Form
      fields={fields}
      route="categorias"
      redirect = "/categorias"
    />
  );
};

export default FormCategoria;
