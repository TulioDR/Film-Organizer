import useSidebarExtendedContext from "../context/SidebarExtendedContext";

export default function Main({ children }) {
   const { sidebarExtended } = useSidebarExtendedContext();
   return (
      <main
         className={`pb-10 px-5 lg:pl-6 lg:pr-8 relative min-h-screen overflow-y-hidden duration-200 bg-gray-200 dark:bg-gray-dark text-black dark:text-white overflow-x-hidden lg:${
            sidebarExtended ? "ml-60" : "ml-20"
         }`}
      >
         {children}
      </main>
   );
}
