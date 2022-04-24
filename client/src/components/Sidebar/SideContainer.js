import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function SideContainer({ children }) {
   const { sidebarExtended, sidebarRevealed } = useSidebarExtendedContext();
   return (
      <div
         className={`fixed md:pl-6 md:pb-6 pt-14 md:pt-24 top-0 left-0 h-full z-20 transform md:translate-x-0 duration-150 ${
            sidebarRevealed ? "translate-x-0" : "-translate-x-full"
         }`}
      >
         <aside
            className={`bg-purple-dark dark:bg-gray-lightDark text-white h-full duration-100 flex flex-col z-10 shadow-material md:rounded-lg ${
               sidebarExtended ? "w-56" : "w-14 hover:delay-300 hover:w-60"
            }`}
         >
            {children}
         </aside>
      </div>
   );
}
