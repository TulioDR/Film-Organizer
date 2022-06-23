import { createContext, useContext, useState } from "react";

const SelectedPosterContext = createContext();

export default function useSelectedPosterContext() {
   return useContext(SelectedPosterContext);
}

export function SelectedPosterProvider({ children }) {
   const [selectedPoster, setSelectedPoster] = useState(null);
   const data = {
      selectedPoster,
      setSelectedPoster,
   };

   return (
      <SelectedPosterContext.Provider value={data}>
         {children}
      </SelectedPosterContext.Provider>
   );
}
