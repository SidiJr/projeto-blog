import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Navbar from "./components/Constructor/Navbar";
import Footer from "./components/Constructor/Footer";
import PostsList from "./pages/Posts/PostsList";
import PostsForm from "./pages/Posts/PostsForm";
import CategoriasForm from "./pages/categorias/CategoriasForm";
import CategoriasList from "./pages/Categorias/CategoriasList";
import AutoresForm from "./pages/autores/AutoresForm";
import AutoresList from "./pages/autores/AutoresList";
import BlogMain from "./pages/Blog/BlogMain";
import PostDetails from "./pages/Blog/PostDetails";
import { BlogProvider } from "./contexts/BlogContext";

function App() {
  return (
    <BlogProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogMain />} />

          <Route path="/post/:id" element={<PostDetails />} />
          {/* Categorias */}
          <Route path="/categorias" element={<CategoriasList />} />
          <Route path="/categorias/form" element={<CategoriasForm />} />
          <Route path="/categorias/form/:id" element={<CategoriasForm />} />
          {/* Posts */}
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/form" element={<PostsForm />} />
          <Route path="/posts/form/:id" element={<PostsForm />} />
          {/* Autores */}
          <Route path="/autores" element={<AutoresList />} />
          <Route path="/autores/form" element={<AutoresForm />} />
          <Route path="/autores/form/:id" element={<AutoresForm />} />
        </Routes>

        <ToastContainer />

        <Footer />
      </Router>
    </BlogProvider>
  );
}

export default App;
