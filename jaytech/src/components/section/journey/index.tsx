"use client";

import { useEffect, useRef } from "react";
import styles from "./journey.module.css";
import { journeyData } from "./data";



export   default function Journey() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

 



  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>My Journey</h2>

      <div className={styles.timeline}>
        <div className={styles.line} />
        {journeyData.map((item, i) => (
          <div
            key={i}
            className={`${styles.row} ${item.side === "right" ? styles.rowRight : styles.rowLeft}`}
          >
            {/* spacer on opposite side */}
            <div className={styles.spacer} />

            {/* dot */}
            <div className={styles.dotWrapper}>
              <div className={styles.dot} />
            </div>

            {/* card */}
            <div
              className={`${styles.card} ${item.side === "left" ? styles.cardLeft : styles.cardRight}`}
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardMeta}>
                {item.subtitle} · <span>{item.period}</span>
              </p>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

