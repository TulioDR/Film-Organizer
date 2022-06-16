export default function ClearTextBtn({ onClick }) {
   return (
      <button
         type="button"
         onClick={onClick}
         className="absolute top-0 right-0 w-10 h-10 focus:outline-none flex justify-center"
      >
         <span className="material-icons text-2xl flex items-center h-full">
            close
         </span>
      </button>
   );
}
