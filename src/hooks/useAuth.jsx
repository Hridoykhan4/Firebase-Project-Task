import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
