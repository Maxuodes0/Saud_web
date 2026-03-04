"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./landing.module.css";
import { PROJECT_CARDS, PROJECTS_HEADING_WORDS, SMOOTH_EASE } from "./landing-data";

type ProjectsSectionProps = {
  titleClassName: string;
};

export function ProjectsSection({ titleClassName }: ProjectsSectionProps) {
  return (
    <section className={styles.projectsSection} id="services">
      <h2 className={`${titleClassName} ${styles.projectsHeading}`}>
        {PROJECTS_HEADING_WORDS.map((word, index) => (
          <motion.span
            key={word}
            className={styles.projectsHeadingWord}
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.62, delay: index * 0.07, ease: SMOOTH_EASE }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      <div className={styles.projectsRailWrap}>
        <div className={styles.projectsRail}>
          {PROJECT_CARDS.map((card, index) => (
            <motion.article
              key={card.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.08 * index,
                ease: SMOOTH_EASE,
              }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 900px) 246px, (max-width: 1400px) 21vw, 370px"
                className={styles.projectImage}
              />
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.52,
                  delay: 0.22 + index * 0.09,
                  ease: SMOOTH_EASE,
                }}
                viewport={{ once: true, amount: 0.35 }}
              >
                {card.title}
              </motion.p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
