import { useContext } from "react";
import WatchesContext from "../contexts/WatchesContext";

const useGetWatch = () => {
  const allWatches = useContext(WatchesContext);
  return allWatches;
};

export default useGetWatch;
