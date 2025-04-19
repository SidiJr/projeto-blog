import Button from "./Button";
import { Title } from "./Texts";

const Container = ({ type, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-80">
      <div className="flex items-center mb-4">
        {/* Renderiza o ícone passado dinamicamente */}
        {Icon && <Icon size={24} />}
        <Title title={type} />
      </div>
      <div className="flex flex-col gap-4">
        <Button href={`${type}`}>Listar {type}</Button>
        <Button href={`${type}/form`}>Cadastrar {type}</Button>
      </div>
    </div>
  );
};

export default Container;
