export default function CloseModalBtn({ onClick, children }) {
   return (
      <button
         type="button"
         onClick={onClick}
         className="py-2 px-3 rounded-md bg-gray-dark dark:bg-gray-200 text-white dark:text-black"
      >
         {children}
      </button>
   );
}
