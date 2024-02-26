import Image, { StaticImageData } from 'next/image';
import styles from './techCard.module.scss';

type Props = {
  title: string;
  description: string;
  icon: string | StaticImageData;
};

const TechCard = ({ title, description, icon }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={icon} alt="Tech icon" width={32} height={32} />

      <div className={styles.divider} />

      <div className={styles.content}>
        <span className={styles.content__title}>{title}</span>
        <span className={styles.content__description}>{description}</span>
      </div>
    </div>
  );
};

export { TechCard };
