export default function MoreInfoBtn({ onClick }) {
   return (
      <button
         onClick={onClick}
         className="rounded-md bg-blue-500 hover:bg-blue-600 h-9 px-3"
      >
         More Info
      </button>
   );
}
