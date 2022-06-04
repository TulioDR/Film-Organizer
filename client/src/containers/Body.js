export default function Body({ children }) {
   return (
      <div className="min-h-screen transition-colors duration-200 bg-gray-200 dark:bg-gray-dark dark:text-white overflow-x-hidden">
         {children}
      </div>
   );
}
