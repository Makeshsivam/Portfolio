import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_x7vgn5k',     // replace with your service ID
        'template_edc53jc',    // replace with your template ID
        form.current,
        'ULrcOrA5-FF2SPFn1'      // replace with your public key (User ID)
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Failed to send the message, please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </section>
  );
}
