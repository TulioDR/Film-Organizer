export default function SaveButton({ isSaved, checkUser }) {
   return (
      <div
         onClick={checkUser}
         className="material-icons cursor-pointer bg-purple-dark dark:bg-purple-900 hover:bg-purple-800 text-white rounded-full grid place-items-center w-10 h-10 shadow-md"
      >
         {isSaved ? "bookmark" : "bookmark_border"}
      </div>
   );
}
