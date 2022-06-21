import { getPoster } from "../../utils/getPosters";
// import CardBookmark from "./CardBookmark";

export default function CardBackPoster({ backPoster, toggleInfo }) {
   return (
      <div className="text-white relative">
         <img
            src={getPoster(backPoster, "md", false)}
            alt="backposter"
            className="w-full"
         />
         <button
            className="material-icons rounded-md bg-gray-200 dark:bg-gray-dark text-black dark:text-white cursor-pointer absolute left-4 top-4 p-1"
            onClick={toggleInfo}
         >
            chevron_left
         </button>
      </div>
   );
}
