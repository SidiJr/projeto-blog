import { useAuth } from "../../contexts/AuthContext";
import { FaGlobe } from "react-icons/fa";
import { SubTitle, Title } from "../../components/Base/Texts";
import Form from "../../components/Form/Form";

const Login = () => {
  const { Login } = useAuth();

  function handleLogin() {
    Login();
  }

  const fields = [
    {
      name: "email",
      type: "text",
      label: "E-mail",
      required: true,
    },
    {
      name: "senha",
      type: "password",
      label: "Senha",
      required: true,
    },
  ];

  const config = {
    buttonText: "Entrar",
  };

  return (
    <div className="flex h-screen">
      {/* Lado esquerdo - imagem ou destaque */}
      <div className="w-1/2 bg-blue-500 text-white flex items-center justify-center">
        <FaGlobe className="text-[12rem]" />
      </div>

      {/* Lado direito - conteúdo */}
      <div className="w-1/2 flex flex-col justify-center items-start px-20">
        <Title>Entre na sua conta</Title>
        <Form fields={fields} route="/login" config={config} />
      </div>
    </div>
  );
};

export default Login;
