import List from "../../components/List/List";

const ListLocacoes = () => {
  const fields = ["id", "nome"];

  return <List type="categorias" fields={fields} />;
};

export default ListLocacoes;
