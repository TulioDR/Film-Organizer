import NavBrand from "../components/Navbar/NavBrand";
import NavSearch from "../components/Navbar/NavSearch";
import NavOptions from "../components/Navbar/NavOptions";
import NavContainer from "../components/Navbar/NavContainer";

export default function Navbar() {
   return (
      <NavContainer>
         <NavBrand />
         <NavSearch />
         <NavOptions />
      </NavContainer>
   );
}
