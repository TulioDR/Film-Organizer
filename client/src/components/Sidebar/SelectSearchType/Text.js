export default function Text({ isMovie }) {
   return (
      <div className="flex items-center cursor-pointer w-full">
         <span className="material-icons mx-2">{isMovie ? "movie" : "tv"}</span>
         <span className="pl-2 truncate">
            {`Search ${isMovie ? "Movies" : "TV Series"}`}
         </span>
      </div>
   );
}
