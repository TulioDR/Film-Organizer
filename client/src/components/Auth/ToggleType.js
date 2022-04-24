export default function ToggleType({ toggle, isLogin }) {
   return (
      <div className="absolute bottom-2 left-3">
         <span className="text-gray-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
         </span>
         <span onClick={toggle} className="text-purple-900 cursor-pointer">
            {isLogin ? "Register!" : "Log In!"}
         </span>
      </div>
   );
}
