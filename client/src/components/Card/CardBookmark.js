export default function CardBookmark({
   isSaved,
   save,
   id,
   type,
   setOpenWarning,
}) {
   const user = JSON.parse(localStorage.getItem("profile"));
   return (
      <div
         onClick={user ? save : () => setOpenWarning(true)}
         className="material-icons cursor-pointer text-3xl dark:text-white"
      >
         {isSaved(id, type) ? "bookmark" : "bookmark_border"}
      </div>
   );
}
