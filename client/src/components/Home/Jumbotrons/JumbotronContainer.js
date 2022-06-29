export default function JumbotronContainer({ children, movie }) {
   return (
      <div
         className={`flex relative rounded-md shadow-material overflow-x-hidden h-125 max-h-125 text-white ${
            movie ? "items-end" : "justify-end"
         }`}
      >
         {children}
      </div>
   );
}
