export default function EpCardContainer({ onClick, children }) {
   return (
      <article
         onClick={onClick}
         className="w-full rounded-xl p-4 h-96 md:h-80 flex flex-col bg-gray-200 dark:bg-gray shadow-material cursor-pointer"
      >
         {children}
      </article>
   );
}
