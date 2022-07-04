import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function SideContainer({ children }) {
   const { sidebarExtended, sidebarRevealed } = useSidebarExtendedContext();

   return (
      <aside
         className={`transform text-sm fixed pt-20 pb-2 pr-4 lg:pr-0 top-0 left-0 h-full z-30 flex flex-col backgorund-colors ${
            sidebarExtended ? "w-60" : "w-20"
         } ${sidebarRevealed ? "" : "-translate-x-full lg:translate-x-0"}`}
      >
         {children}
      </aside>
   );
}
