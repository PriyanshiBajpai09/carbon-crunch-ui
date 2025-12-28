import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? Feel free to reach out.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
