export default function CardBack({ showInfo, children }) {
   return (
      <div
         className={`absolute bg-gray-200 dark:bg-gray top-0 h-full flex flex-col duration-200 transform ${
            showInfo ? "translate-x-0" : "translate-x-full"
         }`}
      >
         {children}
      </div>
   );
}
