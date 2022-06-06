import LogButton from "./Options/LogButton";
import ThemeButton from "./Options/ThemeButton";
import UserLogo from "./Options/UserLogo";

import useUser from "../../hooks/useUser";

export default function NavOptions() {
   const [user, login, logout] = useUser();
   return (
      <div className="flex">
         <ThemeButton />
         {user ? <UserLogo /> : <LogButton onClick={login} text="Log in" />}
         <LogButton
            onClick={user ? logout : login}
            text={user ? "Log out" : "Sign up"}
            reverse
         />
      </div>
   );
}
