import React from "react";
import Routes from "./routes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { FormProvider } from "./contexts/FormContext";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <ModalProvider>
          <FormProvider>
            <Routes />
          </FormProvider>
        </ModalProvider>
      </AuthProvider>
    </>
  );
}
export default App;
