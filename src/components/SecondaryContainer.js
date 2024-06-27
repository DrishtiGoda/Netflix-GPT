import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  // const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  // const popularMovies = useSelector((store) => store.movies?.popularMovies);

  const movies = useSelector((store) => store.movies);

  // console.log("Secondary",movies);
  return (
    <div className="w-screen bg-black">
      <div className="-mt-20 md:-mt-52 pl-2 md:pl-2 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;