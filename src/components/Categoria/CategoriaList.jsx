import Loading from "../Base/Loading";
import NoData from "../Base/NoData";
import CategoriaItem from "./CategoriaItem";

const CategoriaList = ({
  categorias,
  onClickCategoria,
  categoriaAtiva,
  isAdmin,
}) => {
  return (
    <section className="w-full my-4">
      {!isAdmin && (
        <CategoriaItem
          nome="Todos"
          id={null}
          onClickCategoria={onClickCategoria}
          isActive={categoriaAtiva === null}
        />
      )}
      {categorias?.length > 0 &&
        categorias.map((categoria, index) => (
          <CategoriaItem
            key={index}
            nome={categoria.nome}
            id={categoria.id}
            onClickCategoria={onClickCategoria}
            isActive={categoriaAtiva === categoria.id}
            isAdmin={isAdmin}
          />
        ))}
    </section>
  );
};

export default CategoriaList;
