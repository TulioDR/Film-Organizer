import People from "../MediaDetails/People";
import ModalContainer from "./ModalContainer";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import {
   daysToRelease,
   isReleased,
   chageDateFormat,
} from "../../utils/getDate";
import ModalTitle from "./ModalTitle";

export default function EpisodeDetailModal({ showModal, closeModal, episode }) {
   return (
      <ModalContainer isModalOpen={showModal} closeModal={closeModal}>
         <div className="overflow-y-auto h-full w-full pr-3 card-scrollbar flex-1">
            <ModalTitle>Episode Info</ModalTitle>
            <div className="mb-1 font-bold flex items-center">
               <span className="material-icons mr-1">calendar_today</span>
               <span className="mr-1">
                  {chageDateFormat(episode?.air_date) || "Not Available"}
               </span>
               <span className="italic text-sm">
                  {!isReleased(episode?.air_date) &&
                     "(in " + daysToRelease(episode?.air_date) + " days)"}
               </span>
            </div>
            <div>
               <People type="Guest Stars" people={episode?.guest_stars} />
               <People type="Crew" people={episode?.crew} />
            </div>
         </div>
         <ModalFooter>
            <Button onClick={closeModal} color="red" ripple="dark">
               Close
            </Button>
         </ModalFooter>
      </ModalContainer>
   );
}
