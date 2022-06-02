export default function ChevronIcon({ open }) {
   return (
      <div className="w-7 h-full cursor-pointer">
         <span
            className={`transform duration-200 grid place-items-center h-full ${
               open ? "rotate-180" : ""
            }`}
         >
            <span className="material-icons w-10">expand_more</span>
         </span>
      </div>
   );
}
