import styles from './StatCard.module.css';

interface StatCardProps {
  number: string | number;
  label: string;
  icon?: React.ReactNode;
}

export default function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className={styles.statCard}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.number}>{number}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}