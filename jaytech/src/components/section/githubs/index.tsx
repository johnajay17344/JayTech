import styles from "./github.module.css"
import { getGithubDashboardData, StatCard, ActivityItem, LanguageItem } from "./data"

export default async function GithubPage() {
  const { stats, activity, languages } = await getGithubDashboardData()
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>GitHub Activity</h1>
      <p className={styles.subtitle}>My latest contributions and coding activity.</p>

      {/* Stat cards */}
      <div className={styles.statGrid}>
        {stats.map((stat: StatCard) => (
          <div key={stat.title} className={styles.statCard}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.title}</span>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span>Recent Activity</span>
          <a href={`https://github.com/johnajay17344`} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
        <ul className={styles.activityList}>
          {activity.map((item: ActivityItem) => (
            <li key={item.id} className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <ActivityIcon type={item.label} />
              </div>
              <div className={styles.activityText}>
                <span className={styles.activityMain}>
                  {item.label} {item.repo}
                </span>
                <span className={styles.activityDate}>
                  {formatDate(item.date)}
                </span>
              </div>
              <a href={item.url} target="_blank" rel="noreferrer" className={styles.activityLink}>
                ↗
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Languages */}
      <h2 className={styles.langTitle}>Most Used Languages</h2>
      <div className={styles.langGrid}>
        {languages.map((lang: LanguageItem) => (
          <div key={lang.name} className={styles.langCard}>
            <span className={styles.langName}>{lang.name}</span>
            <span className={styles.langCount}>{lang.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}


function ActivityIcon({ type }: { type: string }) {
  if (type === "Pushed to") return <span>⬆</span>
  return <span>◉</span>
}
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "numeric",
    day:   "numeric",
    year:  "numeric",
  })
}