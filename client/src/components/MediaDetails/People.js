import MediaPoster from "../Media/MediaPoster";
import Scroller from "../Scroller";
import MediaContainer from "../Media/MediaContainer";
import BottomInfo from "../Media/BottomInfo";

export default function People({ people, type }) {
   const getPersonUrl = (name) => {
      const nameUrl = name.split(" ").join("_");
      return `https://en.wikipedia.org/wiki/${nameUrl}`;
   };
   const getPersonImg = (path) => {
      if (path) return `https://image.tmdb.org/t/p/w185${path}`;
      else return "/images/person-not-found.jpg";
   };
   return (
      <Scroller>
         {people?.map(({ id, profile_path, name, character, job }, ind) => (
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
   );
}
