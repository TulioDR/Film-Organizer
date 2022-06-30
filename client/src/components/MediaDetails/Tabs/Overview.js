import { Link } from "react-router-dom";
import DetailContainer from "../DetailContainer";

export default function Overview({ isMovie, media }) {
   const {
      overview,
      tagline,
      genres,
      production_companies,
      budget,
      revenue,
      spoken_languages,
      networks,
      created_by,
   } = media;

   const getDirector = () => {
      const director = media?.credits?.crew?.filter(
         (person) => person.job === "Director"
      );
      return director?.map((dir, index) => (
         <span key={dir.id}>
            {dir.name}
            {checkCommas(director, index)}
         </span>
      ));
   };

   const addCommas = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   };
   const checkCommas = (array, index) => {
      if (index === array.length - 1) {
         return ".";
      } else return ",";
   };
   return (
      <DetailContainer>
         {isMovie && <div className="italic font-bold mb-1">{tagline}</div>}
         <div className="text-sm">{overview || "No overview available"}</div>

         <table className="text-sm mt-5">
            <tbody>
               <tr>
                  <Name>Genres</Name>
                  <Value>
                     {genres?.map((genre) => (
                        <Link
                           to={`/search/genres/${isMovie ? "movie" : "tv"}/${
                              genre.id
                           }`}
                           key={genre.id}
                           className="bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm rounded-md px-2 py-1 cursor-pointer mr-2 float-left my-1"
                        >
                           {genre.name}
                        </Link>
                     ))}
                  </Value>
               </tr>
               {isMovie ? (
                  <tr>
                     <Name>Directed by</Name>
                     <Value>{getDirector()}</Value>
                  </tr>
               ) : (
                  <tr>
                     <Name>Created by</Name>
                     <Value>
                        {created_by?.map((creator, index) => (
                           <span key={creator.id} className="mr-2">
                              {creator.name}
                              {checkCommas(created_by, index)}
                           </span>
                        ))}
                     </Value>
                  </tr>
               )}

               <tr>
                  <Name>Production Companies</Name>
                  <Value>
                     {production_companies?.map((company, index) => (
                        <span key={company.id} className="mr-2">
                           {company.name}
                           {checkCommas(production_companies, index)}
                        </span>
                     ))}
                  </Value>
               </tr>
               <tr>
                  <Name>Spoken Languages</Name>
                  <Value>
                     {spoken_languages?.map((language, index) => (
                        <span key={language.iso_639_1} className="mr-2">
                           {language.english_name}
                           {checkCommas(spoken_languages, index)}
                        </span>
                     ))}
                  </Value>
               </tr>

               {isMovie ? (
                  <>
                     <tr>
                        <Name>Budget</Name>
                        <Value>
                           {budget ? `${addCommas(budget)}$` : "Not Available"}
                        </Value>
                     </tr>
                     <tr>
                        <Name>Revenue</Name>
                        <Value>
                           {revenue
                              ? `${addCommas(revenue)}$`
                              : "Not Available"}
                        </Value>
                     </tr>
                  </>
               ) : (
                  <>
                     <tr>
                        <Name>Networks</Name>
                        <Value>
                           {networks?.map((network, index) => (
                              <span key={network.id} className="mr-2">
                                 {network.name}
                                 {checkCommas(networks, index)}
                              </span>
                           ))}
                        </Value>
                     </tr>
                     <tr>
                        <Name>Seasons</Name>
                        <Value>{media.number_of_seasons}</Value>
                     </tr>
                     <tr>
                        <Name>Episodes</Name>
                        <Value>{media.number_of_episodes}</Value>
                     </tr>
                  </>
               )}
            </tbody>
         </table>
      </DetailContainer>
   );
}

function Name({ children }) {
   return (
      <td className="pr-4 text-gray-500 dark:text-gray-400 py-2">{children}</td>
   );
}
function Value({ children }) {
   return <td className="">{children}</td>;
}
