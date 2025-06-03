import React, { useEffect } from "react";
import { useRequest } from "../../hooks/useRequest";
import { SecondaryText } from "../../components/Constructor/Texts";
import Button from "../../components/Constructor/Button";
import { useBlog } from "../../contexts/BlogContext";

const CategoriesBar = () => {
  const { listar, data } = useRequest("categorias");

  const { setCategoriasData } = useBlog();

  useEffect(() => {
    const buscarDados = async () => {
      await listar();
    };

    buscarDados();
  }, [listar]);

  const handleFilterCategories = (id) => {
    setCategoriasData(id);
  };

  return (
    <section className="w-full bg-blue-400 px-4 py-3 flex flex-wrap gap-3 justify-center">
      {data.length > 0 &&
        data.map((item, index) => (
          <Button
            key={index}
            onClick={() => handleFilterCategories(item.id)}
            color="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
          >
            <SecondaryText secondarytext={item.nome} />
          </Button>
        ))}
    </section>
  );
};

export default CategoriesBar;
