import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function SideContainer({ children }) {
   const { sidebarExtended, sidebarRevealed } = useSidebarExtendedContext();
   return (
      <aside
         className={`fixed pt-20 top-0 left-0 h-full z-20 w-56 text-black flex flex-col`}
      >
         {children}
      </aside>
   );
}
