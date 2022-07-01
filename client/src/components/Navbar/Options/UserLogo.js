export default function UserLogo({ user }) {
   return (
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
         <span className="absolute w-auto min-w-max scale-0 group-hover:scale-100 duration-100 text-sm top-full transform translate-y-1 rounded-full bg-blue-400 dark:bg-blue-600 py-1 px-4">
            Logged in as {user.result.name}
         </span>
      </div>
   );
}
