import { useHistory } from "react-router-dom";
import AnimatedButton from "../AnimatedButton";

export default function Message() {
   const history = useHistory();
   const goLogin = () => {
      history.push("/auth/login");
   };
   return (
      <div className="flex flex-col items-center justify-center media-details-height">
         <span className="material-icons text-9xl">format_list_bulleted</span>
         <div className="text-3xl mb-4 text-center">
            Don't miss the oportunity to create your own Lists
         </div>
         <div className="text-lg text-center">
            Log in to save the Movies and Shows as you need
         </div>
         <AnimatedButton onClick={goLogin}>
            <span className="material-icons mr-3">login</span>
            <span>LOG IN</span>
         </AnimatedButton>
      </div>
   );
}
