import Form from "../../components/Form/Form";
import { useAuth } from "../../contexts/AuthContext";

const fields = [
  {
    name: "nome",
    type: "text",
    label: "Nome",
    required: true,
    placeholder: "Digite seu primeiro nome",
  },
  {
    name: "sobrenome",
    type: "text",
    label: "Sobrenome",
    required: true,
    placeholder: "Digite seu sobrenome",
  },
  {
    name: "email",
    type: "email",
    label: "E-mail",
    required: true,
    placeholder: "Digite seu e-mail",
  },
  {
    name: "senha",
    type: "password",
    label: "Senha",
    required: true,
    placeholder: "Defina uma senha",
  },
];

const FormUsuario = () => {
  const { setShowLogin } = useAuth();
  return (
    <Form
      fields={fields}
      route="/usuarios"
      onSuccess={() => setShowLogin(true)}
    />
  );
};

export default FormUsuario;
