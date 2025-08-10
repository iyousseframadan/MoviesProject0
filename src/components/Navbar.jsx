import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <span role="img" aria-label="movie">
          🎬
        </span>{" "}
        Movies Explorer
      </div>
      <ul style={styles.navList}>
        <li>
          <NavLink
            to="/"
            style={styles.link}
            activeStyle={styles.activeLink}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Profile
          </NavLink>
        </li>
        {user ? (
          <li>
            <button onClick={logout} style={styles.button}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/login" style={styles.linkButton}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" style={styles.linkButton}>
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#121212",
    color: "#eee",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0,0,0,0.8)",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: 12,
    margin: 0,
    padding: 0,
    alignItems: "center",
    flexWrap: "wrap",
  },
  link: {
    color: "#eee",
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: 5,
    transition: "background-color 0.3s ease",
  },
  activeLink: {
    backgroundColor: "#ff9800",
    color: "#121212",
  },
  button: {
    backgroundColor: "#e74c3c",
    border: "none",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 5,
    cursor: "pointer",
    fontWeight: "bold",
  },
  linkButton: {
    backgroundColor: "#ff9800",
    padding: "6px 12px",
    borderRadius: 5,
    color: "#121212",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
