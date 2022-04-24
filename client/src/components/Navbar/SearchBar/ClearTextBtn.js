export default function ClearTextBtn({ onClick }) {
   return (
      <button
         type="button"
         onClick={onClick}
         className="absolute top-0 right-0 w-10 h-full flex items-center justify-center focus:outline-none"
      >
         <span className="material-icons text-2xl text-black dark:text-white h-full">
            close
         </span>
      </button>
   );
}
