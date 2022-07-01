import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../constants/baseURL";
import movieGenres from "../lib/movie-genres.json";
import tvGenres from "../lib/tv-genres.json";

// Se puede hacer algo para que incluyan adultos
export default function useCardsInformation() {
   const { searchType, mediaType, searchQuery } = useParams();

   const [page, setPage] = useState(1);
   const [cards, setCards] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isLoadingMore, setIsLoadingMore] = useState(false);

   const [title, setTitle] = useState("");
   const loadMoreCards = () => {
      setPage(page + 1);
   };
   useEffect(() => {
      setPage(1);
      window.scrollTo({ top: 0 });
   }, [mediaType]);

   useEffect(() => {
      const getTitle = (isMovie) => {
         const type = isMovie ? "Movies" : "TV Series";
         if (searchType === "popular") setTitle(`Popular ${type}`);
         else if (searchType === "genres") {
            const genreID = Number(searchQuery);
            const genres = isMovie ? movieGenres.genres : tvGenres.genres;
            const genre = genres.filter((e) => e.id === genreID)[0].name;
            setTitle(`${genre} ${type}`);
         } else setTitle(`Founded ${type}`);
      };
      getTitle(mediaType === "movie");
   }, [mediaType, searchType, searchQuery]);

   useEffect(() => {
      const getMediaCards = async () => {
         try {
            if (page === 1) setIsLoading(true);
            else setIsLoadingMore(true);

            const isPopular = searchType === "popular";
            const url = `${baseURL}/media/${searchType}/${mediaType}${
               !isPopular ? `/${searchQuery}` : ""
            }/${page}`;
            const res = await fetch(url);
            const data = await res.json();

            if (page === 1) {
               setCards(data.results);
               setIsLoading(false);
            } else {
               setCards((oldArray) => oldArray.concat(data.results));
               setIsLoadingMore(false);
            }
         } catch (error) {
            console.log(error);
         }
      };
      getMediaCards();
   }, [page, mediaType, searchType, searchQuery]);

   return [cards, title, isLoading, page, loadMoreCards, isLoadingMore];
}
