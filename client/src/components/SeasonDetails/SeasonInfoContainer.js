export default function SeasonInfoContainer({ children }) {
   return (
      <div className="sm:aspect-w-16 sm:aspect-h-6 mb-8">
         <div className="sm:flex relative">{children}</div>
      </div>
   );
}
