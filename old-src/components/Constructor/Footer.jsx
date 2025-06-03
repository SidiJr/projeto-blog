import React from "react";
import { Text } from "./Texts";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 min-h-36 flex items-center">
      <div className="container mx-auto text-center">
        <Text text="&copy; 2025 Gerencie seu blog. Todos os direitos reservados."/>
      </div>
    </footer>
  );
};

export default Footer;
