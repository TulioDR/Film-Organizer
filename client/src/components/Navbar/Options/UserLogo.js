export default function UserLogo({ user }) {
   return (
      <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer bg-purple hover:bg-purple-700 flex justify-center items-center">
         {user ? (
            user.result.imageUrl ? (
               <img src={user.result.imageUrl} alt="user" className="" />
            ) : (
               <div className="grid text-xl place-items-center">
                  {user.result.name.charAt(0)}
               </div>
            )
         ) : (
            <div className="grid place-items-center">
               <span className="material-icons">account_circle</span>
            </div>
         )}
      </div>
   );
}
