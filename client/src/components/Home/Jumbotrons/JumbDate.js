import { chageDateFormat } from "../../../utils/getDate";

export default function JumbDate({ isAnimating, date }) {
   return (
      <p
         className={`text-sm mt-2 transform transition-all duration-200 ease-in-out ${
            isAnimating ? "translate-y-full opacity-0" : "delay-300"
         }`}
      >
         {chageDateFormat(date)}
      </p>
   );
}
