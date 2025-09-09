"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(""); // voor feedback

  const handleSubmit = async (e) => {
    e.preventDefault(); // voorkom redirect
    const form = e.target;

    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqadnpln", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Naam</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Jouw naam"
        required
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="jouw@email.com"
        required
      />

      <label htmlFor="message">Bericht</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder="Vertel me over jouw project..."
        required
      ></textarea>

      <button type="submit" className="btn btn-primary">
        ✈ Verstuur Bericht
      </button>
    </form>
  );
}
