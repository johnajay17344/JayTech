import styles from "./about.module.css";
import { About } from "./data";
import Button from "@/components/ui/Button/Button";
import SocialIcons from "@/components/ui/SocialIcons/SocialIcons"

export default function AboutSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {About.header}
          </h1>
          {About.paragraph.map((text, index) => (
          <p key={index} className={styles.text}>
            {text}
          </p>
        ))}

        <SocialIcons />   
        <Button href={About.href} className={styles.downloadBtn} download={true}>
          {About.ButtonText}
        </Button>
      </div>
    </section>
  );
}