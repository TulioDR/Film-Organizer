import { chageDateFormat } from "../../../utils/getDate";

export default function MovieInfo({ title, date, isTranslated }) {
   return (
      <div className="overflow-hidden">
         <h1
            className={`text-5xl transform transition-all font-medium duration-500 ease-in-out ${
               isTranslated ? "translate-y-full opacity-0" : ""
            }`}
         >
            {title}
         </h1>
         <p
            className={`text-sm mt-2 transform transition-all duration-200 ease-in-out ${
               isTranslated ? "translate-y-full opacity-0" : "delay-300"
            }`}
         >
            {chageDateFormat(date)}
         </p>
      </div>
   );
}
