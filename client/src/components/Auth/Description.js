import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function Description() {
   const history = useHistory();
   const goHome = () => {
      setTimeout(() => {
         history.push("/home");
      }, 300);
   };
   return (
      <div className="w-full sm:w-96 bg-blue-700 bg-opacity-90 text-white grid place-content-center p-12">
         <div className="flex flex-col">
            <div className="text-2xl text-center app-brand">
               Film's Organizer
            </div>
            <div className="overview text-sm text-center mb-5 mt-4">
               A place for you to easily manage Movies and TV Series in lists
               created by you.
            </div>
            <motion.button
               whileTap={{ scale: 0.9 }}
               onClick={goHome}
               className="mx-auto py-3 px-5 rounded-lg bg-white text-blue-600"
            >
               Try It!
            </motion.button>
         </div>
      </div>
   );
}
