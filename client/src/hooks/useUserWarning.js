import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function useUserWarning() {
   const [showWarning, setShowWarning] = useState(false);
   const openWarning = () => {
      setShowWarning(true);
   };
   const closeWarning = () => {
      setShowWarning(false);
   };

   const history = useHistory();
   const goToLogin = () => history.push("/auth");

   return [showWarning, openWarning, closeWarning, goToLogin];
}
