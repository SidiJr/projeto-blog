import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useAuth } from "../contexts/AuthContext";
const Routes = () => {
  const { signed } = useAuth();

  return signed ? <PrivateRoutes /> : <PublicRoutes />;
};
export default Routes;
