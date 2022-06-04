import useSidebarExtendedContext from "../context/SidebarExtendedContext";

export default function Main({ children }) {
   const { sidebarExtended } = useSidebarExtendedContext();
   return (
      <main
         className={`pb-6 px-6 relative mt-14 md:mt-20 md:${
            sidebarExtended ? "ml-60" : "ml-20"
         }`}
      >
         {children}
      </main>
   );
}
