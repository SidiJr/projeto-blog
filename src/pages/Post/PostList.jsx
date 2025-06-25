import { useEffect, useState } from "react";
import Loading from "../../components/Base/Loading";
import NoData from "../../components/Base/NoData";
import { useData } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

const PostList = ({ usuarioId }) => {
  const { data } = useData();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.posts) {
      if (usuarioId) {
        const usuarioPosts = data.posts.filter(
          (post) => Number(post.usuario.id) === Number(usuarioId)
        );
        setPosts(usuarioPosts);
      } else {
        setPosts(data.posts);
      }
    }
  }, [data.posts, usuarioId]);

  const handleClickPost = (id) => {
    navigate(`/posts/${id}`);
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
            dataCriacao={post.data_criacao}
            usuario={post.usuario}
            id={post.id}
            onClick={() => handleClickPost(post.id)}
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
