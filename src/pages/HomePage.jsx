import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎬 Movies Explorer</h1>
      <p style={styles.subtitle}>
        Your ultimate destination to discover, rate, and track movies!
      </p>

      <img
        src="https://images.unsplash.com/photo-1483016740221-2f428bfd0aab?q=80&w=833&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80"
        alt="Cinema screen"
        style={styles.image}
      />

      <div style={styles.features}>
        <div style={styles.card}>
          <h3>🔥 Trending Movies</h3>
          <p>Discover what's hot and popular right now.</p>
        </div>
        <div style={styles.card}>
          <h3>⭐ Personalized Lists</h3>
          <p>Save your favorites and watch later.</p>
        </div>
        <div style={styles.card}>
          <h3>🎯 Accurate Ratings</h3>
          <p>Get ratings from real movie lovers.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "70px 20px 20px", // 70px padding top لتحت الـ navbar المثبت
    textAlign: "center",
    backgroundColor: "#121212",
    minHeight: "100vh",
    color: "#eee",
  },
  title: { fontSize: "2rem", marginBottom: "8px" },
  subtitle: { fontSize: "1.1rem", marginBottom: "15px", color: "#bbb" },
  image: {
    width: "100%",
    maxWidth: "650px",
    borderRadius: "10px",
    marginBottom: "20px",
    objectFit: "cover",
    height: "300px",
  },
  features: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    background: "#1e1e2e",
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(255, 152, 0, 0.2)",
    width: "220px",
    color: "#eee",
  },
};

export default HomePage;
