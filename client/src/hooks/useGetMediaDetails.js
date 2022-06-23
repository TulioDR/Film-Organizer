import { useHistory } from "react-router-dom";
import useSelectedPosterContext from "../context/SelectedPosterContext";

export default function useGetMediaDetails({ type, selected }) {
   const { setSelectedPoster } = useSelectedPosterContext();
   const history = useHistory();
   const getMoreInfo = async () => {
      await setSelectedPoster(selected.poster_path);
      history.push(`/media-details/${type}/${selected.id}`);
   };

   return [getMoreInfo];
}
