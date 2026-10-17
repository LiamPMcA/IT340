import { useState } from "react";
import "./App.css";

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
  },
  {
    id: 4,
    title: "Inception",
    year: 2010,
    genre: "Action",
  },
  {
    id: 5,
    title: "Goodfellas",
    year: 1990,
    genre: "Crime",
  },
  {
    id: 6,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    genre: "Action",
  },
  {
    id: 8,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
  },
  {
    id: 9,
    title: "The Green Mile",
    year: 1999,
    genre: "Drama",
  },
];

function App() {
  const [search, setTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  function toggleFav(movieId) {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId));
    }else {
      setFavorites([...favorites, movieId]);
    }
  }

  return (
    <div className="App">
      <h1>Movie Finder</h1>
      <p>Search for a movie or filter by genre</p>

      <input
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={(e) => setTerm(e.target.value)}
      />
      
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="All">All</option>
        <option value="Drama">Drama</option>
        <option value="Crime">Crime</option>
        <option value="Action">Action</option>
      </select>

      <p>Favorites: {favorites.length}</p>
      <p> Movies found: {filteredMovies.length}</p>

      {filteredMovies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div className="movie-list">
          {filteredMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Year: {movie.year}</p>
              <p>Genre: {movie.genre}</p>
              <button onClick={() => toggleFav(movie.id)}>
                {favorites.includes(movie.id) ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;