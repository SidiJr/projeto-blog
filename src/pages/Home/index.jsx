import React, { useEffect, useState } from "react";
import Section from "../../components/Base/Section";
import Sidebar from "../../components/Base/Sidebar";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import { toast } from 'react-toastify';

const Home = () => {
  const { Logout } = useAuth();
  const [posts, setPosts] = useState();

  async function handleLogout() {
    Logout();
  }

  useEffect(()=>{
    api
    .get("/categorias")
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      toast.error(error);
    });
  },[])

  return (
    <main className="flex justify-center w-full min-h-screen">
      <Sidebar></Sidebar>
      <Section></Section>
      <Sidebar></Sidebar>
    </main>
  );
};
export default Home;
