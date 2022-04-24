export default function InfoList({ list, subtitle }) {
   return (
      <div className="min-w-max pr-3">
         <div className="font-bold">{subtitle}:</div>
         {list?.map(({ name, english_name, id }, index) => (
            <div key={id || index} className="pl-2">
               - {english_name || name}
            </div>
         )) || <div className="pl-2">Not Available</div>}
      </div>
   );
}
