export default function NoCardsFounded({ mediaType }) {
   return (
      <div className="text-white text-xl">
         {`No ${mediaType === "movie" ? "Movies" : "TV Shows"} founded`}
      </div>
   );
}
