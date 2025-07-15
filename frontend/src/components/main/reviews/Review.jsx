import React, { useState, useEffect, useRef } from "react";
import styles from "./review.module.css";
import ustazImg from "../../../assets/images/ustaz/ustaz_k.png";

const reviews = [
  {
    name: "Fatima Ali",
    role: "Student",
    text: "Basirah Institute has transformed my understanding of the Qur'an. The resources and teachers are amazing!",
    img: ustazImg,
  },
  {
    name: "Dr. Ahmed Yusuf",
    role: "Scholar",
    text: "A wonderful platform for both beginners and advanced learners. Highly recommended for anyone seeking knowledge.",
    img: ustazImg,
  },
  {
    name: "Mohammed Salim",
    role: "Parent",
    text: "My children love the interactive lessons. The app is easy to use and very educational.",
    img: ustazImg,
  },
  {
    name: "Aisha Noor",
    role: "Teacher",
    text: "The app's features make teaching so much easier and more interactive. My students are more engaged than ever!",
    img: ustazImg,
  },
  {
    name: "Omar Khalid",
    role: "Student",
    text: "I love the live classes and the supportive community. Basirah is the best!",
    img: ustazImg,
  },
  {
    name: "Layla Hassan",
    role: "Parent",
    text: "Basirah's resources are top-notch. My kids are learning so much!",
    img: ustazImg,
  },
];

function getCardsToShow() {
  return window.innerWidth < 800 ? 1 : 2;
}

function Review() {
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Clamp index if cardsToShow changes
    if (index > reviews.length - cardsToShow) {
      setIndex(Math.max(0, reviews.length - cardsToShow));
    }
  }, [cardsToShow, index]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [cardsToShow, index]);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev <= 0 ? reviews.length - cardsToShow : prev - 1));
    startAutoSlide();
  };

  const handleNext = () => {
    setIndex((prev) =>
      prev >= reviews.length - cardsToShow ? 0 : prev + 1
    );
    startAutoSlide();
  };

  // Slider width is (number of cards / cardsToShow) * 100%
  const sliderWidth = `${(reviews.length / cardsToShow) * 100}%`;
  // Each card takes up 100/reviews.length % of the visible area
  const cardWidth = `${92 / reviews.length}%`;
  // Move by one card width each time
  const translateX = `-${index * (100 / reviews.length)}%`;

  return (
    <section className={styles.reviewSection}>
      <h2 className={styles.heading}>What People Say About Us</h2>
      <div className={styles.reviewsWrapper}>
        
        <div
          className={styles.slider}
          style={{
            width: sliderWidth,
            transform: `translateX(${translateX})`,
          }}
        >
          {reviews.map((review, idx) => (
            <div
              className={styles.reviewCard}
              key={idx}
              style={{ flex: `0 0 ${cardWidth}`, maxWidth: cardWidth }}
            >
              <img
                src={review.img}
                alt={review.name}
                className={styles.avatar}
              />
              <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
              <div className={styles.reviewer}>
                <span className={styles.name}>{review.name}</span>
                <span className={styles.role}>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.arrowDiv}>
          <button
            className={`${styles.arrowBtn} ${styles.leftArrow}`}
            onClick={handlePrev}
            aria-label="Previous reviews"
          >
            &#8592;
          </button>
          <button
            className={`${styles.arrowBtn} ${styles.rightArrow}`}
            onClick={handleNext}
            aria-label="Next reviews"
          >
            &#8594;
          </button>
        </div>
    </section>
  );
}

export default Review;
