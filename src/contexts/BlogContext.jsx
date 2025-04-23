import React, { createContext, useState, useContext } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogData, setBlogData] = useState({});
  const [categoriasData, setCategoriasData] = useState();

  return (
    <BlogContext.Provider
      value={{ blogData, setBlogData, categoriasData, setCategoriasData }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};
