import Section from "../../components/Base/Section";
import Sidebar from "../../components/Base/Sidebar";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/Base/Button";
import { useInitialData } from "../../hooks/useInitialData";
import { useData } from "../../contexts/DataContext";
import CategoriaList from "../../components/Categoria/CategoriaList";
import { useEffect, useState } from "react";
import { useUpdateData } from "../../hooks/useUpdateData";
import { FaGlobe, FaHome } from "react-icons/fa";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import InfoUsuario from "../Usuario/InfoUsuario";
import Chat from "../../components/Chat/Chat";

const Home = () => {
  const { user, handleLogout } = useAuth();
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);
  const { data } = useData();
  const { fetchAndUpdateData } = useUpdateData();
  const navigate = useNavigate();
  const location = useLocation();
  const { setFormData } = useForm();

  const routes = [{ route: "posts" }, { route: "categorias" }];
  useInitialData(routes);

  useEffect(() => {
    fetchAndUpdateData("posts", { categoriaId: categoriaAtiva });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriaAtiva]);

  const handleClickCategoria = (id) => {
    navigate("/");
    setCategoriaAtiva(id);
  };

  const handleClickLogout = () => {
    setFormData({});
    handleLogout();
    navigate("/");
  };

  const isInFormRoute = location.pathname.startsWith("/posts/form");
  const isInPostRoute =
    location.pathname.startsWith("/posts/") && !isInFormRoute;
  const isUserRoute = location.pathname.startsWith("/usuario");
  const isCategoriaRoute = location.pathname.startsWith("/categorias");

  useEffect(() => {
    if (isInFormRoute) {
      setCategoriaAtiva(null);
    }
  }, [isInFormRoute]);

  const handleCategoriaClick = (e) => {
    e.stopPropagation();
    navigate("/categorias");
  };

  return (
    <main className="flex justify-center w-full min-h-screen">
      <Sidebar>
        <div className="flex flex-col items-center">
          <div
            className="flex items-center gap-2 text-gray-700 cursor-pointer transition-colors duration-300 my-5 border-b border-gray-300 pb-4 w-full justify-center"
            onClick={() => navigate("/")}
          >
            <FaGlobe className="text-4xl" />
            <span className="font-semibold text-lg">Blog</span>
          </div>
          <div className="w-full flex justify-center">
            <InfoUsuario nome={user?.nome} size="xl" id={user?.id} />
          </div>
          {!isUserRoute && !isCategoriaRoute && (
            <CategoriaList
              categorias={data?.categorias}
              onClickCategoria={handleClickCategoria}
              categoriaAtiva={categoriaAtiva}
              isAdmin={false}
            />
          )}
          <div className=" border-gray-300 border-t w-full py-4 flex justify-center">
            <Button
              onClick={handleClickLogout}
              color="bg-red-500 hover:bg-red-700"
            >
              Logout
            </Button>
          </div>
        </div>
      </Sidebar>

      <Section>
        <div className="flex justify-center mb-4">
          {isInPostRoute || isInFormRoute ? (
            <Button onClick={() => navigate("/")}>
              <span className="flex items-center gap-1">
                <FaHome /> Home
              </span>
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/posts/form")}
              color="bg-green-500 hover:bg-green-700"
            >
              Novo Post
            </Button>
          )}
        </div>

        <Outlet />
      </Section>

      <Sidebar>
        <div className="flex justify-center mb-4">
          {user.role === "admin" && (
            <Button
              onClick={(e) => handleCategoriaClick(e)}
              color="bg-blue-500 hover:bg-blue-700"
            >
              Categorias
            </Button>
          )}
        </div>
        <div>
          <Chat />
        </div>
      </Sidebar>
    </main>
  );
};

export default Home;
