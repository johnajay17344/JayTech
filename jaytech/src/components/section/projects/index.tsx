import Card from "@/components/ui/Card/cards";
import styles from "./project.module.css"
export default function ProjectsSection(){
    return(  
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.description}>
                Some of the things I`ve built.
            </p>
            <Card/>
        </section>
        )
    }