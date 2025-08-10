import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.email === data.email);
    if (userExists) {
      alert("Email already registered. Please login.");
      navigate("/login");
      return;
    }

    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully! Please login.");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Create account</h2>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <input
            placeholder="Name"
            {...register("name")}
            style={styles.input}
          />
          <p style={styles.error}>{errors.name?.message}</p>

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

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            style={styles.input}
          />
          <p style={styles.error}>{errors.confirmPassword?.message}</p>

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
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

export default RegisterPage;
