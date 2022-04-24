export default function Container({ children }) {
   return (
      <div className="absolute top-0 w-full h-full grid place-items-center">
         <div className="shadow-lg sm:rounded-xl md:flex overflow-hidden">
            {children}
         </div>
      </div>
   );
}
