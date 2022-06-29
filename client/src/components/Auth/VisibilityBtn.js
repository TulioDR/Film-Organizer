export default function VisibilityBtn({ onClick, showPassword }) {
   return (
      <button
         type="button"
         onClick={onClick}
         className="material-icons absolute right-0 top-0 h-full w-10 text-white"
      >
         {showPassword ? "visibility_off" : "visibility"}
      </button>
   );
}
