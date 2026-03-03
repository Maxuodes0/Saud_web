"use client";

import { motion } from "framer-motion";
import styles from "./landing.module.css";
import { HERO_SUBTITLE, HERO_TITLE_WORDS, SMOOTH_EASE } from "./landing-data";

type HeroSectionProps = {
  titleClassName: string;
};

export function HeroSection({ titleClassName }: HeroSectionProps) {
  return (
    <section className={styles.heroSection} id="home">
      <video
        className={styles.landingVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/photographer-studio-cinematic.mp4" type="video/mp4" />
      </video>

      <div className={styles.landingOverlay} />

      <section className={styles.landingContent}>
        <h1 className={`${titleClassName} ${styles.landingTitle}`}>
          {HERO_TITLE_WORDS.map((word, index) => (
            <motion.span
              key={word}
              className={styles.landingWord}
              initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.25 + index * 0.16,
                ease: SMOOTH_EASE,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className={styles.landingSubtitle}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: SMOOTH_EASE }}
        >
          {HERO_SUBTITLE}
        </motion.p>
      </section>
    </section>
  );
}
