import useSidebarExtendedContext from "../context/SidebarExtendedContext";

export default function Main({ children }) {
   const { sidebarExtended } = useSidebarExtendedContext();
   return (
      <main
         className={`pt-4 pb-6 px-6 relative mt-14 md:mt-20 md:${
            sidebarExtended ? "ml-62" : "ml-20"
         }`}
      >
         {children}
      </main>
   );
}
