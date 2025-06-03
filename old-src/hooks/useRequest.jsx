import { useCallback, useState } from "react";
import api from "../api/api";
import { triggerToast } from "../helpers/helpers";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useRequest(type) {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const listar = useCallback(
    async (params) => {
      try {
        const response = await api.get(`/${type}`, {
          params: { id: params },
        });
        setData(response.data);
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || "Erro ao buscar dados.");
      }
    },
    [type]
  );

  const criar = useCallback(
    async (item, isMultipart = false) => {
      try {
        const config = isMultipart
          ? { headers: { "Content-Type": "multipart/form-data" } }
          : {};

        const response = await api.post(`/${type}`, item, config);
        setData((prev) => [...prev, response.data]);
        triggerToast(response);
        navigate(`/${type}`);
      } catch (err) {
        console.error(err);
        toast.error(err.response?.data?.message || "Erro ao criar");
      }
    },
    [navigate, type]
  );

  const atualizar = useCallback(
    async (id, updatedItem, isMultipart = false) => {
      try {
        const config = isMultipart
          ? { headers: { "Content-Type": "multipart/form-data" } }
          : {};

        const response = await api.put(`/${type}/${id}`, updatedItem, config);
        setData((prev) =>
          prev.map((item) => (item.id === id ? response.data : item))
        );
        triggerToast(response);
        navigate(`/${type}`);
      } catch (err) {
        toast.error(err.response?.data?.message || "Erro ao atualizar");
      }
    },
    [navigate, type]
  );

  const deletar = useCallback(
    async (id) => {
      try {
        const response = await api.delete(`/${type}/${id}`);
        setData((prev) => prev.filter((item) => item.id !== id));
        triggerToast(response);
      } catch (err) {
        console.error(err);
        toast.error(err.response.data.message);
      }
    },
    [type]
  );

  const buscarPorId = useCallback(
    async (id) => {
      try {
        const response = await api.get(`/${type}/${id}`);
        return response.data;
      } catch (err) {
        console.error(err);
        toast.error(err.response.data.message);
      }
    },
    [type]
  );

  return {
    data,
    listar,
    criar,
    atualizar,
    deletar,
    buscarPorId,
  };
}
