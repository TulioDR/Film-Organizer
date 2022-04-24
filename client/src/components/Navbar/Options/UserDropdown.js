import Item from "../Item";

export default function UserDropdown({
   user,
   dropdown,
   toggleTheme,
   login,
   logout,
   colorTheme,
}) {
   return (
      <div
         ref={dropdown}
         tabIndex={0}
         className="absolute top-full right-0 md:right-6 p-4 transform -translate-y-1 bg-purple-dark dark:bg-gray-lightDark rounded-md shadow-material"
      >
         {user && (
            <div className="border-b-2 border-white flex items-center pb-3 pl-2 pr-3 mb-3">
               {user.result.imageUrl ? (
                  <img
                     src={user.result.imageUrl}
                     alt="user"
                     className="h-10 w-10 rounded-full"
                  />
               ) : (
                  <div className="h-10 w-10 rounded-full grid text-xl bg-purple-900 place-items-center">
                     {user.result.name.charAt(0)}
                  </div>
               )}

               <span className="text-lg font-bold ml-3">
                  {user.result.name}
               </span>
            </div>
         )}

         <ul>
            {user ? (
               <Item icon="logout" text="Logout" onClick={logout} />
            ) : (
               <Item icon="login" text="Log in / Sign Up" onClick={login} />
            )}
            <Item
               icon={colorTheme === "dark" ? "dark_mode" : "light_mode"}
               text={colorTheme === "dark" ? "Dark theme" : "Light theme"}
               onClick={toggleTheme}
            />
         </ul>
      </div>
   );
}
