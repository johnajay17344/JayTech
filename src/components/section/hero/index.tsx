import styles from "./hero.module.css"
import Link from "next/link"
import ParticlesBackground from "../../ui/ParticlesBackground/ParticlesBackground"

export default function HeroSection(){
    return(
        <section className={styles.container}>
            <ParticlesBackground 
                particleCount={120}
                particleColors={['#0088FF', '#00D4FF', '#0066CC', '#00B8D4']}
                speed={0.4}
                opacity={0.7}
            />
            <div className={styles.hero}>
            <h2 className={styles.herowrapper}>
                <span className={styles.span}>
                    Hi, I&apos;m
                </span>
                <button className={styles.button}>
  <span data-text="JOHN AJ">
    JOHN A JAY
  </span>
</button>
            </h2>
            
            <p className={styles.heroPara}>
                Hey, I&apos;m John Adekunle, a Full Stack Developer.
                I&apos;ve been working with Next.js and Node for the past three years, 
                building web applications that are fast, scalable and user-friendly.
                I like solving problems, learning new things, and experimenting with 
                different technologies. When I&apos;m not coding, I&apos;m probably working on a 
                side project or exploring something new
            </p>
            
            <Link href="#projects" className={styles.link}>
              VIEW PROJECTS
            </Link>
            </div>
        </section>
    )
}