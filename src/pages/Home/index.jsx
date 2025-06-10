import React, { useEffect, useState } from "react";
import Section from "../../components/Base/Section";
import Sidebar from "../../components/Base/Sidebar";
import api from "../../services/api";
import { toast } from "react-toastify";
import Loading from "../../components/Base/Loading";
import Card from "../../components/Post/Card";
import InfoUsuario from "../../components/Usuario/InfoUsuario";
import { useAuth } from "../../contexts/AuthContext";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        if (response.data.status === 200) {
          setPosts(response.data.data);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  return (
    <main className="flex justify-center w-full min-h-screen">
      <Sidebar>
        <div className="flex flex-col items-center">
          <InfoUsuario nome={user?.nome} size="xl" />
        </div>
      </Sidebar>
      <Section>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card
              key={index}
              titulo={post.titulo}
              conteudo={post.conteudo}
              imagem={post.imagem}
              data={post.data_criacao}
              usuario={post.usuario}
            />
          ))
        ) : (
          <Loading />
        )}
      </Section>
      <Sidebar></Sidebar>
    </main>
  );
};
export default Home;
