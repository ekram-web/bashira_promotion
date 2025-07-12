import React, { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import quranImg from "../../../assets/images/quran.png";

const slides = [
  {
    title: "Empower Your Qur'anic Journey",
    subtitle:
      "Learn, connect, and grow with Basirah Institute's modern tools and global community.",

    bg: "linear-gradient(120deg, #042048 60%, #01AD88 100%)",
  },
  {
    title: "Expert Teachers, Authentic Resources",
    subtitle:
      "Access certified scholars, interactive lessons, and a supportive learning environment—anytime, anywhere.",

    bg: "linear-gradient(120deg, #042048 60%, #01AD88 100%)",
  },
  {
    title: "Interactive Learning, Real Progress",
    subtitle:
      "Track your Qur'anic studies, join live classes, and connect with a global community—all in one app.",

    bg: "linear-gradient(120deg, #042048 60%, #01AD88 100%)",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [vertical, setVertical] = useState(false);
  const timeoutRef = useRef(null);
  const [textFade, setTextFade] = useState("textFadeIn");

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setTextFade("textFadeOut");
      setVertical(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setVertical(false);
        setTextFade("textFadeIn");
      }, 1200); // duration of vertical slide and fade
    }, 3000); // interval between slides
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const slide = slides[current];

  return (
    <section id="hero" className={styles.heroRedesign} style={{ background: slide.bg }}>
      <div className={styles.heroText} style={{ textAlign: "left" }}>
        <h1
          key={slide.title}
          className={styles.heroTitle + " " + styles[textFade]}
        >
          {slide.title}
        </h1>
        <p
          key={slide.subtitle}
          className={styles.heroSubtitle + " " + styles[textFade]}
        >
          {slide.subtitle}
        </p>
      </div>
      <div className={styles.heroImageBox}>
        {/* <div className={styles.heroImageGlow}></div> */}
        <img
          src={quranImg}
          alt="Basirah App on Phone"
          className={
            styles.heroImage +
            " " +
            (vertical ? styles.slideUp : styles.slideDown)
          }
        />
      </div>
    </section>
  );
}

export default Hero;
