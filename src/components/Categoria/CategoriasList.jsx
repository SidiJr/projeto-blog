import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import Loading from "../Base/Loading";
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
    <section className="w-full my-4">
      {categorias?.length > 0 ? (
        categorias.map((categoria, index) => (
          <CategoriaItem key={index} nome={categoria.nome} />
        ))
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default CategoriasList;
