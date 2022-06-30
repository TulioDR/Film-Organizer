export default function SaveBtn({ isSaved, checkUser }) {
   return (
      <button
         onClick={checkUser}
         className="h-10 w-6 grid place-content-center"
      >
         <span className="material-icons text-5xl">
            {isSaved ? "bookmark" : "bookmark_border"}
         </span>
      </button>
   );
}
