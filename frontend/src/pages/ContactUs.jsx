import React from "react";
import "../style/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="form-container flex-column">
        <div className="title-wrapper">
          <h4 className="topline">Contact</h4>
          <h1 className="title">Need Our Help? Feel Free to Contact Us.</h1>
        </div>

        <form id="contact-form">
          <div className="form-control">
            <div className="wrapper">
              <label htmlFor="name">
                <input type="text" id="name" placeholder="Name *" required />
              </label>
              <i className="fa-solid fa-user text-center"></i>
            </div>

            <div className="wrapper">
              <label htmlFor="email">
                <input type="email" id="email" placeholder="Email *" required />
              </label>
              <i className="fa-solid fa-envelope text-center"></i>
            </div>
          </div>

          <div className="form-control">
            <div className="wrapper">
              <label htmlFor="phone">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number *"
                  required
                />
              </label>
              <i className="fa-solid fa-phone text-center"></i>
            </div>

            <div className="wrapper">
              <label htmlFor="subject">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject *"
                  required
                />
              </label>
              <i className="fa-solid fa-file-alt text-center"></i>
            </div>
          </div>

          <div className="form-control">
            <div className="wrapper">
              <label htmlFor="country">
                <div className="country-select">Country :</div>
                <select name="country" defaultValue="none" required>
                  <option value="none" disabled hidden>
                    Select a Country
                  </option>
                  <option value="Croatia">Croatia</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Germany">Germany</option>
                  <option value="Poland">Poland</option>
                  <option value="Spain">Spain</option>
                  <option value="England">England</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Argentina">Argentina</option>
                </select>
              </label>
            </div>
          </div>

          <div className="form-control">
            <div className="wrapper">
              <label htmlFor="message">
                <textarea
                  id="message"
                  cols="40"
                  rows="10"
                  className="message-box"
                  placeholder="Message *"
                  required
                ></textarea>
              </label>
              <i className="fa-solid fa-pencil-alt text-center pencil-icon"></i>
            </div>
          </div>

          <div>
            <button className="submit-form" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="info-container grid">
        <div className="flex-info-container">
          <i className="fa-solid fa-phone info-icon"></i>
          <div className="wrapper">
            <h4>Phone</h4>
            <p className="cursor">8408929387</p>
          </div>
        </div>
        <div className="flex-info-container">
          <i className="fa-solid fa-envelope info-icon"></i>
          <div className="wrapper">
            <h4>Email</h4>
            <p className="cursor">SDfitness@gmail.com</p>
          </div>
        </div>
        <div className="flex-info-container">
          <i className="fa-solid fa-location-dot info-icon"></i>
          <div className="wrapper">
            <h4>Location</h4>
            <p>shrigonda</p>
          </div>
        </div>
      </div>

      <div className="google-maps-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963955.8431023782!2d73.58754337561591!3d19.306160776445545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc343dceb5efa87%3A0x51f88b8c560253ed!2sSD&#39;s%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1723400041963!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="google-maps"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
