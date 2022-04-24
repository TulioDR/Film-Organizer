import { Link } from "react-router-dom";

export default function Message() {
   return (
      <div className="flex flex-col items-center mt-20">
         <span className="material-icons text-9xl">format_list_bulleted</span>
         <div className="text-3xl mb-4 text-center">
            Don't miss the oportunity to create your own Lists
         </div>
         <div className="text-lg text-center">
            Log in to save the Movies and Shows as you need
         </div>
         <Link
            to="/auth"
            className="px-8 py-3 mt-5 text-white bg-purple-800 hover:bg-purple-900 shadow-lg rounded-lg flex items-center"
         >
            <span className="material-icons mr-3">login</span> LOG IN
         </Link>
      </div>
   );
}
