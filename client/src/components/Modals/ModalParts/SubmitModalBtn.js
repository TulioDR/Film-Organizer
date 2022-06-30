export default function SubmitModalBtn({ children, onClick, red }) {
   return (
      <button
         onClick={onClick}
         type="submit"
         className={`py-2 px-3 rounded-md ${
            red
               ? "bg-red-800 hover:bg-red-900 text-white"
               : "bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 hover:dark:bg-blue-700"
         }`}
      >
         {children}
      </button>
   );
}
