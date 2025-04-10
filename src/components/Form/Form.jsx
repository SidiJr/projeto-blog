import clsx from "clsx";
import { useForm } from "../../contexts/FormContext";
import BaseButton from "./Button";
import Input from "./Input";
import { Text, Title } from "../Constructor/Texts";

// Necessário passar um array de objetos com os fields e a função de submit
const Form = ({ fields, onSubmit, buttonText, title }) => {
  const { formData, updateFormData } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleSubmit = () => {
    //aqui vai ser enviado os dados para o back
  };

  console.log("formData: ", formData);

  return (
    //Envolve todo o componente

    <section className={clsx("w-full flex flex-col items-center h-screen")}>
      <Title title={title} />
      <form
        className="w-full flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        {/* Envolve os campos */}
        <div
          className={clsx(
            "flex flex-col border bg-white p-10 gap-4 rounded-md w-3/4"
          )}
        >
          {fields.map((field) => (
            // Envolve cada campo
            <div key={field.name}>
              <Input
                name={field.name}
                type={field.type}
                value={formData[field.name] || ""}
                onChange={handleChange}
                required={field.required}
                label={field.label}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <BaseButton text={"Cancelar"} />
          <BaseButton isForm text={buttonText ?? "Salvar"} />
        </div>
      </form>
    </section>
  );
};

export default Form;
