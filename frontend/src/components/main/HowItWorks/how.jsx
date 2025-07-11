import React from "react";
import styles from "./how.module.css";
import { motion } from "framer-motion";

const steps = [
  {
    label: "Step 1",
    title: "Sign Up ",
    desc: "Create your account and unlock a world of connections with the Quran.",
    img: "https://framerusercontent.com/images/qyVoyGkt2hIvTpDbMsKP8IDzV4k.svg",
  },
  {
    label: "Step 2",
    title: "Register on your preferred Courses",
    desc: "Select , Subscribe and Learn",
    img: "https://framerusercontent.com/images/fZKgU9NskcdakiKIeEu1PszpIc0.svg",
  },
  {
    label: "Step 3",
    title: "Start Nurturing you mind",
    desc: "Enjoy Your Journey",
    img: "https://framerusercontent.com/images/SGEfviCDbC0m2kfFJ5Dheq0Wd0.svg",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.section} id="how">
      <div className={styles.container}>
        {/* LEFT STICKY SECTION */}
        <div className={styles.leftSticky}>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get Started In Just <br />
            <span>3 simple Steps.</span>
          </motion.h2>
          <motion.p
            className={styles.subheading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Three simple steps to unlock the power of Quran and revolutionize your Life.
          </motion.p>
        </div>

        {/* RIGHT SCROLLABLE CARDS */}
        <div className={styles.rightScroll}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <p className={styles.stepLabel}>{step.label}</p>
              <h4 className={styles.cardTitle}>{step.title}</h4>
              <p className={styles.cardDesc}>{step.desc}</p>
              <div className={styles.imageWrap}>
                <img src={step.img} alt={`Visual for ${step.label}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
