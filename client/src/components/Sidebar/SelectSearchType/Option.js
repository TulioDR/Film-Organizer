export default function Option({ isMovie, icon, text, changeType, movie }) {
   return (
      <li
         onClick={() => changeType(movie)}
         className={`h-10 pl-7 md:pl-0 md:p-2 flex items-center ${
            isMovie === movie
               ? "pointer-events-none bg-purple dark:bg-gray-light"
               : "cursor-pointer md:hover:bg-purple md:dark:hover:bg-gray-light"
         }`}
      >
         <span className="material-icons mx-2">{icon}</span>
         <span className="ml-2">{text}</span>
      </li>
   );
}
