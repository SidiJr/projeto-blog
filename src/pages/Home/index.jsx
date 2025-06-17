import Section from "../../components/Base/Section";
import Sidebar from "../../components/Base/Sidebar";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/Base/Button";
import FormPost from "../Post/FormPost";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../contexts/ModalContext";
import InfoUsuario from "../../components/Usuario/InfoUsuario";
import { useInitialData } from "../../hooks/useInitialData";
import { useData } from "../../contexts/DataContext";
import PostList from "../../components/Post/PostList";
import CategoriaList from "../../components/Categoria/CategoriaList";
import { useEffect, useState } from "react";
import { useUpdateData } from "../../hooks/useUpdateData";

const Home = () => {
  const { user, handleLogout } = useAuth();
  const { setIsOpen } = useModal();
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);
  const routes = [{ route: "posts" }, { route: "categorias" }];
  const { data } = useData();
  useInitialData(routes);
  const { fetchAndUpdateData } = useUpdateData();

  useEffect(() => {
    if (categoriaAtiva) {
      fetchAndUpdateData("posts", {categoriaId: categoriaAtiva});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriaAtiva]);

  const handleClickCategoria = (id) => {
    setCategoriaAtiva(id);
  };

  return (
    <main className="flex justify-center w-full min-h-screen">
      {/* Sidebar esquerda */}
      <Sidebar>
        <div className="flex flex-col items-center">
          <InfoUsuario nome={user?.nome} size="xl" />
          <CategoriaList
            categorias={data?.categorias}
            onClickCategoria={handleClickCategoria}
            categoriaAtiva={categoriaAtiva}
          />
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </Sidebar>

      {/* Sessão central */}
      <Section>
        <div className="flex justify-center">
          <Button onClick={() => setIsOpen(true)}>Novo Post</Button>
        </div>
        <PostList posts={data?.posts} />
      </Section>

      {/* Sidebar direita */}
      <Sidebar></Sidebar>

      {/* Componente de modal */}
      <Modal title="Novo Post">
        <FormPost />
      </Modal>
    </main>
  );
};
export default Home;
