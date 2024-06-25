import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {

  // these hooks are fetching the movies and updating the store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies(); 

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
