import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import "../CSS/Contact.css";
function Contact(props) {
  // const mode = useSelector((state) => state.mode);
  const mode = localStorage.getItem("thememode");
  return (
    <div className="contact">
      <Navbar />
      <div className="contact-content">
        <div className="contact-form">
          <h2 className={mode === "dark" ? "dark-contact-title" : ""}>
            Contact Us
          </h2>
          <div className="name-email">
            <div className="contact-input">
              <p className="contact-input-label">Your Name</p>
              <input
                type="text"
                name="name"
                className={
                  mode === "dark"
                    ? "contact-name dark-contact-name"
                    : "contact-name"
                }
                placeholder="Your Name"
              />
            </div>
            <div className="contact-input">
              <p className="contact-input-label">Email</p>
              <input
                type="email"
                name="email"
                className={
                  mode === "dark"
                    ? "contact-name dark-contact-name"
                    : "contact-name"
                }
                placeholder="abc@xyz.com"
              />
            </div>
          </div>
          <div className="contact-input">
            <p className="contact-input-label">Message</p>
            <textarea
              name="message"
              className={
                mode === "dark"
                  ? "contact-message dark-contact-name"
                  : "contact-message"
              }
              placeholder="Your Message Here"
            ></textarea>
          </div>
          <button className="contact-submit-btn">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
