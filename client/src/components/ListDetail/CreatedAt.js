export default function CreatedAt({ date }) {
   return (
      <div className="flex icons-center">
         <span className="material-icons mr-1">today</span>
         {new Date(date).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
         })}
      </div>
   );
}
