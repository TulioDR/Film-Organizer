export default function Option({ icon, text, changeType, movie }) {
   return (
      <li
         onClick={() => changeType(movie)}
         className="h-9 p-2 pl-3 flex items-center cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-400 rounded-md"
      >
         <span className="material-icons">{icon}</span>
         <span className="ml-6">{text}</span>
      </li>
   );
}
