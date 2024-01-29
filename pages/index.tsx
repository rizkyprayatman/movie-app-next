// pages/index.tsx
import React, { useState } from "react";
import MovieList from "../components/MovieList";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);

  const fetchMovies = async () => {
    setLoad(true)
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
    setLoad(false)
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchMovies();
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold my-8 text-center">Movie List</h1>

      <form onSubmit={handleSearchSubmit} className="mb-4">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 ml-2 rounded"
          >
            Cari
          </button>
        </div>
      </form>

      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p className="text-center">{load == false ? 'Data Kosong, Masukkan Kata Pencari Lainnya' : 'Loading...'}</p>
      )}
    </div>
  );
};

export default Home;
