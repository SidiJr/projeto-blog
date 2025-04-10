import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">
          <a href="/">Logo</a>
        </div>
        {/* <div className="space-x-6">
          <a href="/" className="text-white hover:text-blue-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            Teste
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            Teste
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            Teste
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
