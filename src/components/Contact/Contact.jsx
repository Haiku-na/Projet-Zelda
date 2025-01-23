import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Remplacez par votre ID de service
        "your_template_id", // Remplacez par votre ID de modèle
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "your_user_id" // Remplacez par votre clé utilisateur (API key)
      )
      .then(
        (response) => {
          console.log("Email envoyé avec succès :", response.status, response.text);
          alert("Votre message a été envoyé avec succès !");
        },
        (err) => {
          console.error("Échec de l'envoi :", err);
          alert("Une erreur est survenue lors de l'envoi du message.");
        }
      );
  };

  return (
    <div>
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
