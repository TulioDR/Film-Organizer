import Button from "@material-tailwind/react/Button";
import { useHistory } from "react-router";

export default function Description() {
   const history = useHistory();
   const goHome = () => history.push("/home");

   return (
      <div className="w-full sm:w-96 bg-purple-900 text-white p-12">
         <div className="text-2xl text-center mb-4">Film's Organizer</div>
         <div className="overview">
            A place for you to easily manage Movies and TV Series in lists
            created by you.
         </div>
         <Button
            color="deepPurple"
            buttonType="filled"
            size="lg"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={goHome}
            className="mx-auto mt-4"
         >
            Try It!
         </Button>
      </div>
   );
}
