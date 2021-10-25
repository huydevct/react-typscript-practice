import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface MoviesContextProps {
  children: ReactNode;
}

interface Movie {
  id: string;
  title: string;
}

interface MoviesContextDefault {
  movies: Movie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}

const movieContextDefaultData = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};

export const MoviesContext = createContext<MoviesContextDefault>(
  movieContextDefaultData
);

const MoviesContextProvider = ({ children }: MoviesContextProps) => {
  const [movies, setMovies] = useState<Movie[]>(movieContextDefaultData.movies);

  const addMovie = (title: string) =>
    setMovies([...movies, { id: uuidv4(), title }]);
    const deleteMovie = (id: string) => setMovies(movies.filter(movie => movie.id !== id))
  const movieContextData = {
    movies,
    addMovie,
    deleteMovie,
  };

  return (
    <MoviesContext.Provider value={movieContextData}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
