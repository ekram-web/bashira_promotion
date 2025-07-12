import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../../assets/images/ustaz/about.JPG";
import logoMark from "../../../assets/images/Basirah Logo Full Color(Transparent).png";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutLayout}>
        <div className={styles.aboutImageBox}>
          <img
            src={aboutImg}
            alt="About Basirah"
            className={styles.aboutImage}
          />
          <div className={styles.aboutLogoOverlay}>
            <img
              src={logoMark}
              alt="Basirah Logo Mark"
              className={styles.aboutLogo}
            />
          </div>
        </div>
        <div className={styles.aboutTextBox}>
          <h1 className={styles.aboutTitle}>WHO WE ARE</h1>
          <p className={styles.aboutText}>
            Basirah Institute is a leading Qur'anic education platform dedicated
            to empowering the next generation with authentic knowledge, modern
            tools, and a global community. Our mission is to make learning
            accessible, engaging, and relevant for everyone, everywhere. We
            blend tradition with technology to inspire and connect students and
            teachers worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
