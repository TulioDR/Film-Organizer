import Scroller from "../../components/Scroller";
import MobileTvPoster from "./MobileTvPoster";

export default function MobileTvJumbotron({ onAir }) {
   return (
      <Scroller>
         {onAir.map((tv) => (
            <MobileTvPoster key={tv.id} tv={tv} />
         ))}
      </Scroller>
   );
}
