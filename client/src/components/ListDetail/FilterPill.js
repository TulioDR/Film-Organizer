export default function FilterPill({
   onClick,
   currentFilter,
   filter,
   children,
}) {
   return (
      <span
         onClick={onClick}
         className={`rounded-full py-1 px-5 border text-sm cursor-pointer ${
            currentFilter === filter
               ? "border-blue-400 bg-blue-400 dark:border-blue-600 dark:bg-blue-600"
               : "border-black dark:border-white"
         }`}
      >
         {children}
      </span>
   );
}
