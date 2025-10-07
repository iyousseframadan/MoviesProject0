# 🎬 Movie App

A **React-based Movie Explorer App** that lets users browse movies, search by title, view detailed information, and manage their own profile with authentication.

---

## 🚀 Live Demo
👉 [View Project Here](https://movies-project0-lose.vercel.app/)

---

## ✨ Features
- 🏠 **Home Page** with highlights & featured sections  
- 🔎 **Search Movies** using the [OMDb API](https://www.omdbapi.com/)  
- 📄 **Movie Details Page** (poster, plot, genre, rating, actors, etc.)  
- 🔐 **Authentication** (Register / Login / Logout) stored in `localStorage`  
- 👤 **Profile Page** – accessible only to logged-in users (Protected Route)  
- 📱 **Responsive UI** with modern dark theme  
- ⚡ **Routing & Navigation** using **React Router DOM**  
- 🎨 Clean design with reusable components  

---

## 🛠️ Tech Stack
- ⚛️ **React 18 + Vite**
- 📦 **React Router DOM**
- ✅ **React Hook Form** + **Yup** for form validation
- 🌐 **OMDb API** for fetching movie data
- 💾 **localStorage** for auth persistence
- 🎨 **CSS-in-JS (inline styles)** for simplicity

---

## 📂 Project Structure
src
├─ components/ # Navbar, ProtectedRoute
├─ context/ # AuthContext
├─ pages/ # Home, Movies, MovieDetails, Profile, Login, Register
├─ App.jsx
└─ main.jsx

---

---

## ⚡ Installation & Setup
```bash
# 1. Clone the repository
git clone https://github.com/yourusername/movie-app.git
cd movie-app

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
## 

👤 Author

Developed by Youssef Ramadan
