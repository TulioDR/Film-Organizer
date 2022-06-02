import { NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import useSidebarExtendedContext from "../../context/SidebarExtendedContext";
import { matchPath } from "react-router";

export default function SideItem({ name, icon, link, ...props }) {
   const buttonRef = useRef();

   const { closeSidebarMobile } = useSidebarExtendedContext();
   const location = useLocation();
   const match = matchPath(location.pathname, {
      path: link,
      exact: true,
      strict: false,
   });
   return (
      <li
         className="h-11 relative group overflow-hidden mb-1"
         onClick={closeSidebarMobile}
         ref={buttonRef}
      >
         <div
            className={`h-full rounded-r-md transform ${
               match?.isExact
                  ? "duration-500 w-full bg-blue-400"
                  : "duration-200 w-20 bg-blue-300 -translate-x-full group-hover:translate-x-0"
            }`}
         ></div>
         {props.children}
         <NavLink
            exact
            to={link}
            // activeClassName="bg-blue-400 dark:bg-gray-light pointer-events-none rounded-r-full"
            className="absolute left-0 top-0 pl-8 cursor-pointer flex items-center h-full w-full px-2"
         >
            <span className="material-icons mx-2">{icon}</span>
            <span className="pl-4 truncate">{name}</span>
         </NavLink>
      </li>
   );
}
