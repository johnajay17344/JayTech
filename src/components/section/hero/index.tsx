import styles from "./hero.module.css"
import ParticlesBackground from "../../ui/ParticlesBackground/ParticlesBackground"
import Button from "@/components/ui/Button/Button"

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
                An aspiring Full Stack Developer passionate about building sleek web experiences.
            </p>
            
            <Button href="#projects" className={styles.link}>
              VIEW PROJECTS
            </Button>
            </div>
        </section>
    )
}