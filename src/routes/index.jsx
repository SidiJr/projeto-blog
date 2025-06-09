import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useAuth } from "../contexts/AuthContext";
const Routes = () => {
  const { signed } = useAuth();

  console.log(signed)

  return signed ? <PrivateRoutes /> : <PublicRoutes />;
  // return <PrivateRoutes />
};
export default Routes;
