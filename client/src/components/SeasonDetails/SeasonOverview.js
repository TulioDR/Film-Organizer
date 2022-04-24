export default function SeasonOverview({ overview }) {
   return (
      <div className="text-justify flex-1">
         {overview || "There is no description available for this season."}
      </div>
   );
}
