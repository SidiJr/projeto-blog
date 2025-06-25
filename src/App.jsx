import React from "react";
import Routes from "./routes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { FormProvider } from "./contexts/FormContext";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <DataProvider>
          <FormProvider>
            <Routes />
          </FormProvider>
        </DataProvider>
      </AuthProvider>
    </>
  );
}
export default App;
