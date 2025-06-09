import { useParams } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import Input from "./Input";
import Button from "../Base/Button";
import axios from "axios";
import api from "../../services/api";
import { toast } from "react-toastify";

const Form = ({ fields, route, config }) => {
  const { id } = useParams();
  const { formData, updateFormData } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api
    .post()
    .them()
    .catch()
  };

  console.log(formData);
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
              id={id}
            />
          </div>
        ))}

        <div className="flex justify-center">
          <Button isForm>
            {config.buttonText
              ? config.buttonText
              : id
                ? "Atualizar"
                : "Salvar"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
