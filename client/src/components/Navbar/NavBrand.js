import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function NavBrand() {
   const { toggleSidebarExtended, toggleSidebarRevealed } =
      useSidebarExtendedContext();

   return (
      <span className="flex items-center h-12">
         <button onClick={toggleSidebarExtended} className="hidden lg:grid">
            <span className="material-icons">menu</span>
         </button>
         <button onClick={toggleSidebarRevealed} className="lg:hidden">
            <span className="material-icons">menu</span>
         </button>

         <span className="app-brand text-sm md:text-base uppercase ml-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-400">
            Film's Organizer
         </span>
      </span>
   );
}
