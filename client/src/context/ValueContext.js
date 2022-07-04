import { createContext, useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
const ValueContext = createContext();

export default function useValueContext() {
   return useContext(ValueContext);
}

export function ValueProvider({ children }) {
   const { mediaType } = useParams();
   const [isMovie, setIsMovie] = useState(true);

   useEffect(() => {
      if (mediaType) {
         if (mediaType === "movie") setIsMovie(true);
         if (mediaType === "tv") setIsMovie(false);
      } else setIsMovie(true);
   }, [mediaType]);

   const toggleIsMovie = () => {
      setIsMovie(!isMovie);
   };

   const data = { isMovie, toggleIsMovie };

   return (
      <ValueContext.Provider value={data}>{children}</ValueContext.Provider>
   );
}
