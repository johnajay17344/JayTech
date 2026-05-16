import styles from './FormInput.module.css';

interface FormInputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export default function FormInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required,
  rows,
  className = '',
}: FormInputProps) {
  if (type === 'textarea') {
    return (
      <textarea
        className={`${styles.input} ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        rows={rows || 5}
      />
    );
  }

  return (
    <input
      type={type}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
    />
  );
}