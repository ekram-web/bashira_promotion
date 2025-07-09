import React, { useEffect, useRef } from 'react';
import styles from './offer.module.css';

const WhatWeOffer = () => {
  
  const cardsRef = useRef([]);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    const rotateCards = () => {
      let angle = 0;
      cardsRef.current.forEach((card, index) => {
        if (card.classList.contains(styles.away)) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle -= 10;
          card.style.zIndex = cardsRef.current.length - index;
        }
      });
    };

    const handleScroll = () => {
      if (!scrollWrapperRef.current) return;

      const scrollTop = scrollWrapperRef.current.scrollTop;
      const distance = window.innerHeight * 0.5;
      const index = Math.floor(scrollTop / distance);

      // Update card classes
      cardsRef.current.forEach((card, i) => {
        if (i <= index) {
          card.classList.add(styles.away);
        } else {
          card.classList.remove(styles.away);
        }
      });

      rotateCards();

      // Unlock scroll if all cards are gone
      if (index >= cardsRef.current.length) {
        scrollWrapperRef.current.classList.add(styles.scrollWrapperReleased);
      } else {
        scrollWrapperRef.current.classList.remove(styles.scrollWrapperReleased);
      }
    };

    if (scrollWrapperRef.current) {
      rotateCards();
      scrollWrapperRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollWrapperRef.current) {
        scrollWrapperRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className={styles.section} id="offer">
    <div className={styles.scrollWrapper} ref={scrollWrapperRef}>
      <div className={styles.stackArea}>
        <div className={styles.left}>
          <div className={styles.title}>What We Offer</div>
          <div className={styles.subTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente qui
            quis, facere, cupiditate, doloremque natus ex perspiciatis ratione hic
            corrupti adipisci ea doloribus!
            <br />
          </div>
        </div>
        <div className={styles.right}>
          {[
            ['Simplified', 'Complex tasks are now simple'],
            ['Boost Productivity', 'Perform Tasks in less time'],
            ['Facilitated learning', 'Train anyone from anywhere'],
            ['Support', 'Now it’s 24/7 support'],
          ].map(([sub, content], index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.sub}>{sub}</div>
              <div className={styles.content}>{content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default WhatWeOffer;
