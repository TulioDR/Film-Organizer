import { useEffect, useState } from "react";
import TvJumboPoster from "./TvJumboPoster";
import JumbotronSubtitle from "../JumbotronSubtitle";
import JumbDate from "../JumbDate";
import JumbotronTitle from "../JumbotronTitle";
import JumbotronContainer from "../JumbotronContainer";
import BackgroundPoster from "./BackgroundPoster";
import NextBtn from "../NextBtn";
import JumboBtnsContainer from "../JumboBtnsContainer";
import SaveBtn from "../SaveBtn";
import MoreInfoBtn from "../MoreInfoBtn";
import useGetMediaDetails from "../../../../hooks/useGetMediaDetails";

export default function TvJumbotron({ onAir }) {
   const [array, setArray] = useState([]);
   const [isFoward, setIsFoward] = useState(true);
   const [selectedShow, setSelectedShow] = useState(null);
   const [isAnimating, setIsAnimating] = useState(false);

   const [getMoreInfo] = useGetMediaDetails({
      type: "tv",
      selected: selectedShow,
   });

   useEffect(() => {
      setArray(onAir);
      const newArray = [...onAir];
      setSelectedShow(newArray[0]);
   }, [onAir]);

   const foward = () => {
      setIsFoward(true);
      const newArray = [...array];
      const first = newArray.shift();
      newArray.push(first);
      setArray(newArray);
      setIsAnimating(true);
      setTimeout(() => {
         setSelectedShow(newArray[0]);
         setIsAnimating(false);
      }, 900);
   };
   const backward = () => {
      setIsFoward(false);
      const newArray = [...array];
      const last = newArray.pop();
      newArray.unshift(last);
      setArray(newArray);
      setIsAnimating(true);
      setTimeout(() => {
         setSelectedShow(newArray[0]);
         setIsAnimating(false);
      }, 900);
   };
   return (
      <JumbotronContainer>
         <div className="h-full relative overflow-hidden w-80 2xl:w-125"></div>
         <div className="flex-1 relative">
            <BackgroundPoster
               src={selectedShow?.backdrop_path}
               alt={selectedShow?.name}
               isAnimating={isAnimating}
            />
            <JumbotronSubtitle>TV Series on Air</JumbotronSubtitle>
            <div className="absolute flex left-0 bottom-48 px-10 pb-10 w-full z-20">
               <div className="flex items-end space-x-2">
                  <NextBtn onClick={backward} icon="chevron_left" />
                  <NextBtn onClick={foward} icon="chevron_right" />
               </div>
               <div className="flex-1 flex flex-col items-end text-right pl-10">
                  <JumbotronTitle isAnimating={isAnimating}>
                     {selectedShow?.name}
                  </JumbotronTitle>
                  <JumbDate
                     isAnimating={isAnimating}
                     date={selectedShow?.first_air_date}
                  />
                  <JumboBtnsContainer isAnimating={isAnimating}>
                     <SaveBtn />
                     <MoreInfoBtn onClick={getMoreInfo} />
                  </JumboBtnsContainer>
               </div>
            </div>
         </div>
         {array.map((show, index) => (
            <TvJumboPoster
               key={show.id}
               index={index}
               show={show}
               isFoward={isFoward}
            />
         ))}
      </JumbotronContainer>
   );
}
