import { NavLink } from "react-router-dom";
import { useRef } from "react";
import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function SideItem({ name, icon, link, ...props }) {
   const buttonRef = useRef();

   const { closeSidebarMobile } = useSidebarExtendedContext();

   return (
      <li
         className="h-11 relative group overflow-hidden hover:bg-purple dark:hover:bg-gray-light"
         onClick={closeSidebarMobile}
         ref={buttonRef}
      >
         {props.children}
         <NavLink
            exact
            to={link}
            activeClassName="bg-purple dark:bg-gray-light pointer-events-none"
            className="cursor-pointer flex items-center h-full w-full px-2 "
         >
            <span className="material-icons mx-2">{icon}</span>
            <span className="pl-2 truncate">{name}</span>
         </NavLink>
      </li>
   );
}
