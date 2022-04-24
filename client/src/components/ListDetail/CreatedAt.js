export default function CreatedAt({ date }) {
   return (
      <div>
         Created:{" "}
         {new Date(date).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
         })}
      </div>
   );
}
