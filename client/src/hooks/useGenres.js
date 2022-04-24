import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieGenres from "../lib/movie-genres.json";
import tvGenres from "../lib/tv-genres.json";

export default function useGenres() {
   const { mediaType } = useParams();
   const [genresArray, setGenresArray] = useState([]);

   useEffect(() => {
      if (mediaType === "movie") setGenresArray(movieGenres.genres);
      if (mediaType === "tv") setGenresArray(tvGenres.genres);
   }, [mediaType]);
   return [genresArray, mediaType];
}
