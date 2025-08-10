import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("avengers");
  const [searchTerm, setSearchTerm] = useState("avengers");

  const fetchMovies = async (search) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=e46e36f4&s=${search}`
      );
      const data = await res.json();
      setMovies(data.Search || []);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setSearchTerm(query);
    }
  };

  return (
    <div style={styles.container}>
      <h1>🎬 Movie List</h1>

      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>

      {loading ? (
        <p style={{ color: "#eee" }}>Loading movies...</p>
      ) : (
        <div style={styles.grid}>
          {movies.map((movie) => (
            <Link
              to={`/movies/${movie.imdbID}`}
              key={movie.imdbID}
              style={styles.card}
            >
              <img src={movie.Poster} alt={movie.Title} style={styles.image} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "80px 20px 20px",
    backgroundColor: "#121212",
    minHeight: "100vh",
    color: "#eee",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #555",
    backgroundColor: "#333",
    color: "#eee",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    background: "#ff9800",
    color: "#121212",
    cursor: "pointer",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    border: "1px solid #444",
    borderRadius: "8px",
    padding: "10px",
    width: "200px",
    textAlign: "center",
    background: "#1e1e2e",
    textDecoration: "none",
    color: "#eee",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    borderRadius: "6px",
  },
};

export default MoviesPage;
