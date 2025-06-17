import React from "react";
import PostCard from "./PostCard";
import Loading from "../Base/Loading";
import NoData from "../Base/NoData";

const PostList = ({ posts, setPostAtivo, setScrollPosition, isActive }) => {
  const handleClickPost = (id) => {
    setScrollPosition(window.scrollY);
    setPostAtivo(posts.find((post) => post.id === id));
  };

  return (
    <div>
      {posts?.length > 0 ? (
        posts.map((post, index) => (
          <PostCard
            key={index}
            titulo={post.titulo}
            conteudo={post.conteudo}
            imagem={post.imagem}
            data={post.data_criacao}
            usuario={post.usuario}
            id={post.id}
            onClick={handleClickPost}
            isActive={isActive}
          />
        ))
      ) : posts?.length === 0 ? (
        <NoData />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PostList;
