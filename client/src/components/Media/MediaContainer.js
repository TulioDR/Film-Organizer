import { Link } from "react-router-dom";

export default function MediaContainer({ to, openNewTab, children }) {
   return (
      <Link
         to={to}
         target={openNewTab && "_blank"}
         rel="noreferrer"
         className="relative min-w-24 w-24 md:min-w-36 md:w-36 text-white"
      >
         {children}
      </Link>
   );
}
