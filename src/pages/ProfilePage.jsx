import React from "react";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user, logout } = useAuth();

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>👤 Your Profile</h2>
        {user ? (
          <>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Member since:</strong>{" "}
              <em>
                {new Date().toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </em>
            </p>
            <button onClick={logout} style={styles.button}>
              Logout
            </button>
          </>
        ) : (
          <p>Please login to view your profile.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // يخلي المحتوى في النص عمودي
    padding: "2rem",
    backgroundColor: "#121212",
    minHeight: "80vh",
    color: "#eee",
  },
  box: {
    width: "100%",
    maxWidth: 600,
    background: "linear-gradient(135deg, #182648ff, #0d1525ff)", // لون متدرج أزرق بنفسجي
    padding: "2rem", // زودت شوية padding
    borderRadius: 12,
    boxShadow: "0 4px 8px rgba(255, 152, 0, 0.2)",
    textAlign: "center", // يخلي النصوص في النص أفقي
  },
  button: {
    marginTop: 12,
    padding: "8px 12px",
    borderRadius: 6,
    border: "none",
    background: "#e74c3c",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ProfilePage;
