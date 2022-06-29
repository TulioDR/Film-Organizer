import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Import Swiper styles
import "swiper/swiper.scss";
import MobileMoviePoster from "./MobileMoviePoster";

export default function MobileMovieJumbotron({ nowPlaying }) {
   return (
      <Swiper
         slidesPerView={1.2}
         spaceBetween={25}
         centeredSlides={true}
         className="mySwiper"
      >
         {nowPlaying.map((movie) => (
            <SwiperSlide key={movie.id}>
               <MobileMoviePoster movie={movie} />
            </SwiperSlide>
         ))}
      </Swiper>
   );
}
