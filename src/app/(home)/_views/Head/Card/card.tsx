import styles from './card.module.scss';

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const Card = ({ title, description, icon }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>{icon}</div>

      <div className={styles.description}>
        <span className={styles.description__title}>{title}</span>

        <span className={styles.description__text}>{description}</span>
      </div>
    </div>
  );
};
