import React from "react";
import Button from "../components/Constructor/Button";

function Home() {
  return (
    <main className="flex-grow bg-gray-100 flex min-h-screen">
      <div className="container mx-auto text-center grid grid-cols-2 max-h-48 mt-20">
        <div className="m-2 grid grid-rows-2 gap-3">
          <Button href="posts" children="Listar Posts" />
          <Button href="posts/form" children="Novo Post" />
        </div>
        <div className="m-2 grid grid-rows-2 gap-3">
          <Button href="categories" children="Listar Categorias" />
          <Button href="categories/form" children="Nova Categoria" />
        </div>
      </div>
    </main>
  );
}

export default Home;
