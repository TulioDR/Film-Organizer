import { useHistory } from "react-router-dom";

export default function useSearch({ isMovie, inputValue, closeSearch }) {
   const history = useHistory();

   const getMedia = (id, mobile) => {
      const mediaType = isMovie ? "movie" : "tv";
      history.push(`/media-details/${mediaType}/${id}`);
      closeSearch(mobile);
   };
   const handleSubmit = (e, mobile) => {
      e.preventDefault();
      const mediaType = isMovie ? "movie" : "tv";
      history.push(`/search/search/${mediaType}/${inputValue}`);
      closeSearch(mobile);
   };

   return [getMedia, handleSubmit];
}
