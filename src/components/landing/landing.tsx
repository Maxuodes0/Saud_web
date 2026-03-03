import styles from "./landing.module.css";
import { ClientsSection } from "./clients-section";
import { ContactSection } from "./contact-section";
import { GallerySection } from "./gallery-section";
import { HeroSection } from "./hero-section";
import { ProjectsSection } from "./projects-section";
import { SectionNav } from "./section-nav";

type LandingProps = {
  titleClassName: string;
};

export function Landing({ titleClassName }: LandingProps) {
  return (
    <main className={styles.landing}>
      <SectionNav />
      <HeroSection titleClassName={titleClassName} />
      <ProjectsSection titleClassName={titleClassName} />
      <GallerySection />
      <ClientsSection />
      <ContactSection titleClassName={titleClassName} />
    </main>
  );
}
