export default function BottomInfo({ children }) {
   return (
      <div className="absolute bottom-0 pb-1 pt-7 px-2 w-full text-sm md:text-base bg-gradient-to-t from-black to-transparent">
         {children}
      </div>
   );
}
