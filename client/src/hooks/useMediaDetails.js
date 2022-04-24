import { useState, useEffect } from "react";
import { baseURL } from "../constants/baseURL";
import { useParams } from "react-router-dom";

export default function useMediaDetails() {
   const [media, setMedia] = useState({});
   const [isMovie, setIsMovie] = useState(true);
   const [isLoading, setIsLoading] = useState(false);
   const { mediaType, id } = useParams();

   useEffect(() => {
      const getMoreInfoData = async (type, id) => {
         setIsLoading(true);
         const certifications =
            type === "movie" ? "release_dates" : "content_ratings";
         const url = `${baseURL}/media/details/${type}/${id}/${certifications}`;
         console.log(url);
         const res = await fetch(url);
         const data = await res.json();
         setMedia(data);
         setIsMovie(mediaType === "movie");
         setIsLoading(false);
      };
      getMoreInfoData(mediaType, id);
   }, [mediaType, id]);

   return [media, isMovie, isLoading];
}
