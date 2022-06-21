export default function CardBack({ showInfo, children }) {
   return (
      <div
         className={`absolute bg-gray-200 dark:bg-gray-dark top-0 h-full flex flex-col duration-300 transform ease-in-out ${
            showInfo ? "translate-y-0" : "translate-y-full"
         }`}
      >
         {children}
      </div>
   );
}
