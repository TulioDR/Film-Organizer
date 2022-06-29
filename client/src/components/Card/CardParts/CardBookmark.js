export default function CardBookmark({ isSaved, checkUser }) {
   return (
      <div
         onClick={checkUser}
         className="material-icons h-8 w-6 cursor-pointer text-4xl grid place-content-center rounded-md text-black dark:text-white"
      >
         {isSaved ? "bookmark" : "bookmark_border"}
      </div>
   );
}
