import React from 'react';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Array<{
    id: string;
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Type: string;
  }>;
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          type={movie.Type}
          id={movie.imdbID}
        />
      ))}
    </div>
  );
};

export default MovieList;
