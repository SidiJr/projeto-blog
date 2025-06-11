import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useForm = () => {
  return useContext(FormContext);
};
