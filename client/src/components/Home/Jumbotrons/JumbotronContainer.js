export default function JumbotronContainer({ children, movie }) {
   return (
      <div
         className={`flex relative rounded-md shadow-material overflow-x-hidden h-125 max-h-125 2xl:h-180 2xl:max-h-180 text-white ${
            movie ? "items-end" : "justify-end"
         }`}
      >
         {children}
      </div>
   );
}
