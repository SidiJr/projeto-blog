import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Minha Empresa. Todos os direitos reservados.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">
            Facebook
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">
            Twitter
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
