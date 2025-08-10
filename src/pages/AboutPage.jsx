import React from "react";

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.heading}>ℹ️ About Movies Explorer</h1>
        <p style={styles.text}>
          Movies Explorer is a platform for movie enthusiasts to explore
          trending films, read ratings, and save favorites. Whether you love
          blockbusters or indie gems, we've got something for everyone.
        </p>

        <h2 style={styles.subHeading}>📌 Our Mission</h2>
        <p style={styles.text}>
          To connect movie lovers worldwide and help them discover their next
          favorite film.
        </p>

        <img
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=900&q=80"
          alt="Cinema theme"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "calc(100vh - 60px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
    padding: "20px",
  },
  box: {
    backgroundColor: "#1e1e1e",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    maxWidth: "700px",
    width: "100%",
  },
  heading: {
    margin: "0 0 15px 0",
    color: "#fff",
  },
  subHeading: {
    margin: "20px 0 10px 0",
    color: "#f5c518", // لون ذهبي يوحي بالسينما
  },
  text: {
    fontSize: "1rem",
    color: "#bbb",
    lineHeight: 1.5,
    margin: "5px 0 15px 0",
  },
  image: {
    marginTop: "15px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "10px",
  },
};

export default AboutPage;
