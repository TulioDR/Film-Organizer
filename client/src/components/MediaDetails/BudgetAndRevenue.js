export default function BudgetAndRevenue({ budget, revenue }) {
   const addCommas = (number) =>
      number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

   return (
      <div>
         <div className="font-bold">Budget:</div>
         <div className="pl-2">
            - {budget ? `${addCommas(budget)}$` : "Not Available"}
         </div>

         <div className="font-bold">Revenue:</div>
         <div className="pl-2">
            - {revenue ? `${addCommas(revenue)}$` : "Not Available"}
         </div>
      </div>
   );
}
