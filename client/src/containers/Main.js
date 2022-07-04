import useSidebarExtendedContext from "../context/SidebarExtendedContext";

export default function Main({ children }) {
   const { sidebarExtended } = useSidebarExtendedContext();
   return (
      <main
         className={`pb-10 px-5 lg:pl-6 lg:pr-8 relative overflow-y-hidden duration-300 overflow-x-hidden lg:${
            sidebarExtended ? "ml-60" : "ml-20"
         }`}
      >
         {children}
      </main>
   );
}
