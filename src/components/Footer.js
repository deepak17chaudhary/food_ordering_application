import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Email: contact@fooddeliveryapp.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
          <div className="footer-section">
            <h2>Terms of Service</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
        <div className="footer-bottom">&copy; 2023 Insta Food</div>
      </footer>
    </div>
  );
};

export default Footer;
