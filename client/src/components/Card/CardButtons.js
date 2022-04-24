export default function CardButtons({ isSaved, getMoreInfo, checkUser }) {
   return (
      <div className="pb-1 px-4 flex justify-between items-center ">
         <div
            onClick={getMoreInfo}
            className="rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer h-7 grid place-content-center px-3"
         >
            Learn More
         </div>
         <div
            onClick={checkUser}
            className="material-icons cursor-pointer text-3xl dark:text-white"
         >
            {isSaved ? "bookmark" : "bookmark_border"}
         </div>
      </div>
   );
}
