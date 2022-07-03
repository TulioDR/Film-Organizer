export default function LogButton({ onClick, text, reverse }) {
   return (
      <button
         onClick={onClick}
         className={`px-4 py-2 h-10 focus:outline-none transition-colors duration-200 w-max ${
            reverse
               ? "bg-gray-dark dark:bg-gray-200 text-white dark:text-black"
               : "bg-gray-200 dark:bg-gray-dark text-black dark:text-white"
         }`}
      >
         {text}
      </button>
   );
}
