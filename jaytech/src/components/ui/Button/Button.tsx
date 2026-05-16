import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}