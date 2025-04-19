import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Constructor/Navbar";
import Footer from "./components/Constructor/Footer";
import PostsList from "./pages/Posts/PostsList";
import PostsForm from "./pages/Posts/PostsForm";
import CategoriasForm from "./pages/categorias/CategoriasForm";
import CategoriasList from "./pages/categorias/CategoriasList";
import AutoresForm from "./pages/autores/AutoresForm";
import AutoresList from "./pages/autores/AutoresList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<CategoriasList />} />
        <Route path="/categorias/form" element={<CategoriasForm />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/form" element={<PostsForm />} />
        <Route path="/autores" element={<AutoresList />} />
        <Route path="/autores/form" element={<AutoresForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
