import { useData } from "../contexts/DataContext";
import api from "../services/api";
import { toast } from "react-toastify";

export const useUpdateData = () => {
  const { updateData } = useData();

  const fetchAndUpdateData = (route, params) => {
    console.log("aqui", route, params);

    let url = route;

    if (params && Object.keys(params).length > 0) {
      url += "?" + new URLSearchParams(params).toString();
    }

    api
      .get(url)
      .then((response) => {
        if (response.data.status === 200) {
          updateData(route, response.data.data);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message || "Erro ao buscar dados");
      });
  };

  return { fetchAndUpdateData };
};
