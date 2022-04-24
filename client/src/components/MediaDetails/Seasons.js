import Scroller from "../Scroller";
import SeasonCard from "./SeasonCard";

export default function Seasons({ seasons, showID }) {
   return (
      <Scroller>
         {seasons?.map(({ id, ...season }) => (
            <SeasonCard key={id} seasonInfo={season} showID={showID} />
         ))}
      </Scroller>
   );
}
