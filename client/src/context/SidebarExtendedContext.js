import { createContext, useContext, useState } from "react";

const SidebarExtendedContext = createContext();

export default function useSidebarExtendedContext() {
   return useContext(SidebarExtendedContext);
}

export function SidebarExtendedProvider({ children }) {
   const [sidebarExtended, setSidebarExtended] = useState(true);
   const toggleSidebarExtended = () => {
      setSidebarExtended(!sidebarExtended);
   };

   const [sidebarRevealed, setSidebarRevealed] = useState(false);
   const toggleSidebarRevealed = () => {
      setSidebarRevealed(!sidebarRevealed);
   };

   const closeSidebarMobile = () => {
      setSidebarRevealed(false);
   };

   const data = {
      sidebarExtended,
      toggleSidebarExtended,
      sidebarRevealed,
      toggleSidebarRevealed,
      closeSidebarMobile,
   };
   return (
      <SidebarExtendedContext.Provider value={data}>
         {children}
      </SidebarExtendedContext.Provider>
   );
}
