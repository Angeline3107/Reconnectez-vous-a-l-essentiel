import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-section">
        <header>
          <h1>Nous Contacter</h1>
          <p>
            Pour toute question, suggestion, ou pour rejoindre notre communauté,
            n'hésitez pas à nous contacter via le formulaire ci-dessous. Nous
            serons ravis de vous répondre.
          </p>
        </header>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>

        <section className="contact-details">
          <h2>Nos Coordonnées</h2>
          <p>Téléphone : 01 23 45 67 89</p>
          <p>Email : contact@detenteenborddemer.com</p>
          <p>Adresse : 123 Rue de la Plage, 17580 Ile de Ré, France</p>
        </section>

        <section className="testimonials">
          <h2>Nos Témoignages</h2>
          <div className="testimonial">
            <img src="../../src/images/Photo profil 1.webp" alt="User 1" />
            <p>
              "Superbe expérience, détente et sérénité assurées ! <l>Victor.</l>
              "
            </p>
          </div>
          <div className="testimonial">
            <img src="../../src/images/photo profil 2.webp" alt="User 2" />
            <p>
              "Un endroit paradisiaque, parfait pour se ressourcer. <l>Anna.</l>
              "
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
