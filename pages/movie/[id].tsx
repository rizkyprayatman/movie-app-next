// pages/movie/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MovieDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      if (id) {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
        const data = await response.json();
        setMovie(data);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return <p className='text-center mt-12'>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold text-center mb-6">{movie.Title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <img className="w-full h-auto rounded-lg shadow-md px-5 lg:px-0" src={movie.Poster} alt={movie.Title} />
        <div className="text-gray-800 mx-5 lg:mx-0">
          <p className="text-base mb-2">
            <span className="font-bold">Year:</span> {movie.Year}
          </p>
          <p className="text-base mb-2">
            <span className="font-bold">Rated:</span> {movie.Rated}
          </p>
          <p className="text-base mb-2">
            <span className="font-bold">Released:</span> {movie.Released}
          </p>
          <p className="text-base mb-2">
            <span className="font-bold">Runtime:</span> {movie.Runtime}
          </p>
          <p className="text-base mb-2">
            <span className="font-bold">Genre:</span> {movie.Genre}
          </p>
          <p className="text-base mb-2">
            <span className="font-bold">Director:</span> {movie.Director}
          </p>
          {/* Add other information as needed */}
        </div>
      </div>
      <div className="mt-8 mb-14 mx-5 lg:mx-0">
        <h2 className="text-3xl font-bold mb-4">Plot</h2>
        <p className="text-gray-700">{movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
