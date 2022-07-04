import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function SideContainer({ children }) {
   const { sidebarExtended, sidebarRevealed } = useSidebarExtendedContext();

   return (
      <aside
         className={`transform text-sm fixed  pb-2 pr-4 pt-4 lg:pt-20 lg:pr-0 top-0 left-0 h-full z-40 lg:z-30 flex flex-col backgorund-colors shadow-material lg:shadow-none ${
            sidebarExtended ? "w-60" : "w-20"
         } ${sidebarRevealed ? "" : "-translate-x-full lg:translate-x-0"}`}
      >
         {children}
      </aside>
   );
}
