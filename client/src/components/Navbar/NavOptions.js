import LogButton from "./Options/LogButton";
import MobileSearch from "./Options/MobileSearch";
import ThemeButton from "./Options/ThemeButton";
import UserLogo from "./Options/UserLogo";

import useUser from "../../hooks/useUser";

export default function NavOptions() {
   const [user, toggleTheme, login, logout, colorTheme] = useUser();
   return (
      <div className="h-12 flex justify-center items-center">
         <MobileSearch />
         <div className="flex">
            <ThemeButton onClick={toggleTheme} colorTheme={colorTheme} />
            {user ? <UserLogo /> : <LogButton onClick={login} text="Log in" />}
            <LogButton
               onClick={user ? logout : login}
               text={user ? "Log out" : "Sign up"}
            />
         </div>
      </div>
   );
}
