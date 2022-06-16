import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function SideContainer({ children }) {
   const { sidebarExtended } = useSidebarExtendedContext();
   // const { sidebarRevealed } = useSidebarExtendedContext();
   return (
      <aside
         className={`fixed pt-20 pb-2 top-0 left-0 h-full z-30 flex flex-col duration-300 ${
            sidebarExtended ? "w-60" : "w-20"
         }`}
      >
         {children}
      </aside>
   );
}
