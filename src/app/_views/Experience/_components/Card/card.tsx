import Image, { StaticImageData } from 'next/image';

import { format, isToday } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import styles from './card.module.scss';

type Props = {
  company: string;
  title: string;
  url?: string;
  endDate: Date;
  startDate: Date;
  description: string;
  technologies?: { title: string; src: string | StaticImageData }[];
};

export const Card = ({ title, company, url, endDate, startDate, description, technologies = [] }: Props) => {
  const range: string = `${format(startDate, 'MMM Y', { locale: es })} - ${isToday(endDate) ? "Actualidad" : format(endDate, 'MMM Y', { locale: es })}`;

  return (
    <div className={styles.container}>
      {url ? (
        <Link href={url} target="_blank">
          <span className={styles.title}>{company}</span>
        </Link>
      ) : (
        <span className={styles.title}>{company}</span>
      )}

      <span className={styles.subtitle}>
        <strong>{title}, </strong>
        <div className={styles.subtitle__range}>{range}</div>
      </span>

      <p className={styles.description}>{description}</p>

      {Boolean(technologies?.length) && (
        <div className={styles.technologies}>
          {technologies?.map((tech, index) => (
            <Image key={`Tech ${index}`} src={tech.src} alt={tech.title} title={tech.title} width={32} height={32} />
          ))}
        </div>
      )}
    </div>
  );
};
