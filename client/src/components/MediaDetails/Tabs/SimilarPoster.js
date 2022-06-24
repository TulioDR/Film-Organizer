import useGetMediaDetails from "../../../hooks/useGetMediaDetails";
import { getPoster } from "../../../utils/getPosters";
import { motion } from "framer-motion";

export default function SimilarPoster({
   similar,
   alt,
   type,
   posterPath,
   setSelectedImg,
}) {
   const [getMoreInfo] = useGetMediaDetails({
      type: type,
      selected: similar,
   });

   const animatedGetMoreInfo = () => {
      setSelectedImg(posterPath);
      setTimeout(() => {
         getMoreInfo();
      }, 500);
   };
   return (
      <motion.div
         layoudId={similar.id}
         onClick={animatedGetMoreInfo}
         className="cursor-pointer shadow-material"
      >
         <motion.img
            src={getPoster(posterPath, "md", true)}
            alt={alt}
            className="w-full rounded-md"
         />
      </motion.div>
   );
}
