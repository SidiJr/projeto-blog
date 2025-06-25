import { clsx } from "clsx";
import React from "react";
import Button from "../Base/Button";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useData } from "../../contexts/DataContext";

const CategoriaItem = ({ nome, onClickCategoria, id, isActive, isAdmin }) => {
  const navigate = useNavigate();
  const { data, updateData } = useData();

  const handleDeleteCategoria = async (e) => {
    e.stopPropagation();
    api
      .delete(`categorias/${id}`)
      .then((response) => {
        if (response.data.status === 200) {
          toast.success(response.data.message);
          const updatedPosts =
            data.categorias?.filter((post) => post.id !== id) || [];
          updateData("categorias", updatedPosts);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message || "Erro ao buscar dados");
      });
  };

  const handleEditCategoria = (e) => {
    e.stopPropagation();
    navigate(`/categorias/form/${id}`);
  };

  return (
    <div
      className={clsx(
        "flex justify-center items-center",
        "border border-gray-300 rounded-md",
        "px-4 py-2",
        "cursor-pointer select-none",
        "transition duration-200 ease-in-out",
        "hover:shadow-lg hover:border-blue-400 hover:text-blue-600",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
        "bg-white text-gray-800",
        isActive && "!border-blue-500  !text-blue-700"
      )}
      onClick={() => onClickCategoria(id)}
    >
      <div className="flex gap-2">
        <p className="text-sm font-medium">{nome}</p>
        {isAdmin && (
          <div className="flex gap-2">
            <Button onClick={(e) => handleEditCategoria(e)} color="bg-blue-500 hover:bg-blue-700">
              <FaEdit />
            </Button>

            <Button onClick={(e) => handleDeleteCategoria(e)} color="bg-red-500 hover:bg-red-700">
              <FaTrash />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriaItem;
