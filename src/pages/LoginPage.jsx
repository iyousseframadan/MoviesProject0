import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const from = location.state?.from?.pathname || "/profile";

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (foundUser) {
      login({ name: foundUser.name, email: foundUser.email });
      alert("Login successful!");
      navigate(from, { replace: true });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <input
            placeholder="Email"
            {...register("email")}
            style={styles.input}
          />
          <p style={styles.error}>{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            style={styles.input}
          />
          <p style={styles.error}>{errors.password?.message}</p>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  body: {
    
    backgroundColor: "#121212",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "#121212",
  },
  box: {
    width: "100%",
    maxWidth: 420,
    background: "#1e1e2e",
    padding: "1.6rem",
    borderRadius: 10,
    boxShadow: "0 6px 20px rgba(0,0,0,0.8)",
    color: "#eee",
  },
  title: { margin: 0, marginBottom: 12, textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: 8 },
  input: {
    padding: "10px",
    borderRadius: 6,
    border: "1px solid #555",
    fontSize: 14,
    backgroundColor: "#333",
    color: "#eee",
  },
  button: {
    marginTop: 8,
    padding: "10px",
    borderRadius: 6,
    border: "none",
    background: "#ff9800",
    color: "#121212",
    cursor: "pointer",
    fontWeight: "bold",
  },
  error: { color: "#ff6b6b", margin: 0, fontSize: 13 },
};

export default LoginPage;
