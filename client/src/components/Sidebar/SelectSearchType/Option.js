export default function Option({ isMovie, icon, text, changeType, movie }) {
   return (
      <li
         onClick={() => changeType(movie)}
         className={`h-9 pl-7 md:pl-0 md:p-2 flex items-center cursor-pointer md:hover:bg-blue-200 rounded-md ${
            isMovie === movie
               ? "cursor-pointer"
               : "cursor-pointer md:hover:bg-blue-200 md:dark:hover:bg-gray-light"
         }`}
      >
         <span className="material-icons mx-2">{icon}</span>
         <span className="ml-2">{text}</span>
      </li>
   );
}
