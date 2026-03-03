"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./landing.module.css";
import { GALLERY_IMAGES, SMOOTH_EASE } from "./landing-data";

export function GallerySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.gallerySection} id="gallery-grid">
      <motion.h2
        className={styles.galleryHeading}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: SMOOTH_EASE }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Random Captures & Production Frames
      </motion.h2>

      <div className={styles.galleryMasonry}>
        {GALLERY_IMAGES.map((image, index) => (
          <motion.article
            key={image.id}
            className={styles.galleryCard}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={
              prefersReducedMotion
                ? undefined
                : {
                    y: -10,
                    rotate: index % 2 === 0 ? -0.6 : 0.6,
                  }
            }
            transition={{
              duration: 0.62,
              delay: (index % 10) * 0.03,
              ease: SMOOTH_EASE,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={styles.galleryImage}
              sizes="(max-width: 700px) 94vw, (max-width: 1100px) 48vw, (max-width: 1600px) 32vw, 20vw"
            />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
