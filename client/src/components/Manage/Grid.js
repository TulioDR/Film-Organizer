export default function Grid({ children }) {
   return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:px-20">
         {children}
      </div>
   );
}
