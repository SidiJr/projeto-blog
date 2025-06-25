import { useForm } from "../../contexts/FormContext";
import Input from "./Input";
import Button from "../Base/Button";
import { useAuth } from "../../contexts/AuthContext";

const fields = [
  {
    name: "email",
    type: "text",
    label: "E-mail",
    required: true,
    placeholder: "Digite seu e-mail",
  },
  {
    name: "senha",
    type: "password",
    label: "Senha",
    required: true,
    placeholder: "Digite sua senha",
  },
];

const FormLogin = () => {
  const { formData, updateFormData, setFormData } = useForm();
  const { handleLogin } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = async (e) => {
    const response = await handleLogin(e, formData);
    if (response === "success") {
      setFormData({});
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
            />
          </div>
        ))}

        <div className="flex justify-center">
          <Button isForm color="bg-blue-500 hover:bg-blue-700">
            Entrar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default FormLogin;
