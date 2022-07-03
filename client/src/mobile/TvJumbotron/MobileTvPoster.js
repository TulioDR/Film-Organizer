import useGetMediaDetails from "../../hooks/useGetMediaDetails";
import { getPoster } from "../../utils/getPosters";

export default function MobileTvPoster({ tv }) {
   const [getMoreInfo] = useGetMediaDetails({
      type: "tv",
      selected: tv,
   });
   return (
      <article
         onClick={getMoreInfo}
         className="shadow-material rounded-lg overflow-hidden cursor-pointer min-w-24 w-24 md:min-w-36 md:w-36"
      >
         <img src={getPoster(tv.poster_path, "md", true)} alt={tv.name} />
      </article>
   );
}
