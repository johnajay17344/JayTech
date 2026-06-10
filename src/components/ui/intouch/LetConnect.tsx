import styles from "./letConnect.module.css"
import { socialContact } from "./data"

export default function LetConnect() {
  return (
    <div className={styles.letConnect}>
      <h2 className={styles.letConnectTitle}>Let&apos;s Connect</h2>
      <p className={styles.para}>
        I&apos;m always open to discussing new opportunities, interesting
        projects, or just having a chat about technology and development.
      </p>
      <div className={styles.contactList}>
        {socialContact.map((contact, index) => (
          <div key={index} className={styles.contactItem}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{contact.icon}</span>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.label}>{contact.label}</span>
              <span className={styles.value}>{contact.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
