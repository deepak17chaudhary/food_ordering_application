import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-content">
        <section className="contact-section">
          <h2>Reach Out to Us</h2>
          <p>
            Have any questions or feedback? Feel free to get in touch with us.
            We are always here to help and provide you with the best experience.
          </p>
        </section>
        <section className="contact-section">
          <h2>Contact Information</h2>
          <p>Email: info@instafood.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 1234 Instafood Street, City, Country</p>
        </section>
        <section className="contact-section">
          <h2>Connect With Us</h2>
          <p>
            Stay updated with our latest offerings and news by following us on
            social media.
          </p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
