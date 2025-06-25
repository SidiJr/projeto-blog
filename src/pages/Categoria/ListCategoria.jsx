import React from "react";
import { useData } from "../../contexts/DataContext";
import CategoriaList from "../../components/Categoria/CategoriaList";
import Button from "../../components/Base/Button";
import { useNavigate } from "react-router-dom";

const ListCategoria = () => {
  const { data } = useData();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center">
        <Button onClick={() => navigate("/categorias/form")} color="bg-green-500 hover:bg-green-700">Nova Categoria</Button>
      </div>
      <CategoriaList categorias={data?.categorias} isAdmin />
    </div>
  );
};

export default ListCategoria;
