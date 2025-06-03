import React, { useEffect, useState } from "react";
import { Title, Text } from "../../components/Constructor/Texts";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import AutorInfo from "./AutorInfo";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { buscarPorId } = useRequest("posts");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const buscarDadosPorId = async () => {
      if (id) {
        const data = await buscarPorId(id);
        setPost(data);
      }
    };

    buscarDadosPorId();
  }, [id, buscarPorId]);

  useEffect(() => {
    if (post.imagem) {
      setFile(`http://localhost:3000/uploads/${post.imagem}`);
    }
  }, [post.imagem]);

  return (
    <main className="flex-grow min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <section className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-md mt-10">
        <Title title={post.titulo} />

        {file && (
          <img
            src={file}
            alt={post.titulo}
            className="w-full h-72 object-cover rounded-xl mt-10"
          />
        )}

        <div className="flex mb-10 justify-between">
          <AutorInfo autorId={post.autor_id} />
          <Text text={`Data de Publicação: ${post.data_criacao}`} />
        </div>

        <div>
          <Text text={post.conteudo} />
        </div>
      </section>
    </main>
  );
};

export default PostDetails;
