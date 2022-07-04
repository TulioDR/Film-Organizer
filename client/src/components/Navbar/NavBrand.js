import useSidebarExtendedContext from "../../context/SidebarExtendedContext";
import useUser from "../../hooks/useUser";

export default function NavBrand() {
   const { toggleSidebarExtended, toggleSidebarRevealed } =
      useSidebarExtendedContext();
   const [user] = useUser();

   return (
      <span className="flex items-center h-12">
         <button
            onClick={toggleSidebarExtended}
            className="hidden lg:grid mr-2 focus:outline-none h-10 w-10 place-content-center"
         >
            <span className="material-icons">menu</span>
         </button>
         <button
            onClick={toggleSidebarRevealed}
            className="hidden md:grid lg:hidden mr-2"
         >
            <span className="material-icons">menu</span>
         </button>
         {user && (
            <div className="sm:hidden flex">
               <div className="mr-2">
                  {user.result.imageUrl ? (
                     <img
                        src={user.result.imageUrl}
                        alt={user.result.name}
                        className="rounded-full h-10 w-10"
                     />
                  ) : (
                     <div className="rounded-full h-10 w-10 text-xl bg-blue-400 grid place-items-center">
                        {user.result.name.charAt(0)}
                     </div>
                  )}
               </div>
               <div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">
                     Welcome
                  </div>
                  <div className="font-medium text-sm">{user.result.name}</div>
               </div>
            </div>
         )}

         <span
            className={`${
               user ? "hidden" : ""
            }  sm:block app-brand text-2xl uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-300 dark:from-blue-600 dark:to-blue-500`}
         >
            Film's Organizer
         </span>
      </span>
   );
}
