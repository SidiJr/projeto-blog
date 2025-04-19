import React, { useMemo } from "react";
import Button from "./Button";
import { Title } from "./Texts";

const Container = ({ type, icon: Icon }) => {
  const TextType = useMemo(() => {
    if (!type) return "";
    return type.charAt(0).toUpperCase() + type.slice(1);
  }, [type]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-80">
      <div className="flex items-center mb-4">
        {/* Renderiza o ícone passado dinamicamente */}
        {Icon && <Icon size={24} />}
        <Title title={TextType} />
      </div>
      <div className="flex flex-col gap-4">
        <Button href={`${type}`}>Listar {TextType}</Button>
        <Button href={`${type}/form`}>Cadastrar {TextType}</Button>
      </div>
    </div>
  );
};

export default Container;
