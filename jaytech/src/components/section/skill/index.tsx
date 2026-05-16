import styles from "./skill.module.css"
import { Skill } from "./data"
import Image from "next/image"
import MatrixRain from "@/components/ui/MatrixRain";



export default function SkillSection(){
    return(
        <section className={styles.section}>
             <MatrixRain />
            <div className={styles.container}>
                {Skill.map( (item,index)=>
                (
                    <div className={styles.block} key={index}>
                    <div>
                        <h3 className={styles.title}>
                            {item.title}
                        </h3>
                    </div>
                    <div className={styles.logos}>
                        {item.logos.map((logo) => (
                            <div className={styles.skillItem} key={logo.name}>
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                height={50}
                                width={50}
                                className={styles.logo}
                            />

                            <span>{logo.name}</span>
                            </div>
                        ))}
                        </div>
                </div>
                ))}                
            </div>        
        </section>
    )
}
