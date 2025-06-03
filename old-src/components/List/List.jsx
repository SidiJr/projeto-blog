import ListItem from "./ListItem";
import { useEffect } from "react";
import Button from "../Constructor/Button";
import { useRequest } from "../../hooks/useRequest";

const List = ({ type, fields, extraParams }) => {
  const { listar, data, deletar } = useRequest(type);

  useEffect(() => {
    const buscarDados = async () => {
      await listar();
    };

    buscarDados();
  }, [listar]);

  const handleDelete = async (id) => {
    await deletar(id);
  };

  return (
    <section className="w-full flex flex-col items-center bg-gray-100 min-h-screen">
      <div className="w-full flex flex-col items-center gap-4 py-4">
        <Button href={`${type}/form`} color={"bg-emerald-500 hover:bg-emerald-700"}>Incluir</Button>

        <div className="w-full sm:w-3/4 bg-white p-6 r shadow-md rounded-2xl">
          {/* Cabeçalho */}
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4 font-semibold text-neutral-700 mb-2 border-b pb-2">
            {fields.map((key, index) => (
              <div key={key} className="truncate capitalize flex justify-center">
                {extraParams?.[index] ? extraParams[index] : key}
              </div>
            ))}
            <div className="flex justify-center">Ações</div>
          </div>

          {/* Itens */}
          <div className="flex flex-col gap-2">
            {data.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                fields={fields}
                type={type}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
