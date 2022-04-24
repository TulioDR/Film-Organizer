export default function JumbotronTitle({ title }) {
   return title ? (
      <div className="text-5xl font-semibold mb-2 absolute bottom-0">
         {title}
      </div>
   ) : (
      <div className="bg-gray-500 w-144 h-12 rounded-md animate-pulse mb-2"></div>
   );
}
