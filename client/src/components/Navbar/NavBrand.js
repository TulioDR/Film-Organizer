import Button from "@material-tailwind/react/Button";

import useSidebarExtendedContext from "../../context/SidebarExtendedContext";

export default function NavBrand() {
   const { toggleSidebarExtended, toggleSidebarRevealed } =
      useSidebarExtendedContext();

   return (
      <span className="flex items-center h-12">
         <Button
            color="white"
            buttonType="link"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={true}
            ripple="light"
            onClick={toggleSidebarExtended}
            className="hidden md:grid"
         >
            <span className="material-icons">menu</span>
         </Button>
         <Button
            color="white"
            buttonType="link"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={true}
            ripple="light"
            onClick={toggleSidebarRevealed}
            className="md:hidden"
         >
            <span className="material-icons">menu</span>
         </Button>

         <span className="text-lg md:text-xl uppercase font-extrabold ml-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-400">
            Film's Organizer
         </span>
      </span>
   );
}
