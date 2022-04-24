export default function GenreGrid({ children }) {
   return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 2xl:grid-cols-4">
         {children}
      </div>
   );
}
