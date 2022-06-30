export default function NavContainer({ children }) {
   return (
      <nav className="fixed w-full px-8 py-5 h-20 top-0 z-50 flex justify-between items-center transition duration-200 bg-gray-200 dark:bg-gray-dark">
         {children}
      </nav>
   );
}
