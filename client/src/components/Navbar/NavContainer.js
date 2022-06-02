export default function NavContainer({ children }) {
   return (
      <nav className="w-full fixed h-10 my-3 left-0 top-0 z-30 flex justify-between items-center px-8">
         {children}
      </nav>
   );
}
