import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import Input from "./Input";
import Button from "../Base/Button";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useUpdateData } from "../../hooks/useUpdateData";
import clsx from "clsx";

const Form = ({ fields, route, onSuccess, extraParams, redirect }) => {
  const { id } = useParams();
  const { formData, updateFormData, setFormData } = useForm();
  const method = id ? "put" : "post";
  const url = id ? `${route}/${id}` : route;
  const navigate = useNavigate();
  const { fetchAndUpdateData } = useUpdateData();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`${route}/${id}`);
        if (response?.data?.data) {
          const data = response.data.data;

          fields.forEach((field) => {
            updateFormData(field.name, data[field.name]);
          });
        }
      } catch (error) {
        toast.error(
          error.response.data.message ?? "Erro ao carregar dados para edição"
        );
        navigate("/");
      }
    }

    if (id) {
      fetchData();
    } else {
      setFormData({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e, customChange) => {
    if (e === null) {
      updateFormData(customChange.name, customChange.id);
      return;
    }

    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const extras = extraParams && !id ? extraParams() : {};
      // const hasFile = Object.values(formData).some(
      //   (value) => value instanceof File
      // );

      const hasFile = formData?.imagem;

      let response;

      if (hasFile) {
        const formDataToSend = new FormData();
        Object.entries({ ...formData, ...extras }).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });

        response = await api[method](url, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        const dataToSend = { ...formData, ...extras };
        response = await api[method](url, dataToSend);
      }

      if ([200, 201].includes(response?.data?.status)) {
        toast.success(response?.data?.message || "Ação realizada com sucesso!");
        fetchAndUpdateData(route, {});
        setFormData({});

        if (onSuccess) onSuccess();

        navigate(redirect ?? "/");
      } else {
        toast.error(response?.data?.message || "Ocorreu um erro inesperado.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Ocorreu um erro inesperado."
      );
    }
  };

  return (
    <section className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {fields.map((field) => (
          <div key={field.name} className="w-full">
            <Input
              name={field.name}
              type={field.type}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              label={field.label}
              placeholder={field.placeholder}
              id={field.name}
              route={field.route}
            />
          </div>
        ))}

        <div className="flex justify-center">
          <Button
            isForm
            color={clsx(
              id
                ? "bg-blue-500 hover:bg-blue-700"
                : "bg-green-500 hover:bg-green-700"
            )}
          >
            {id ? "Atualizar" : "Salvar"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
