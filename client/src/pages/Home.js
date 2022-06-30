import useHomeMedia from "../hooks/useHomeMedia";
import MovieJumbotron from "../components/Home/Jumbotrons/MovieJumbotron/MovieJumbotron";
import TvJumbotron from "../components/Home/Jumbotrons/TvJumbotron/TvJumbotron";
import UpcomingMovies from "../components/Home/UpcomingMovies/UpcomingMovies";
import MobileMovieJumbotron from "../mobile/MovieJumbotron/MobileMovieJumbotron";
import HomeSubtitle from "../components/Home/HomeSubtitle";
import MobileTvJumbotron from "../mobile/TvJumbotron/MobileTvJumbotron";
import AddToListModal from "../components/Modals/AddToListModal";
import useSaveToList from "../hooks/useSaveToList";
import useUserWarning from "../hooks/useUserWarning";
import UserWarning from "../components/Modals/UserWarning";

export default function Home() {
   const { nowPlaying, onAir, upcoming, isLoading } = useHomeMedia();

   const [
      showSaveToListModal,
      currentData,
      openSaveToListModal,
      closeSaveToListModal,
   ] = useSaveToList();

   const [showWarning, openWarning, closeWarning, goToLogin] = useUserWarning();
   return (
      <>
         <div className="w-full flex flex-col space-y-5 lg:space-y-10">
            <div className="hidden lg:block">
               <MovieJumbotron
                  nowPlaying={nowPlaying}
                  openSaveToListModal={openSaveToListModal}
                  openWarning={openWarning}
                  isLoading={isLoading}
               />
            </div>

            <div className="hidden lg:block">
               <TvJumbotron
                  onAir={onAir}
                  openSaveToListModal={openSaveToListModal}
                  openWarning={openWarning}
                  isLoading={isLoading}
               />
            </div>

            <div className="lg:hidden">
               <HomeSubtitle>Now playing on Theaters</HomeSubtitle>
               <MobileMovieJumbotron nowPlaying={nowPlaying} />
            </div>

            <div className="lg:hidden">
               <HomeSubtitle>TV Series on Air</HomeSubtitle>
               <MobileTvJumbotron onAir={onAir} />
            </div>

            <div>
               <HomeSubtitle>Upcoming Movies</HomeSubtitle>
               <UpcomingMovies movies={upcoming} isLoading={isLoading} />
            </div>
         </div>
         <AddToListModal
            {...{ showSaveToListModal, closeSaveToListModal, currentData }}
         />
         {showWarning && <UserWarning close={closeWarning} logIn={goToLogin} />}
      </>
   );
}
