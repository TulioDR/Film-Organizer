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
import useBookmark from "../../../../hooks/useBookmark";
import { useSelector } from "react-redux";
import JumboArrowsContainer from "../JumboArrowsContainer";

export default function TvJumbotron({
   onAir,
   openSaveToListModal,
   openWarning,
   isLoading,
}) {
   const [array, setArray] = useState([]);
   const [isFoward, setIsFoward] = useState(false);
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
      }, 1000);
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
      }, 1000);
   };

   const user = JSON.parse(localStorage.getItem("profile"));
   const checkUser = () => {
      if (user)
         openSaveToListModal(
            selectedShow.id,
            "tv",
            selectedShow.poster_path,
            selectedShow.title || selectedShow.name
         );
      else openWarning();
   };

   const { lists } = useSelector((state) => state.lists);
   const [isSaved] = useBookmark(selectedShow?.id, "tv", lists);
   return (
      <JumbotronContainer>
         <div className="h-full relative overflow-hidden w-80 bg-black">
            <div
               className={`absolute top-0 left-0 w-full h-full z-40 bg-black duration-500 ${
                  isLoading ? "bg-opacity-100" : "bg-opacity-0"
               }`}
            ></div>
         </div>
         <div className="flex-1 relative bg-black">
            <BackgroundPoster
               src={selectedShow?.backdrop_path}
               alt={selectedShow?.name}
               isAnimating={isAnimating}
               isLoading={isLoading}
            />
            <JumbotronSubtitle>TV Series on Air</JumbotronSubtitle>
            <div className="absolute flex left-0 bottom-48 px-10 pb-10 w-full z-20">
               <JumboArrowsContainer isLoading={isLoading}>
                  <NextBtn
                     onClick={backward}
                     icon="chevron_left"
                     isAnimating={isAnimating}
                  />
                  <NextBtn
                     onClick={foward}
                     icon="chevron_right"
                     isAnimating={isAnimating}
                  />
               </JumboArrowsContainer>
               <div className="flex-1 flex flex-col items-end text-right pl-10">
                  <JumbotronTitle
                     isAnimating={isAnimating}
                     isLoading={isLoading}
                  >
                     {selectedShow?.name}
                  </JumbotronTitle>
                  <JumbDate
                     isAnimating={isAnimating}
                     isLoading={isLoading}
                     date={selectedShow?.first_air_date}
                  />
                  <JumboBtnsContainer
                     isAnimating={isAnimating}
                     isLoading={isLoading}
                  >
                     <MoreInfoBtn onClick={getMoreInfo} />
                     <SaveBtn isSaved={isSaved} checkUser={checkUser} />
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
