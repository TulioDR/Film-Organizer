export default function LogButton({ onClick, text, reverse }) {
   return (
      <button
         onClick={onClick}
         className={`px-4 py-2 focus:outline-none transition-colors duration-200 ${
            reverse
               ? "bg-gray-dark dark:bg-gray-200 text-white dark:text-black"
               : "bg-gray-200 dark:bg-gray-dark text-black dark:text-white"
         }`}
      >
         {text}
      </button>
   );
}
