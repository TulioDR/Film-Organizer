import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function MobileToggle() {
   const { toggleSidebarRevealed } = useSidebarExtendedContext();
   return (
      <div className="flex lg:hidden my-4 items-center">
         <button
            onClick={toggleSidebarRevealed}
            className="ml-4 mr-2 bg-blue-400 dark:bg-blue-600 rounded-md h-10 w-10 grid place-content-center"
         >
            <span className="material-icons">menu</span>
         </button>
         <span className="app-brand text-2xl uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-300 dark:from-blue-600 dark:to-blue-500">
            Film's Organizer
         </span>
      </div>
   );
}
