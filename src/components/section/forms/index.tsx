import ProjectCard from '../../ui/Upcoming/projectCard'
import LetConnect from '../../ui/intouch/LetConnect';
import Contact from  "../../ui/intouch/contact"
import styles from "./foems.module.css"

export default function Forms() {
    return (
        <section className={styles.forms}>
            <div className={styles.container}>
                <div className={styles.first}>
                <h2>Upcoming Projects</h2>
                <p>Some exciting ideas I`m currently working on</p>
                <div className={styles.cards}>
                    <ProjectCard card={[
                        {
                            title: "Url link shortener",
                            description: "A simple and efficient URL shortening service with analytics.",
                            stack: ["Node.js", "Express", "MongoDB", "React"],
                            text: "Coming Soon"
                        },
                        {
                            title: "School management system",
                            description: "A comprehensive solution for managing school operations, including student records, attendance, and scheduling.",
                            stack: ["Python", "Django", "PostgreSQL", "React"],
                            text: "Coming Soon"
                        },
                        {
                            title: "E-commerce platform",
                            description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
                            stack: ["Ruby on Rails", "MySQL", "React"],
                            text: "Coming Soon"
                        }
                    ]} />
                    </div>
                    <div className={styles.comingSoon}>
                        <h2>Get In Touch</h2>
                        <p>Let`s discuss your next project or just say hello!</p>
                        <div className={styles.second}>
                            <LetConnect />
                            <Contact />
                        </div>
                    </div>




                </div>
            </div>




        </section>
    )
}