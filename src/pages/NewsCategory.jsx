import React from "react";
import { useParams } from "react-router-dom";

const NewsCategory = () => {
  const { category } = useParams();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Category: {category}</h1>
      <p style={styles.text}>Here you will find news related to {category}.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    backgroundColor: "#121212",
    color: "#eee",
    minHeight: "80vh",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: 10,
  },
  text: {
    fontSize: "1.1rem",
    color: "#bbb",
  },
};

export default NewsCategory;
