import {
   chageDateFormat,
   daysToRelease,
   isReleased,
} from "../../../utils/getDate";

export default function UpBottomInfo({ title, releaseDate }) {
   return (
      <div className="info w-full text-sm">
         <div>{title}</div>
         <div className="flex space-x-1 text-gray-500 dark:text-gray-400">
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
