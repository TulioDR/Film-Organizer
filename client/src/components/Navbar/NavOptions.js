import MobileSearch from "./Options/MobileSearch";
import User from "./Options/User";

export default function NavOptions() {
   return (
      <div className="h-12 flex justify-center items-center">
         <MobileSearch />
         <User />
      </div>
   );
}
