import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home"; 
import { Routes, Route  } from "react-router";
import Footer from "./layout/Footer/Footer.jsx"
import Header from "./layout/Header/Header.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <App />
    <Footer/>
    </BrowserRouter>
  </StrictMode>
)
