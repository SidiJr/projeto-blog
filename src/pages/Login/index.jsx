import { FaGlobe } from "react-icons/fa";
import { Title } from "../../components/Base/Texts";
import FormLogin from "../../components/Form/FormLogin";

const Login = () => {

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-500 text-white flex items-center justify-center">
        <FaGlobe className="text-[12rem]" />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center px-20">
        <Title>Entre na sua conta</Title>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
