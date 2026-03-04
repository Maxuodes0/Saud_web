"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./landing.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery-grid" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
] as const;

export function SectionNav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setIsMobileOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
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
      <button
        type="button"
        className={styles.sectionNavToggle}
        aria-label={isMobileOpen ? "Close section menu" : "Open section menu"}
        aria-expanded={isMobileOpen}
        onClick={() => setIsMobileOpen((prev) => !prev)}
      >
        {isMobileOpen ? <X /> : <Menu />}
      </button>

      <ul
        className={`${styles.sectionNavList} ${
          isMobileOpen ? styles.sectionNavListMobileOpen : ""
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              className={styles.sectionNavLink}
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
