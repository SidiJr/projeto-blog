import React from "react";
import { useAuth } from "../../contexts/auth";
const Login = () => {
  const context = useAuth();
  console.log(context);
  function handleLogin() {
    context.Login();
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Login;
