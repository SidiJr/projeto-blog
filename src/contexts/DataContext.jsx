import React, { createContext, useContext, useState, useCallback } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const updateData = useCallback((key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);
