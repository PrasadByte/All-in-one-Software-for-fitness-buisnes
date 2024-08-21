import React, { useState } from "react";
import emailjs from "emailjs-com";
import videoSrc from "../video/cinematic-about-us.mp4"; // Corrected path
import "../style/aboutUs.css";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "    ",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const { name, email, message } = formData;

    // Send email using EmailJS
    emailjs
      .send(
        "service_hjdksfm", // Replace with your EmailJS service ID
        "template_udjm8ub", // Replace with your EmailJS template ID
        formData,
        "your_user_id" // Replace with your EmailJS user ID (optional)
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" }); // Clear form on success
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send your message. Please try again later.");
      });
  };

  return (
    <div className="container about-us">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="text-uppercase">Who We Are</h2>
          
            
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <video width="640" height="360" controls>
            <source src={videoSrc} type="video/mp4" />{" "}
            {/* Using the imported videoSrc */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-md-6">
          <p>
            At SD Fitness Club, we're dedicated to helping you achieve your
            fitness goals. Our state-of-the-art facilities and expert trainers
            will guide you every step of the way.
          </p>
          <p>
          <b>Join our community today and experience the SD Fitness Club  difference! </b>  
           
          </p>
          <a
            href="https://www.SDFitnees.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Our Website
          </a>
          <br />
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
