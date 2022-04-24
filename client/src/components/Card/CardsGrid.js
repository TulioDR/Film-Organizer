import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function CardsGrid({ children }) {
   const { sidebarExtended } = useSidebarExtendedContext();
   return (
      <div
         className={`grid gap-5 px-5 sm:grid-cols-2 ${
            sidebarExtended
               ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
               : "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
         } `}
      >
         {children}
      </div>
   );
}
