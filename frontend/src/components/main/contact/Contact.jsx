import React from "react";
import styles from "./Contact.module.css";
import basirahLogo from "../../../assets/images/Basirah Logo Full Color(Transparent).png";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      {/* Left Panel: Map, Logo, Text */}
      <div className={styles.leftPanel}>
        <div className={styles.mapCard}>
          <iframe
            title="Basirah Location Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=31.2357%2C30.0444%2C31.2457%2C30.0544&amp;layer=mapnik"
            style={{
              width: "100%",
              height: "120px",
              border: 0,
              borderRadius: "12px",
            }}
            allowFullScreen=""
            loading="lazy"
            aria-label="Basirah location map"
          ></iframe>
        </div>
        <img
          src={basirahLogo}
          alt="Basirah logo"
          className={styles.logoSmall}
        />
        <div className={styles.inviteText}>
          <h2 style={{ fontFamily: "'Merriweather', serif", fontWeight: "600" }}>
            Let's Connect!
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: "400" }}>
            We're here to help you grow, learn, and connect. Reach out to
            Basirah for support, partnership, or just to say hello.
          </p>
        </div>
      </div>
      {/* Right Panel: Minimal Form with Icons */}
      <form
        className={styles.glassForm}
        autoComplete="off"
        aria-label="Contact Basirah form"
      >
        <div 
          className={styles.formTitle}
          style={{ fontFamily: "'Merriweather', serif", fontWeight: "600" }}
        >
          Contact Basirah
        </div>
        <div className={styles.inputGroup}>
          <FiUser className={styles.inputIcon} />
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <FiMail className={styles.inputIcon} />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            required
          />
        </div>
        <div className={styles.textareaGroup}>
          <FiMessageCircle className={styles.textareaIcon} />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Your Message"
            rows={5}
            aria-label="Your Message"
            required
          ></textarea>
        </div>
        <button
          className={styles.submitBtn}
          type="submit"
          aria-label="Send Message"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
