import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="not-found">
      <img
        src="./game-over.png" 
        alt="Game Over"
        className="not-found__image"
      />
      <h1>404</h1>
      <p>Il semble que vous soyez perdu, héros.</p>
      <Link to="/" className="back-home">
        Retourner à Hyrule
      </Link>
    </div>
  );
}
