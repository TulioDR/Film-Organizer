export default function NavContainer({ children }) {
   return (
      <div className="w-full md:px-6 md:pt-6 fixed left-0 top-0 z-30 bg-gray-200 dark:bg-gray-dark transition duration-300">
         <nav className="px-2 h-14 text-white bg-purple-dark dark:bg-gray-lightDark flex justify-between shadow-material items-center w-full md:rounded-lg">
            {children}
         </nav>
      </div>
   );
}
