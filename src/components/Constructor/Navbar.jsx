import { Book, Menu, X } from "lucide-react";
import React, { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          className="text-white text-xl font-semibold flex items-center gap-2 hover:text-blue-300"
        >
          <Book size={28} />
          Blog
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={clsx(
            "flex-col md:flex md:flex-row md:items-center gap-4 md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent px-4 md:px-0 py-4 md:py-0 z-10 transition-all",
            {
              hidden: !isOpen,
              flex: isOpen,
            }
          )}
        >
          <NavLink text="Home" href="/" />
          <NavLink text="Posts" href="/posts" />
          <NavLink text="Categorias" href="/categorias" />
          <NavLink text="Autores" href="/autores" />
          <NavLink text="Blog" href="/blog" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ text, href }) => (
  <a href={href} className="text-white hover:text-blue-300 text-lg">
    {text}
  </a>
);

export default Navbar;
