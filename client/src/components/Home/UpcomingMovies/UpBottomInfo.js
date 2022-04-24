import {
   chageDateFormat,
   daysToRelease,
   isReleased,
} from "../../../utils/getDate";

export default function UpBottomInfo({ title, releaseDate }) {
   return (
      <div className="info absolute p-2 pt-8 w-full bottom-0 bg-gradient-to-b from-transparent to-black text-white text-sm">
         <div>{title}</div>
         <div className="flex space-x-1">
            <div>{chageDateFormat(releaseDate)}</div>
            {isReleased(releaseDate) ? (
               <div>(released)</div>
            ) : (
               <div>(in {daysToRelease(releaseDate)} days)</div>
            )}
         </div>
      </div>
   );
}
