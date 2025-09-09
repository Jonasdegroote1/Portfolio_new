export default function ContactForm() {
  return (
    <form className="contact-form">
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
