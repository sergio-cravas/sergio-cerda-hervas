import styles from './title.module.scss';

type Props = {
  title: string;
  rotate?: boolean;
  className?: string;
};

export const Title = ({ title, rotate, className }: Props) => {
  return (
    <div className={`${styles.container} ${rotate && styles.rotate} ${className || ''}`}>
      <span className={styles.title}>{title}</span>
      <div className={styles.line} />
    </div>
  );
};
