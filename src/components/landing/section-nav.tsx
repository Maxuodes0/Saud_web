 "use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./landing.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery-grid" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
] as const;

export function SectionNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <nav className={styles.sectionNav} aria-label="Section navigation">
      <ul className={styles.sectionNavList}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a className={styles.sectionNavLink} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={styles.sectionNavToggle}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <ul
        className={`${styles.sectionNavMobilePanel} ${
          isOpen ? styles.sectionNavMobilePanelOpen : ""
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <li key={`${item.href}-mobile`}>
            <a
              className={styles.sectionNavMobileLink}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
