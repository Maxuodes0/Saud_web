"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import styles from "./landing.module.css";
import {
  CONTACT_HEADING,
  CONTACT_INFO_BLOCKS,
  CONTACT_SUBTITLE,
  SOCIAL_ACCOUNTS,
  SMOOTH_EASE,
  type SocialAccount,
} from "./landing-data";

const socialIconMap: Record<SocialAccount["icon"], LucideIcon> = {
  instagram: Instagram,
  x: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
  email: Mail,
};

type ContactSectionProps = {
  titleClassName: string;
};

export function ContactSection({ titleClassName }: ContactSectionProps) {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactShell}>
        <motion.div
          className={styles.contactLeft}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: SMOOTH_EASE }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className={`${titleClassName} ${styles.contactHeroTitle}`}>
            {CONTACT_HEADING}
          </h2>
          <p className={styles.contactHeroSubtitle}>{CONTACT_SUBTITLE}</p>

          <div className={styles.contactInfoGrid}>
            {CONTACT_INFO_BLOCKS.map((item, index) => (
              <motion.article
                key={item.title}
                className={styles.contactInfoCard}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: SMOOTH_EASE }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <h3 className={styles.contactInfoTitle}>{item.title}</h3>
                <p className={styles.contactInfoDescription}>{item.description}</p>
                <a className={styles.contactInfoCta} href={item.href}>
                  {item.cta}
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.form
          className={styles.contactFormPanel}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: SMOOTH_EASE, delay: 0.12 }}
          viewport={{ once: true, amount: 0.25 }}
          onSubmit={(event) => event.preventDefault()}
        >
          <label className={styles.contactField}>
            <span>Full Name</span>
            <input type="text" name="name" autoComplete="name" />
          </label>

          <label className={styles.contactField}>
            <span>Company</span>
            <input type="text" name="company" autoComplete="organization" />
          </label>

          <label className={styles.contactField}>
            <span>Email Address</span>
            <input type="email" name="email" autoComplete="email" />
          </label>

          <label className={styles.contactField}>
            <span>Tell us about your project</span>
            <textarea name="project" rows={7} />
          </label>

          <label className={styles.contactAgreement}>
            <input type="checkbox" name="terms" />
            <span>I accept Terms & Privacy Policy.</span>
          </label>

          <button type="submit" className={styles.contactSubmitButton}>
            Send Message
          </button>
        </motion.form>
      </div>

      <motion.div
        className={styles.contactSocialRow}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: SMOOTH_EASE, delay: 0.2 }}
        viewport={{ once: true, amount: 0.35 }}
      >
        {SOCIAL_ACCOUNTS.map((account) => {
          const Icon = socialIconMap[account.icon];

          return (
            <a
              key={account.id}
              className={styles.contactSocialIcon}
              href={account.href}
              aria-label={account.platform}
              title={account.platform}
            >
              <Icon />
            </a>
          );
        })}
      </motion.div>
    </section>
  );
}
