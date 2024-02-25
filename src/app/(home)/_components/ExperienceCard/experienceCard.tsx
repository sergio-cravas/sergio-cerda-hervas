import Image from 'next/image';

import styles from './experienceCard.module.scss';

type Props = {
  jobTitle: string;
  company: string;
  url: string;
};

export const ExperienceCard = ({ jobTitle, company, url }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={url} alt={`Job preview from ${company}`} className={styles.image} />

      <div className={styles.description}>
        <span className={styles.title}>{jobTitle}</span>
        <span className={styles.subtitle}>{company}</span>
      </div>
    </div>
  );
};
