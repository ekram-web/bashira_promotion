import React, { useEffect, useState } from "react";
import styles from "./promote.module.css";
import phoImg from "../../../assets/images/pho.png";
import qrImg from "../../../assets/images/qr.jpg";
import skylinkLogo from "../../../assets/skylink.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import quranImg from "../../../assets/images/quran.png";
import qrImg2 from "../../../assets/images/qr.jpg";
import skylinkImg from "../../../assets/images/skylink.jpeg";

function Promotion() {
  // Placeholder screen images (replace with real ones later)
  const screenImages = [quranImg, qrImg2, skylinkImg];
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        setCurrentScreen((prev) => (prev + 1) % screenImages.length);
        setIsRotating(false);
      }, 900); // match animation duration
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.promotionBest} id="app">
      <div className={styles.leftSection}>
        <div
          className={`${styles.frame} ${isRotating ? styles.rotate : ""}`}
          style={{ width: 220, height: 440 }}
        >
          <div
            className={styles.frameInner}
          >
            <img
              src={screenImages[currentScreen]}
              alt="App screen"
              className={styles.frameImage}
            />
          </div>
        </div>
        <div className={styles.poweredBySkylink}>
          <span>Powered by</span>
          <img
            src={skylinkLogo}
            alt="Skylink logo"
            className={styles.skylinkLogo}
          />
        </div>
      </div>
      <div className={styles.promoRight}>
        <h2 className={styles.promoHeadline}>Get the Basirah App</h2>
        <div className={styles.promoBenefit}>
          Experience seamless learning and teaching—anytime, anywhere.
        </div>
        <div className={styles.downloadRow}>
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.promoDownloadBtn}
          >
            <FontAwesomeIcon
              icon={faAppStoreIos}
              className={styles.promoBtnIcon}
            />
            Download on App Store
          </a>
          <div className={styles.qrContainerSmall}>
            <img
              src={qrImg}
              alt="Download Basirah App QR"
              className={styles.qrImageSmall}
            />
            <div className={styles.qrLabelSmall}>Scan</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
