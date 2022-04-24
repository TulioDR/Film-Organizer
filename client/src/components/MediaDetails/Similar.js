import { getPoster } from "../../utils/getPosters";
import InfoContainer from "./InfoContainer";
import Subtitle from "./Subtitle";
import MediaContainer from "../Media/MediaContainer";
import MediaPoster from "../Media/MediaPoster";
import Scroller from "../Scroller";

export default function Similar({ similar, type, isMovie }) {
   return (
      <InfoContainer>
         <Subtitle>Similar {isMovie ? "Movies" : "Shows"}</Subtitle>
         <Scroller>
            {similar?.map(({ id, title, name, poster_path }) => (
               <MediaContainer key={id} to={`/media-details/${type}/${id}`}>
                  <MediaPoster
                     src={getPoster(poster_path, "md", true)}
                     alt={id}
                  />
                  <BottomInfo>
                     <div className="text-center text-sm">{title || name}</div>
                  </BottomInfo>
               </MediaContainer>
            )) || `No similar ${isMovie ? "Movies" : "Shows"} available`}
         </Scroller>
      </InfoContainer>
   );
}
