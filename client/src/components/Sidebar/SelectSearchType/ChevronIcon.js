export default function ChevronIcon({ open }) {
   return (
      <div className="w-7 h-full cursor-pointer">
         <span
            className={`transform duration-200 grid place-items-center h-full ${
               open ? "rotate-180" : ""
            }`}
         >
            <span className="material-icons md:hidden">expand_more</span>
            <span className="material-icons hidden md:inline">
               chevron_right
            </span>
         </span>
      </div>
   );
}
