import styles from "./projectCard.module.css"

interface ProjectCard {
  title: string;
  description: string;
  text: string;
  stack?: string[];
}

export default function ProjectCard({ card }: { card: ProjectCard[] }) {
  return (
    <>
      {card.map((item, index) => (
        <div
          key={index}
          className={styles.projectCard}
          style={{ animationDelay: `${index * 0.12}s` }}
        >
          {/* Top accent line */}
          <span className={styles.accentLine} />

          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>

          {item.stack && item.stack.length > 0 && (
            <div className={styles.stack}>
              {item.stack.map((tech) => (
                <span key={tech} className={styles.badge}>{tech}</span>
              ))}
            </div>
          )}

          <span className={styles.text}>{item.text}</span>
        </div>
      ))}
    </>
  );
}