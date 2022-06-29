import Scroller from "../../Scroller";
import DetailContainer from "../DetailContainer";
import People from "./People";

export default function CastAndCrew({ cast, crew }) {
   return (
      <DetailContainer>
         <h4 className="text-lg font-medium">Cast Members</h4>
         <Scroller>
            {cast?.map((person, index) => (
               <People key={index} person={person} />
            )) || "No information available for Cast Members"}
         </Scroller>
         <h4 className="text-lg font-medium mt-2">Crew Members</h4>
         <Scroller>
            {crew?.map((person, index) => (
               <People key={index} person={person} />
            )) || "No information available for Crew Member"}
         </Scroller>
      </DetailContainer>
   );
}
