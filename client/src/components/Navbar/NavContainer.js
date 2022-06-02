export default function NavContainer({ children }) {
   return (
      <nav className="w-full fixed left-0 top-0 pt-3 z-30 flex justify-between items-center px-8">
         {children}
      </nav>
   );
}
