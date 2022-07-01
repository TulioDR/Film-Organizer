export default function Option({ icon, text, changeType, movie }) {
   return (
      <li
         onClick={() => changeType(movie)}
         className="h-8 p-2 pl-2 flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-dark rounded-md"
      >
         <span className="material-icons">{icon}</span>
         <span className="ml-6">{text}</span>
      </li>
   );
}
