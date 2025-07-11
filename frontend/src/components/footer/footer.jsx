import React from "react";
import styles from "./footer.module.css";
import logo from "../../assets/images/Basirah Full Color Transparent.png";
import skylink from "../../assets/images/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}></div>
      <div className={styles.footerContent}>
        <div className={styles.leftColumn}>
          <div className={styles.logoBlock}>
            <img src={logo} alt="Basirah Logo" className={styles.footerLogo} />
            <div className={styles.poweredBy}>
              <p>Powered by</p>
              <img src={skylink} alt="Partner Logo" className={styles.partnerLogo} />
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.footerAddress}>
            <strong>Address:</strong>
            <br />
            123 Qur'anic Studies Ave, City, Country
          </div>
          <div className={styles.footerPhone}>
            <strong>Phone:</strong> +123 456 7890
          </div>
          <div className={styles.socials}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
