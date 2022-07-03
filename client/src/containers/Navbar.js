import NavBrand from "../components/Navbar/NavBrand";
import NavSearch from "../components/Navbar/NavSearch";
import NavOptions from "../components/Navbar/NavOptions";

export default function Navbar() {
   return (
      <>
         <div className="md:sticky z-40 top-0 pt-5 pb-3 md:pb-5 px-4 md:px-8 bg-gray-200 dark:bg-gray-dark text-black dark:text-white transition-colors duration-200">
            <div className="h-10 flex items-center justify-between">
               <NavBrand />
               <div className="hidden md:block">
                  <NavSearch />
               </div>
               <NavOptions />
            </div>
         </div>
         <div className="md:hidden sticky z-40 top-0 py-2 px-4 bg-gray-200 dark:bg-gray-dark text-black dark:text-white transition-colors duration-200">
            <NavSearch />
         </div>
      </>
   );
}
