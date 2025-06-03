import React, { useEffect, useState } from "react";
import { SubTitle, Text } from "../../components/Constructor/Texts";
import Button from "../../components/Constructor/Button";

const BlogCard = ({ post }) => {
  const [file, setFile] = useState(null);
  const [resumo, setResumo] = useState(null);

  useEffect(() => {
    if (post.imagem) {
      setFile(`http://localhost:3000/uploads/${post.imagem}`);
    }
  }, [post.imagem]);

  useEffect(() => {
    if (post.conteudo) {
      const conteudoResumido =
        post.conteudo.split(" ").slice(0, 20).join(" ") + "...";
      setResumo(conteudoResumido);
    }
  }, [post.conteudo]);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full max-w-sm sm:max-w-md mx-auto flex flex-col gap-4 justify-between">
      {file && (
        <img
          src={file}
          alt={post.titulo}
          className="w-full h-40 sm:h-48 object-cover rounded-xl"
        />
      )}

      <div className="flex flex-col gap-2">
        <SubTitle subtitle={post.titulo} />
        <Text text={resumo} />
      </div>
      <div className="flex justify-center">
        <Button href={`/post/${post.id}`} color="bg-blue-600 p-4">Ler Mais</Button>
      </div>
    </div>
  );
};

export default BlogCard;
