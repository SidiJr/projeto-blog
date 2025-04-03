import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Constructor/Navbar";
import Footer from "./components/Constructor/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
