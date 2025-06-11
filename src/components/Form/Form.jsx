import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import Input from "./Input";
import Button from "../Base/Button";
import api from "../../services/api";
import { toast } from "react-toastify";

const Form = ({ fields, route, redirectTo, onSuccess }) => {
  const { id } = useParams();
  const { formData, updateFormData, setFormData } = useForm();
  const method = id ? "put" : "post";
  const url = id ? `${route}/${id}` : route;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api[method](url, formData);

      if ([200, 201].includes(response?.data?.status)) {
        toast.success(response?.data?.message || "Ação realizada com sucesso!");
        if (onSuccess) {
          onSuccess();
        }
        if (redirectTo) {
          navigate(redirectTo);
        }
        setFormData({});
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
    <section className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
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
            />
          </div>
        ))}

        <div className="flex justify-center">
          <Button isForm>{id ? "Atualizar" : "Salvar"}</Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
