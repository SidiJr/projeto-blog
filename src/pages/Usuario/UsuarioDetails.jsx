import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../Post/PostCard"; // Assumindo que você tem este componente
import PostList from "../Post/PostList";

const UsuarioDetails = () => {
  const { id } = useParams();

  return <PostList usuarioId={id}/>;
};

export default UsuarioDetails;
