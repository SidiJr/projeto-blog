import React from "react";
import { FaUserCircle } from "react-icons/fa";

const InfoUsuario = ({ nome }) => {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <FaUserCircle className="text-2xl text-gray-500" />
      <span className="font-medium">{nome}</span>
    </div>
  );
};

export default InfoUsuario;
