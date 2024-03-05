import styles from './title.module.scss';

type Props = {
  title: string;
  className?: string;
};

export const Title = ({ title, className }: Props) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
