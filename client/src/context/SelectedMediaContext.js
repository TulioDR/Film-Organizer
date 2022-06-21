import { createContext, useContext, useState } from "react";

const SelectedMediaContext = createContext();

export default function useSelectedMediaContext() {
   return useContext(SelectedMediaContext);
}

export function SelectedMediaProvider({ children }) {
   const [selectedMedia, setSelectedMedia] = useState(null);
   const data = {
      selectedMedia,
      setSelectedMedia,
   };

   return (
      <SelectedMediaContext.Provider value={data}>
         {children}
      </SelectedMediaContext.Provider>
   );
}
