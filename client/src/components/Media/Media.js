import { getPoster } from "../../utils/getPosters";

import Scroller from "../Scroller";
import BottomInfo from "./BottomInfo";
import MediaContainer from "./MediaContainer";
import MediaPoster from "./MediaPoster";
import MediaSkeleton from "./MediaSkeleton";
const skeletonArray = [
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
export default function Media({ media, type, isLoading }) {
   return (
      <Scroller>
         {isLoading
            ? skeletonArray.map((n) => <MediaSkeleton key={n} />)
            : media?.map(({ id, title, name, poster_path }) => (
                 <MediaContainer key={id} to={`/media-details/${type}/${id}`}>
                    <MediaPoster
                       src={getPoster(poster_path, "md", true)}
                       alt={id}
                    />
                    <BottomInfo>
                       <div className="text-center text-sm">
                          {title || name}
                       </div>
                    </BottomInfo>
                 </MediaContainer>
              ))}
      </Scroller>
   );
}
