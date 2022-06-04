import { NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import useSidebarExtendedContext from "../../context/SidebarExtendedContext";
import { matchPath } from "react-router";

export default function SideItem({ name, icon, link, ...props }) {
   const buttonRef = useRef();

   const { closeSidebarMobile, sidebarExtended } = useSidebarExtendedContext();
   const location = useLocation();
   const match = matchPath(location.pathname, {
      path: link,
      exact: true,
      strict: false,
   });
   return (
      <li
         className="h-11 relative group flex items-center"
         onClick={closeSidebarMobile}
         ref={buttonRef}
      >
         <div
            className={`h-full rounded-r-md transform ${
               match?.isExact
                  ? "duration-500 w-full bg-blue-400 dark:bg-blue-600"
                  : "duration-200 w-20 bg-blue-300 dark:bg-blue-500 -translate-x-full group-hover:translate-x-0"
            }`}
         ></div>
         {!sidebarExtended && (
            <span className="absolute bg-blue-400 dark:bg-blue-600 py-1 px-3 w-auto min-w-max transition-all duration-100 delay-200 scale-0 group-hover:scale-100 origin-left text-sm left-full transform translate-x-2 rounded-md">
               {name}
            </span>
         )}

         {props.children}
         <NavLink
            exact
            to={link}
            className="absolute h-full w-full top-0 pl-10 flex items-center"
         >
            <span className="material-icons">{icon}</span>
            <span
               className={`pl-6 truncate duration-100 ${
                  sidebarExtended ? "" : "opacity-0"
               }`}
            >
               {name}
            </span>
         </NavLink>
      </li>
   );
}
