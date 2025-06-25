import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FormPost from "../pages/Post/FormPost";
import PostList from "../pages/Post/PostList";
import SinglePost from "../pages/Post/SinglePost";
import UsuarioDetails from "../pages/Usuario/UsuarioDetails";
import FormCategoria from "../pages/Categoria/FormCategoria";
import ListCategoria from "../pages/Categoria/ListCategoria";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PostList />} />
          <Route path="posts/:id" element={<SinglePost />} />
          <Route path="posts/form" element={<FormPost />} />
          <Route path="posts/form/:id" element={<FormPost />} />
          <Route path="usuario/:id" element={<UsuarioDetails />} />
          <Route path="categorias" element={<ListCategoria />} />
          <Route path="categorias/form" element={<FormCategoria />} />
          <Route path="categorias/form/:id" element={<FormCategoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
