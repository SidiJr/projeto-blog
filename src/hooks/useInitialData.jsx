import { useEffect } from "react";
import { useData } from "../contexts/DataContext";
import api from "../services/api";
import { toast } from "react-toastify";

export const useInitialData = (routes = [], updateDataTrigger) => {
  const { updateData } = useData();

  useEffect(() => {
    const fetchData = (routeObj) => {
      let url = routeObj.route;

      if (routeObj.params && Object.keys(routeObj.params).length > 0) {
        url += "?" + new URLSearchParams(routeObj.params).toString();
      }

      api
        .get(url)
        .then((response) => {
          if (response.data.status === 200) {
            updateData(routeObj.route, response.data.data);
          } else {
            toast.error(response.data.message);
          }
        })
        .catch((error) => {
          toast.error(error.message || "Erro ao buscar dados");
        });
    };

    routes.forEach(fetchData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateDataTrigger]);
};
