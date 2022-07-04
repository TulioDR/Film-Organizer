import { Link, useLocation } from "react-router-dom";
import useSidebarExtendedContext from "../../context/SidebarExtendedContext";
import { matchPath } from "react-router";

export default function SideItem({ name, icon, link }) {
   const { closeSidebarMobile, sidebarExtended } = useSidebarExtendedContext();
   const location = useLocation();
   const match = matchPath(location.pathname, {
      path: link,
      exact: true,
      strict: false,
   });
   return (
      <li
         className="h-11 group flex items-center w-full"
         onClick={closeSidebarMobile}
      >
         <Link to={link} className="relative h-full w-full">
            <div
               className={`h-full rounded-r-md transform ${
                  match?.isExact
                     ? "duration-500 w-full bg-blue-400 dark:bg-blue-600"
                     : `duration-200 bg-blue-300 dark:bg-blue-500 -translate-x-full group-hover:translate-x-0 w-16`
               }`}
            ></div>
            <div className="absolute top-0 left-0 h-full w-full pl-8 flex items-center">
               <span className="material-icons">{icon}</span>
               <span
                  className={`pl-5 truncate transition-opacity duration-100 ${
                     sidebarExtended ? "" : "opacity-0"
                  }`}
               >
                  {name}
               </span>
            </div>
         </Link>
      </li>
   );
}
