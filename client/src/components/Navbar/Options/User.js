import { useRef, useState } from "react";
import useUser from "../../../hooks/useUser";
import UserDropdown from "./UserDropdown";
import UserLogo from "./UserLogo";

export default function User() {
   const dropdown = useRef(null);
   const [openUserDropDown, setOpenUserDropDown] = useState(false);
   const toggle = () => setOpenUserDropDown(!openUserDropDown);
   const closeUserDp = (e) => {
      if (e.relatedTarget !== dropdown.current) setOpenUserDropDown(false);
   };

   const [user, toggleTheme, login, logout, colorTheme] =
      useUser(setOpenUserDropDown);

   return (
      // <div tabIndex={0} onBlur={closeUserDp} onClick={toggle}>
      //    <UserLogo user={user} />
      //    {openUserDropDown && (
      //       <UserDropdown
      //          user={user}
      //          dropdown={dropdown}
      //          toggleTheme={toggleTheme}
      //          login={login}
      //          logout={logout}
      //          colorTheme={colorTheme}
      //       />
      //    )}
      // </div>
      <div className="flex">
         <button className="px-4 py-2 grid place-content-center">
            <span className="material-icons ">dark_mode</span>
         </button>
         <button className="text-black px-4 py-2 focus:outline-none">
            Log in
         </button>
         <button className="bg-black text-white px-4 py-2 focus:outline-none">
            Sign up
         </button>
      </div>
   );
}
