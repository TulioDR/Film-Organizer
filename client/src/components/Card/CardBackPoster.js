import { getPoster } from "../../utils/getPosters";
// import CardBookmark from "./CardBookmark";

export default function CardBackPoster({
   title,
   backPoster,
   year,
   toggleInfo,
}) {
   return (
      <div className="text-white relative">
         <img
            src={getPoster(backPoster, "md", false)}
            alt="backposter"
            className="w-full"
         />
         <div className="absolute w-full top-0 pt-2 pb-8 pr-10 pl-4 bg-gradient-to-b from-black to-transparent">
            <div className="text-lg leading-tight">{title}</div>
            <div className="text-sm">({year ? year.substr(0, 4) : "N/A"})</div>
         </div>

         <span
            className="material-icons cursor-pointer absolute right-2 top-2"
            onClick={toggleInfo}
         >
            close
         </span>
      </div>
   );
}
