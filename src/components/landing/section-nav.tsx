import styles from "./landing.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery-grid" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
] as const;

export function SectionNav() {
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
    </nav>
  );
}
