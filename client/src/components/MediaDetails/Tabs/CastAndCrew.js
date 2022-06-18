import BottomInfo from "../../Media/BottomInfo";
import MediaContainer from "../../Media/MediaContainer";
import MediaPoster from "../../Media/MediaPoster";
import Scroller from "../../Scroller";
import DetailContainer from "../DetailContainer";

export default function CastAndCrew({ cast, crew, type }) {
   const getPersonUrl = (name) => {
      const nameUrl = name.split(" ").join("_");
      return `https://en.wikipedia.org/wiki/${nameUrl}`;
   };
   const getPersonImg = (path) => {
      if (path) return `https://image.tmdb.org/t/p/w185${path}`;
      else return "/images/person-not-found.jpg";
   };
   return (
      <DetailContainer>
         <h4>Cast Members</h4>
         <Scroller>
            {cast?.map(({ id, profile_path, name, character, job }, ind) => (
               <MediaContainer
                  key={ind}
                  to={{ pathname: getPersonUrl(name) }}
                  openNewTab
               >
                  <MediaPoster src={getPersonImg(profile_path)} alt={id} />
                  <div>
                     <div className="truncate text-sm">{name}</div>
                     <div className="truncate italic text-sm">
                        {character || job}
                     </div>
                  </div>
               </MediaContainer>
            )) || `No information available for ${type}`}
         </Scroller>
         <h4>Crew Members</h4>
         <Scroller>
            {crew?.map(({ id, profile_path, name, character, job }, ind) => (
               <MediaContainer
                  key={ind}
                  to={{ pathname: getPersonUrl(name) }}
                  openNewTab
               >
                  <MediaPoster src={getPersonImg(profile_path)} alt={id} />
                  <BottomInfo>
                     <div className="truncate text-sm">{name}</div>
                     <div className="truncate italic text-sm">
                        {character || job}
                     </div>
                  </BottomInfo>
               </MediaContainer>
            )) || `No information available for ${type}`}
         </Scroller>
      </DetailContainer>
   );
}
