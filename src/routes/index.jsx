import { useAuth } from "../contexts/auth";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
const Routes = () => {
  const { signed } = useAuth();

  console.log(signed)

  return signed ? <PrivateRoutes /> : <PublicRoutes />;
};
export default Routes;
