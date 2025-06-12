import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import Loading from "../../components/Base/Loading";
import CategoriaItem from "./CategoriaItem";

const CategoriasList = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    api
      .get("/categorias")
      .then((response) => {
        if (response.data.status === 200) {
          setCategorias(response.data.data);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  return (
    <div>
      {categorias?.length > 0 ? (
        categorias.map((categoria, index) => <CategoriaItem />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CategoriasList;
