export default function NavContainer({ children }) {
   return (
      <nav className="fixed w-full px-8 py-5 h-20 top-0 z-30 flex justify-between items-center">
         {children}
      </nav>
   );
}
