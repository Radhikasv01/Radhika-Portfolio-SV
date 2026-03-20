import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;