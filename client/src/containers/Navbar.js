import NavBrand from "../components/Navbar/NavBrand";
import NavSearch from "../components/Navbar/NavSearch";
import NavOptions from "../components/Navbar/NavOptions";
import useSidebarExtendedContext from "../context/SidebarExtendedContext";

export default function Navbar() {
   const { toggleSidebarRevealed } = useSidebarExtendedContext();
   return (
      <>
         <div className="md:sticky z-40 top-0 pt-5 pb-3 md:pb-5 px-4 md:pl-6 md:pr-8 backgorund-colors">
            <div className="h-10 flex items-center justify-between">
               <NavBrand />
               <div className="hidden md:block">
                  <NavSearch />
               </div>
               <NavOptions />
            </div>
         </div>
         <div className="md:hidden sticky z-40 top-0 py-2 px-4 backgorund-colors w-full flex space-x-2">
            <button
               onClick={toggleSidebarRevealed}
               className="lg:hidden bg-blue-400 dark:bg-blue-600 rounded-md h-10 w-10 grid place-content-center"
            >
               <span className="material-icons">menu</span>
            </button>
            <div className="flex-1">
               <NavSearch />
            </div>
         </div>
      </>
   );
}
