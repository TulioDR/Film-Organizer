import useUser from "../../../hooks/useUser";
// import UserDropdown from "./UserDropdown";
// import UserLogo from "./UserLogo";

export default function User() {
   const [user, toggleTheme, login, logout, colorTheme] = useUser();
   console.log(colorTheme);

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
         <button onClick={toggleTheme} className="focus:outline-none">
            <span className="material-icons text-2xl">
               {colorTheme === "dark" ? "dark_mode" : "light_mode"}
            </span>
         </button>
         {user ? (
            <>
               <div className="relative mx-2 flex justify-center group">
                  {user.result.imageUrl ? (
                     <img
                        src={user.result.imageUrl}
                        alt={user.result.name}
                        className="rounded-full h-10 w-10"
                     />
                  ) : (
                     <div className="rounded-full h-10 w-10 text-xl bg-blue-400 grid place-items-center">
                        {user.result.name.charAt(0)}
                     </div>
                  )}
                  <span className="absolute w-auto min-w-max scale-0 group-hover:scale-100 duration-100 text-sm top-full transform translate-y-1 rounded-full bg-blue-400 py-1 px-4">
                     Logged in as {user.result.name}
                  </span>
               </div>
            </>
         ) : (
            <button
               onClick={login}
               className="bg-gray-200 dark:bg-gray-dark text-black dark:text-white px-4 py-2 focus:outline-none"
            >
               Log in
            </button>
         )}
         <button
            onClick={user ? logout : login}
            className="bg-gray-dark dark:bg-gray-200 text-white dark:text-black px-4 py-2 focus:outline-none"
         >
            {user ? "Log out" : "Sign up"}
         </button>
      </div>
   );
}
