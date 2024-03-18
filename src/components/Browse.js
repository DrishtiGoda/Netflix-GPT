import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

  const nowPlayingMovies = useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>

      {/* {
        Main Container
        - Video background
        - Video Title
        Secondary Container
        - MovieList * n
          - Cards * n
      } */}
    </div>
  );
};

export default Browse;
