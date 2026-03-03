"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import styles from "./landing.module.css";
import { CLIENTS_STRIP_LABEL, SAUDI_CLIENT_LOGOS, SMOOTH_EASE } from "./landing-data";

const toneClassMap = {
  white: styles.clientToneWhite,
  sky: styles.clientToneSky,
  mint: styles.clientToneMint,
  violet: styles.clientToneViolet,
  gold: styles.clientToneGold,
} as const;

export function ClientsSection() {
  return (
    <motion.section
      className={styles.clientsSection}
      id="clients"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: SMOOTH_EASE }}
      viewport={{ once: true, amount: 0.35 }}
    >
      <div className={styles.clientsInner}>
        <motion.p
          className={styles.clientsLabel}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: SMOOTH_EASE }}
          viewport={{ once: true, amount: 0.7 }}
        >
          {CLIENTS_STRIP_LABEL}
        </motion.p>

        <Marquee
          pauseOnHover
          speed={30}
          className={styles.clientsMarquee}
          trackClassName="py-1 sm:py-2"
        >
          {SAUDI_CLIENT_LOGOS.map((logo) => (
            <div key={logo.id} className={styles.clientLogoItem} aria-label={logo.label}>
              <span
                className={`${styles.clientLogoWordmark} ${toneClassMap[logo.tone]}`}
              >
                {logo.label}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
}
