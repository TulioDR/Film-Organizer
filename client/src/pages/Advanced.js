import Title from "../components/Title";

import { useState } from "react";
import SearchFor from "../components/AdvancedSearch/SearchFor";
import DropDown from "../components/AdvancedSearch/DropDown";
import useOptionValues from "../hooks/useOptionsValues";
import { useHistory } from "react-router-dom";
import AnimatedButton from "../components/AnimatedButton";

export default function Advanced() {
   // useEffect(() => {
   //    window.scrollTo({ top: 0 });
   // }, []);

   const [
      languages,
      ratings,
      releaseYears,
      sortByMovie,
      sortByTv,
      movieGenres,
      tvGenres,
   ] = useOptionValues();

   const history = useHistory();
   const [isMovie, setIsMovie] = useState(true);
   const [language, setLanguage] = useState({ value: "en", label: "English" });
   const [genre, setGenre] = useState({ value: "", label: "All genres" });
   const [year, setYear] = useState({ value: "", label: "Any year" });
   const [rating, setRating] = useState({ value: "", label: "Any rating" });
   const [sortBy, setSortBy] = useState({
      value: "popularity.desc",
      label: "Popularity Descending",
   });

   const changeType = (bolean) => {
      setIsMovie(bolean);
      setGenre({ value: "", label: "All genres" });
      setSortBy({
         value: "popularity.desc",
         label: "Popularity Descending",
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      const mediaType = isMovie ? "movie" : "tv";

      const languageQuery = `&with_original_language=${language.value}`;
      const genreQuery = `&with_genres=${genre.value}`;
      const yearQuery = `&${isMovie ? "year" : "first_air_date_year"}=${
         year.value
      }`;
      const ratingQuery = `&vote_average.gte=${rating.value}`;
      const sortByQuery = `&sort_by=${sortBy.value}`;

      const searchTerm =
         languageQuery + genreQuery + yearQuery + ratingQuery + sortByQuery;

      history.push(`/search/advanced/${mediaType}/${searchTerm}`);
   };
   return (
      <>
         <Title>Advanced Search</Title>
         <form onSubmit={handleSubmit} className="px-10">
            <SearchFor {...{ isMovie, changeType }} />

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:px-20">
               <DropDown
                  title="Languages"
                  options={languages}
                  value={language}
                  setValue={setLanguage}
               />
               <DropDown
                  title="Genres"
                  options={isMovie ? movieGenres : tvGenres}
                  value={genre}
                  setValue={setGenre}
               />
               <DropDown
                  title="Year of Release"
                  options={releaseYears}
                  value={year}
                  setValue={setYear}
               />
               <DropDown
                  title="Rating"
                  options={ratings}
                  value={rating}
                  setValue={setRating}
               />
               <DropDown
                  title="Sort By"
                  options={isMovie ? sortByMovie : sortByTv}
                  value={sortBy}
                  setValue={setSortBy}
               />
            </div>

            <AnimatedButton>Search</AnimatedButton>
         </form>
      </>
   );
}
