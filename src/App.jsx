import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Constructor/Navbar";
import Footer from "./components/Constructor/Footer";
import CategoriesList from "./pages/Categories/CategoriesList";
import CategoriesForm from "./pages/Categories/CategoriesForm";
import PostsList from "./pages/Posts/PostsList";
import PostsForm from "./pages/Posts/PostsForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/categories/form" element={<CategoriesForm />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/form" element={<PostsForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
