import { createContext, useContext, useEffect, useState } from "react";
import useMobileSearch from "../hooks/useMobileSearch";
import useSearch from "../hooks/useSearch";
import useSearchInput from "../hooks/useSearchInput";

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

   const [showMobileSearch, openMobileSearch, closeMobileSearch] =
      useMobileSearch();

   const [
      inputValue,
      openFounded,
      founded,
      showDeleteTextBtn,
      handleInputChange,
      clearInput,
      handleInputFocus,
      handleInputBlur,
      closeSearch,
      changeFoundedType,
   ] = useSearchInput({ closeMobileSearch });

   const [getMedia, handleSubmit] = useSearch({
      isMovie,
      inputValue,
      closeSearch,
   });

   const data = {
      isMovie,
      setIsMovie,
      showMobileSearch,
      openMobileSearch,
      closeMobileSearch,
      inputValue,
      openFounded,
      founded,
      showDeleteTextBtn,
      handleInputChange,
      clearInput,
      handleInputFocus,
      handleInputBlur,
      closeSearch,
      changeFoundedType,
      getMedia,
      handleSubmit,
   };

   return (
      <ValueContext.Provider value={data}>{children}</ValueContext.Provider>
   );
}
