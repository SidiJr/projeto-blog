import React from "react";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";
import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
export default App;
