import React, { useEffect, useState } from "react";
import Section from "../../components/Base/Section";
import Sidebar from "../../components/Base/Sidebar";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import { toast } from "react-toastify";
import Card from "../../components/Base/Card";
import Loading from "../../components/Base/Loading";

const Home = () => {
  const { Logout } = useAuth();
  const [posts, setPosts] = useState([]);

  // async function handleLogout() {
  //   Logout();
  // }

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

  console.log(posts);

  return (
    <main className="flex justify-center w-full min-h-screen">
      <Sidebar></Sidebar>
      <Section>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card
              key={index}
              titulo={post.titulo}
              conteudo={post.conteudo}
              imagem={post.imagem}
              data={post.data_criacao}
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
