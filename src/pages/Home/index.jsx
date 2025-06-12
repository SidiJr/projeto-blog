import React, { useEffect, useState } from "react";
import Section from "../../components/Base/Section";
import Sidebar from "../../components/Base/Sidebar";
import api from "../../services/api";
import { toast } from "react-toastify";
import Loading from "../../components/Base/Loading";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/Base/Button";
import FormPost from "../Post/FormPost";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../contexts/ModalContext";
import CategoriasList from "../Categoria/CategoriasList";
import InfoUsuario from "../Usuario/InfoUsuario";
import Card from "../Post/Card";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { user, handleLogout } = useAuth();
  const { setIsOpen } = useModal();

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
          <CategoriasList />
        </div>
      </Sidebar>
      <Section>
        <div className="flex justify-center">
          <Button onClick={() => setIsOpen(true)}>Novo Post</Button>
        </div>
        {posts?.length > 0 ? (
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
      <Sidebar>
        <Button onClick={handleLogout}>Logout</Button>
      </Sidebar>
      <Modal title="Novo Post">
        <FormPost />
      </Modal>
    </main>
  );
};
export default Home;
