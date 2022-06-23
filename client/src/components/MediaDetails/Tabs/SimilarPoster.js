import useGetMediaDetails from "../../../hooks/useGetMediaDetails";
import { getPoster } from "../../../utils/getPosters";
import { motion } from "framer-motion";

export default function SimilarPoster({
   similar,
   alt,
   type,
   posterPath,
   setSelectedId,
   setSelectedImg,
}) {
   console.log(similar.id);
   const [getMoreInfo] = useGetMediaDetails({
      type: type,
      selected: similar,
   });

   const animatedGetMoreInfo = () => {
      setSelectedImg(posterPath);
      setSelectedId(similar.id);
      // setTimeout(() => setSelectedId(similar.id), 1000);
      // setTimeout(getMoreInfo, 900);
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
