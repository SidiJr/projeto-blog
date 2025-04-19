import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import { getAll } from "../../api/requests";
import Button from "../Constructor/Button";

const List = ({ type, fields }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getAll(type);
      setData(items);
    };

    fetchData();
  }, [type]);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="w-full flex flex-col items-center bg-red-100 min-h-screen">
      <div className="w-full flex flex-col items-center gap-4 py-4">
        <Button href={`${type}/form`}>Incluir</Button>

        <div className="w-3/4 bg-white p-6 rounded-md shadow-md">
          {/* Cabeçalho */}
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4 font-semibold text-neutral-700 mb-2 border-b pb-2">
            {fields.map((key) => (
              <div key={key} className="truncate capitalize">
                {key}
              </div>
            ))}
            <div>Ações</div>
          </div>

          {/* Itens */}
          <div className="flex flex-col gap-2">
            {data.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                fields={fields}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
