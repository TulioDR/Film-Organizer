import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MovieJumboPoster from "./MovieJumboPoster";
import NextBtn from "../NextBtn";
import JumbotronSubtitle from "../JumbotronSubtitle";
import JumbotronTitle from "../JumbotronTitle";
import JumbDate from "../JumbDate";
import JumbotronContainer from "../JumbotronContainer";
import JumboBtnsContainer from "../JumboBtnsContainer";
import SaveBtn from "../SaveBtn";
import MoreInfoBtn from "../MoreInfoBtn";

export default function MovieJumbotron({ nowPlaying }) {
   const [array, setArray] = useState([]);
   const [isFoward, setIsFoward] = useState(false);
   const [selectedMovie, setSelectedMovie] = useState(null);
   const [isAnimating, setIsAnimating] = useState(false);

   const history = useHistory();
   const getInfo = () => history.push(`/media-details/movie/${array[0].id}`);

   const foward = () => {
      setIsFoward(true);
      const newArray = [...array];
      const first = newArray.shift();
      newArray.push(first);
      setArray(newArray);
      setIsAnimating(true);
      setTimeout(() => {
         setSelectedMovie(newArray[0]);
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
         setSelectedMovie(newArray[0]);
         setIsAnimating(false);
      }, 900);
   };

   useEffect(() => {
      const newArray = nowPlaying;
      setArray(newArray);
      setSelectedMovie(newArray[0]);
   }, [nowPlaying]);

   return (
      <JumbotronContainer movie>
         <JumbotronSubtitle>Now playing on Theaters</JumbotronSubtitle>
         <div className="px-10 w-125 2xl:w-180 mb-24 z-20">
            <div className="overflow-hidden">
               <JumbotronTitle isAnimating={isAnimating}>
                  {selectedMovie?.title}
               </JumbotronTitle>
               <JumbDate
                  isAnimating={isAnimating}
                  date={selectedMovie?.release_date}
               />
            </div>
            <JumboBtnsContainer isAnimating={isAnimating}>
               <SaveBtn />
               <MoreInfoBtn onClick={getInfo} />
            </JumboBtnsContainer>
         </div>
         <div className="flex space-x-2 z-20 my-5">
            <NextBtn onClick={backward} icon="chevron_left" />
            <NextBtn onClick={foward} icon="chevron_right" />
         </div>
         {array.length > 1 &&
            array.map((movie, index) => (
               <MovieJumboPoster
                  key={movie?.id}
                  movie={movie}
                  index={index}
                  isFoward={isFoward}
               />
            ))}
      </JumbotronContainer>
   );
}
