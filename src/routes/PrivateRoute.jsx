import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user , loading} = useAuth(AuthContext);
  const {pathname} = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

  if (!user) {
    return <Navigate state={pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
