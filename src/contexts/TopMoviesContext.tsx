import { createContext, ReactNode, useReducer } from "react";
import topMoviesInfo from "../api/getTopMovies";
import { topMoviesReducer, TopMoviesState } from "../reducers/TopMoviesReducer";
import { TopMovieActionType } from "../reducers/Type";

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;

interface TopMovieContextProps {
  children: ReactNode;
}

interface TopMovieContextDefault {
  topMovies: TopMoviesState;
  getTopMovies: () => Promise<void>;
  toggleWatched: (id: string) => void
}

const topMovieDefault: TopMoviesState = [];

export const TopMovieContext = createContext<TopMovieContextDefault>({
  topMovies: topMovieDefault,
  getTopMovies: () => Promise.resolve(void 0),
  toggleWatched: (id: string) => {}
});

const TopMoviesContextProvider = ({ children }: TopMovieContextProps) => {
  const [topMovies, dispatch] = useReducer(topMoviesReducer, topMovieDefault);

  // get top movie from api
  const getTopMovies = async () => {
    const topMovies = await Promise.all(topMoviesInfo);
    dispatch({
      type: GET_TOP_MOVIES,
      payload: topMovies.map((topMovie) => ({
        ...topMovie.data,
        Watched: false,
      })),
    });
  };

  //toggle watched 
  const toggleWatched = (imdbID: string) => dispatch({type: TOGGLE_TOP_MOVIE_WATCHED, payload: imdbID})

  const topMovieContextData = {
    topMovies,
    getTopMovies,
    toggleWatched,  
  };

  return (
    <TopMovieContext.Provider value={topMovieContextData}>
      {children}
    </TopMovieContext.Provider>
  );
};

export default TopMoviesContextProvider;
