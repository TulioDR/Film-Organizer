import { useEffect, useState } from "react";
import { baseURL } from "../constants/baseURL";
import movie_Genres from "../lib/movie-genres.json";
import tv_Genres from "../lib/tv-genres.json";
export default function useOptionValues() {
   const [languages, setLanguages] = useState([]);
   const [movieGenres, setMovieGenres] = useState([]);
   const [tvGenres, setTvGenres] = useState([]);

   useEffect(() => {
      const getLanguages = async () => {
         const languagesApi = `${baseURL}/media/languages`;
         const res = await fetch(languagesApi);
         const data = await res.json();
         const lan = [];
         data.forEach((lang) => {
            lan.push({ value: lang.iso_639_1, label: lang.english_name });
         });
         setLanguages(lan);
      };
      getLanguages();

      // Clean up
      return () => {
         setLanguages([]);
      };
   }, []);

   useEffect(() => {
      const mGenres = [];
      mGenres.push({ value: "", label: "All genres" });
      movie_Genres.genres.forEach((genre) => {
         mGenres.push({ value: genre.id, label: genre.name });
      });
      setMovieGenres(mGenres);

      const tGenres = [];
      tGenres.push({ value: "", label: "All genres" });
      tv_Genres.genres.forEach((genre) => {
         tGenres.push({ value: genre.id, label: genre.name });
      });
      setTvGenres(tGenres);
   }, []);

   const ratings = [
      { value: "", label: "Any Rating" },
      { value: 9, label: "9+" },
      { value: 8, label: "8+" },
      { value: 7, label: "7+" },
      { value: 6, label: "6+" },
      { value: 5, label: "5+" },
      { value: 4, label: "4+" },
      { value: 3, label: "3+" },
      { value: 2, label: "2+" },
      { value: 1, label: "1+" },
   ];

   const sortByMovie = [
      { label: "Popularity Descending", value: "popularity.desc" },
      { label: "Popularity Ascending", value: "popularity.asc" },
      { label: "Release Date Descending", value: "release_date.desc" },
      { label: "Release Date Ascending", value: "release_date.asc" },
      { label: "Rating Descending", value: "vote_average.desc" },
      { label: "Rating Ascending", value: "vote_average.asc" },
      { label: "Title Descending", value: "original_title.desc" },
      { label: "Title Ascending", value: "original_title.asc" },
   ];
   const sortByTv = [
      { label: "Popularity Descending", value: "popularity.desc" },
      { label: "Popularity Ascending", value: "popularity.asc" },
      { label: "First Air Date Descending", value: "first_air_date.desc" },
      { label: "First Air Date Ascending", value: "first_air_date.asc" },
      { label: "Rating Descending", value: "vote_average.desc" },
      { label: "Rating Ascending", value: "vote_average.asc" },
   ];

   const year = new Date().getFullYear();
   let releaseYears = [{ label: "Any year", value: "" }];
   for (let i = year + 5; i >= 1950; i--)
      releaseYears.push({ label: i, value: i });

   return [
      languages,
      ratings,
      releaseYears,
      sortByMovie,
      sortByTv,
      movieGenres,
      tvGenres,
   ];
}
