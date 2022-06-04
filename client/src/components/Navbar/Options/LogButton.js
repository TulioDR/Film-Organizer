export default function LogButton({ onClick, text }) {
   return (
      <button
         onClick={onClick}
         className="bg-gray-200 dark:bg-gray-dark text-black dark:text-white px-4 py-2 focus:outline-none transition-colors duration-200"
      >
         {text}
      </button>
   );
}
