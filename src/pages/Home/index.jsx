import React from "react";
import { useAuth } from "../../contexts/auth";
const Home = () => {
  const { Logout } = useAuth();

  async function handleLogout() {
    Logout();
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Home;
