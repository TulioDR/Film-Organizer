export default function ThemeButton({ onClick, colorTheme }) {
   return (
      <button
         onClick={onClick}
         className="focus:outline-none transition-colors duration-200 bg-gray-200 dark:bg-gray-dark rounded-full h-10 w-10 mr-2"
      >
         <span className="material-icons text-2xl flex items-center justify-center">
            {colorTheme === "dark" ? "dark_mode" : "light_mode"}
         </span>
      </button>
   );
}
