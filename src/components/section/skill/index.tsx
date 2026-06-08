"use client"

import styles from "./skill.module.css"
import { Skill } from "./data"
import Image from "next/image"
import { useEffect, useRef } from "react";
import MatrixRain from "@/components/ui/MatrixRain";



export default function SkillSection(){
     const skillRefs = useRef<(HTMLDivElement | null)[]>([]);    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                entry.target.classList.add(styles.visible);
                } else {
                entry.target.classList.remove(styles.visible);
                }
            });
          },
          { threshold: 0.15 }
        );
        skillRefs.current.forEach((ref) => {
          if (ref) observer.observe(ref);
        });
    
        return () => observer.disconnect();
      }, []);
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
