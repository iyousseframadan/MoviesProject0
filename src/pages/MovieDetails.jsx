import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=e46e36f4&i=${id}&plot=full`
        );
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading)
    return <p style={{ padding: 20, color: "#eee" }}>Loading details...</p>;
  if (!movie)
    return <p style={{ padding: 20, color: "#eee" }}>Movie not found.</p>;

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/800x500?text=No+Image";

  return (
    <div style={styles.outer}>
      <div style={styles.container}>
        <img src={poster} alt={movie.Title} style={styles.poster} />
        <div style={styles.details}>
          <h1 style={styles.title}>{movie.Title}</h1>
          <p style={styles.info}>
            <strong>Year:</strong> {movie.Year} | <strong>Genre:</strong>{" "}
            {movie.Genre}
          </p>
          <p style={styles.plot}>{movie.Plot}</p>

          <div style={styles.moreInfo}>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}
            </p>
          </div>

          <Link to="/movies" style={styles.backLink}>
            ⬅ Back to Movies
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  outer: {
    padding: "70px 20px 20px",
    backgroundColor: "#121212",
    minHeight: "100vh",
    color: "#eee",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: 800,
    background: "#1e1e2e",
    boxShadow: "0 4px 12px rgba(0,0,0,0.8)",
    borderRadius: 10,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  poster: {
    width: "100%",
    height: "auto",
    maxHeight: 500,
    objectFit: "cover",
  },
  details: {
    padding: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: "1.8rem",
  },
  info: {
    color: "#bbb",
    fontSize: "0.95rem",
  },
  plot: {
    marginTop: 20,
    lineHeight: 1.6,
    fontSize: "1rem",
  },
  moreInfo: {
    marginTop: 20,
    fontSize: "0.95rem",
  },
  backLink: {
    display: "inline-block",
    marginTop: 20,
    padding: "10px 20px",
    background: "#ff9800",
    color: "#121212",
    textDecoration: "none",
    borderRadius: 5,
    fontSize: "0.95rem",
  },
};

export default MovieDetails;
