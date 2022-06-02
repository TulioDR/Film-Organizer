import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function SideContainer({ children }) {
   const { sidebarExtended, sidebarRevealed } = useSidebarExtendedContext();
   return (
      <aside
         className={`fixed pt-20 top-0 left-0 h-full z-20 text-black flex flex-col duration-300 ${
            sidebarExtended ? "w-60" : "w-20"
         }`}
      >
         {children}
      </aside>
   );
}
