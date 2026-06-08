import styles from "./about.module.css";
import SocialIcons from "@/components/ui/SocialIcons/SocialIcons";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
            I&apos;m <span>John Akinlade</span>, a Full Stack Developer
            [Backend-Centric] & DevOps Engineer building scalable and efficient systems.
          </h1>

          <p className={styles.text}>
            I&apos;m currently pursuing my masters in Computational Chemistry while
            transitioning into tech as a full-stack developer. I specialize in
            backend development and modern web technologies, transforming ideas
            into scalable, production-ready applications.
          </p>

          <p className={styles.text}>
            I&apos;m passionate about <span>Web Development, APIs, DevOps, and Blockchain</span>,
            constantly learning and building projects that improve my problem-solving
            and software engineering skills.
          </p>
        <SocialIcons />
    
        <button className={styles.downloadBtn}>
          ↓ Download
        </button>
      </div>
    </section>
  );
}