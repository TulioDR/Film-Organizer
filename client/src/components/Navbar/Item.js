export default function Item({ icon, text, onClick }) {
   return (
      <li
         onClick={onClick}
         className="rounded-md cursor-pointer hover:bg-purple dark:hover:bg-gray-light flex items-center px-3 py-2"
      >
         <span className="material-icons mr-3">{icon}</span>
         <span>{text}</span>
      </li>
   );
}
