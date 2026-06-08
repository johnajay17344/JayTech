import Image from "next/image"
import { cards } from "./card"
import styles from "./card.module.css"
import Link from "next/link"
export default function Card() {
  return (
    <div className={styles.grid}>
      {cards.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={item.Image.src}
              alt={item.Image.alt}
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.body}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.descriotion}</p>

            <ul className={styles.stack}>
              {item.component.map((comp, compIndex) => (
                <li key={compIndex} className={styles.stackItem}>
                  <Image
                    src={comp.icon.src}
                    alt={comp.icon.alt}
                    width={16}
                    height={16}
                    className={styles.stackIcon}
                  />
                  <span className={styles.stackLabel}>{comp.test}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Link className={`${styles.btn} ${styles.btnPrimary}`} href={item.button.href}>
                Live Demo
              </Link  >
              <Link className={`${styles.btn} ${styles.btnSecondary}`} href={item.secondaryButton.href}>
                Github
              </Link>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}
