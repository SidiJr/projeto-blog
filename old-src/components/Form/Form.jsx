import clsx from "clsx";
import { useForm } from "../../contexts/FormContext";
import Input from "./Input";
import { Title } from "../Constructor/Texts";
import { useRequest } from "../../hooks/useRequest";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Button from "../Constructor/Button";

const Form = ({ fields, type }) => {
  const { id } = useParams();
  const { formData, updateFormData } = useForm();
  const { criar, atualizar, buscarPorId } = useRequest(type);

  // Busca os dados iniciais quando for edição
  useEffect(() => {
    const buscarDadosPorId = async () => {
      if (id) {
        const data = await buscarPorId(id);

        if (data && typeof data === "object") {
          Object.keys(data).forEach((key) => {
            updateFormData(key, data[key]);
          });
        }
      }
    };

    buscarDadosPorId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Salva o que foi digitado
  const handleChange = (e) => {
    const { name, type, files, value } = e.target;

    if (type === "file") {
      updateFormData(name, files[0]);
    } else {
      updateFormData(name, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enviarDados = async () => {
      const formPayload = new FormData();

      for (const key in formData) {
        formPayload.append(key, formData[key]);
      }

      if (id) {
        await atualizar(id, formPayload, true);
      } else {
        await criar(formPayload, true);
      }
    };

    enviarDados();
  };

  return (
    <section className={clsx("w-full flex flex-col items-center min-h-screen bg-gray-100")}>
      <Title title={type} />
      <form
        className="w-full flex flex-col items-center pb-20"
        onSubmit={handleSubmit}
      >
        <div
          className={clsx(
            "flex flex-col bg-white rounded-2xl sm:shadow-md  p-10 gap-4  w-full sm:w-3/4 md:w-2/4"
          )}
        >
          {fields.map((field) => (
            <div key={field.name}>
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
            <Button
              color={
                id
                  ? "bg-blue-500 hover:bg-blue-700"
                  : "bg-emerald-500 hover:bg-emerald-700"
              }
              isForm
            >
              {id ? "Atualizar" : "Salvar"}
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
