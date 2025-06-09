import React from "react";
import Routes from "./routes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { FormProvider } from "./contexts/FormContext";

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <FormProvider>
          <Routes />
        </FormProvider>
      </AuthProvider>
    </>
  );
}
export default App;
