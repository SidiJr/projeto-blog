import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import PostCard from "./PostCard";
import NoData from "../../components/Base/NoData";

const SinglePost = () => {
  const { id } = useParams();
  const { data } = useData();

  const post = data.posts?.find((p) => p.id === Number(id));

  if (!post) {
    return <NoData />;
  }

  return (
    <PostCard
      titulo={post.titulo}
      conteudo={post.conteudo}
      imagem={post.imagem}
      dataCriacao={post.data_criacao}
      usuario={post.usuario}
      id={post.id}
      isActive
    />
  );
};

export default SinglePost;
