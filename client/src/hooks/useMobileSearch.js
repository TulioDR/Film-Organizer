import { useState } from "react";

export default function useMobileSearch() {
   const [showMobileSearch, setShowMobileSearch] = useState(false);
   const openMobileSearch = () => {
      setShowMobileSearch(true);
      document.body.style.overflow = "hidden";
   };
   const closeMobileSearch = () => {
      setShowMobileSearch(false);
      document.body.style.overflow = "auto";
   };
   return [showMobileSearch, openMobileSearch, closeMobileSearch];
}
