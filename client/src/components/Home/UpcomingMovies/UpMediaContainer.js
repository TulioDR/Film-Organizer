import { Link } from "react-router-dom";

export default function UpMediaContainer({ to, children }) {
   return (
      <Link
         to={to}
         className="relative overflow-hidden rounded-md w-72 min-w-72 group cursor-pointer"
      >
         {children}
      </Link>
   );
}
