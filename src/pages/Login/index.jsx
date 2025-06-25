import { FaGlobe } from "react-icons/fa";
import {
  HighlightText,
  SecondaryText,
  Title,
} from "../../components/Base/Texts";
import FormLogin from "../../components/Form/FormLogin";
import FormUsuario from "../Usuario/FormUsuario";
import Button from "../../components/Base/Button";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../contexts/FormContext";

const Login = () => {
  const { showLogin, setShowLogin } = useAuth();
  const { setFormData } = useForm();

  const handleClick = () => {
    setShowLogin(!showLogin);
    setFormData({});
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-500 text-white flex items-center justify-center">
        <FaGlobe className="text-[12rem]" />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center px-20">
        <Title>{showLogin ? "Entre na sua conta" : "Crie sua conta"}</Title>

        {showLogin ? <FormLogin /> : <FormUsuario />}

        <HighlightText>
          {showLogin ? "Ainda não tem uma conta?" : "Já tem uma conta?"}
        </HighlightText>

        <Button
          type="button"
          onClick={handleClick}
          color="bg-blue-500 hover:bg-blue-700"
        >
          {showLogin ? "Crie uma agora!" : "Faça login!"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
