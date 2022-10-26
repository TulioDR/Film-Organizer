import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function SideContainer({ children }) {
   const { sidebarExtended, sidebarRevealed } = useSidebarExtendedContext();

   return (
      <aside
         className={`transform text-sm fixed top-0 lg:top-20 pb-2 pr-4 lg:pr-2 left-0 h-full z-40 lg:z-30 background-colors shadow-material lg:shadow-none scroller-scrollbar sidebar-height overflow-y-auto ${
            sidebarExtended ? "w-60" : "w-20"
         } ${sidebarRevealed ? "" : "-translate-x-full lg:translate-x-0"}`}
      >
         {children}
      </aside>
   );
}
