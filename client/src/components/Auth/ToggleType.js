import { Link } from "react-router-dom";

export default function ToggleType({ isLogin }) {
   return (
      <div className="text-sm text-center">
         <span className="text-gray-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
         </span>
         <Link
            to={`/auth/${isLogin ? "signup" : "login"}`}
            className="text-blue-600 cursor-pointer"
         >
            {isLogin ? "Register!" : "Log In!"}
         </Link>
      </div>
   );
}
