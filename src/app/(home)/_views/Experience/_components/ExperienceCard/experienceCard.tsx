import Image, { StaticImageData } from 'next/image';

import styles from './experienceCard.module.scss';

type Props = {
  jobTitle: string;
  company: string;
  url: string | StaticImageData;
  range?: string;
};

export const ExperienceCard = ({ jobTitle, company, url, range }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={url} alt={`Job preview from ${company}`} className={styles.image} width={280} height={280} />

      <div className={styles.description}>
        <span className={styles.title}>{jobTitle}</span>

        <span className={styles.subtitle}>
          {company}
          <br />
          {range}
        </span>
      </div>
    </div>
  );
};
