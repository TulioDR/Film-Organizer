export default function CardMoreInfoBtn({ animatedGetMoreInfo }) {
   return (
      <button
         onClick={animatedGetMoreInfo}
         className="rounded-md h-8 text-white bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer grid place-content-center px-3"
      >
         Learn More
      </button>
   );
}
