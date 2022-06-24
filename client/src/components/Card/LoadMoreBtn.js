export default function LoadMoreBtn({ page, loadMoreCards, cards }) {
   return (
      page < 5 &&
      cards.length % 20 === 0 && (
         <div className="w-full h-28 flex justify-center items-center">
            <button
               className="bg-blue-600 hover:bg-blue-700 block mt-8 mx-auto"
               onClick={loadMoreCards}
            >
               Load More
            </button>
         </div>
      )
   );
}
