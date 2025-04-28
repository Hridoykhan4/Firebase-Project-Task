import { useEffect, useState } from "react";
import WatchesContext from "../contexts/WatchesContext";

const WatchesProvider = ({ children }) => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const loadWatches = async () => {
      try {
        const res = await fetch(`/gadgets.json`);
        const data = await res.json();
        setWatches(data);
      } catch (err) {
        console.log(err);
      }
    };

    loadWatches();
  }, []);

  return (
    <WatchesContext.Provider value={{ watches, setWatches }}>
      {children}
    </WatchesContext.Provider>
  );
};

export default WatchesProvider;
