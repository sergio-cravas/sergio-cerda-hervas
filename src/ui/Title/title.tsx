import styles from './title.module.scss';

type Props = {
  title: string;
  className?: string;
};

export const Title = ({ title, className }: Props) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <span className={styles.title}>{title}</span>

      <div className={styles.line} />
    </div>
  );
};
