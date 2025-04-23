import { toast } from "react-toastify";

export const triggerToast = (response) => {
  if (response?.data?.message && response?.data?.data) {
    toast.success(response.data.message);
  } else if (response?.data?.message && !response?.data?.data) {
    toast.error(response.data.message);
  } else {
    toast.error("Ocorreu um erro inesperado.");
  }
};
