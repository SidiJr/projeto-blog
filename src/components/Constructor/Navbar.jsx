import { Book } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">
          <a href="/" className="hover:text-blue-300">
            <Book size={30} className="mr-2" />
          </a>
        </div>

        <div className="flex gap-4">
          <NavLink text="Home" href="/" />
          <NavLink text="Posts" href="/posts" />
          <NavLink text="Categorias" href="/categories" />
          <NavLink text="Autores" href="/autores" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavLink = ({ text, href }) => {
  return (
    <a href={href} className="text-white hover:text-blue-300">
      {text}
    </a>
  );
};
