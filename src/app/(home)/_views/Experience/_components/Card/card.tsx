import Image, { StaticImageData } from 'next/image';

import styles from './card.module.scss';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

type Props = {
  company: string;
  title: string;
  endDate: Date;
  startDate: Date;
  description: string;
  technologies: string[] | StaticImageData[];
};

export const Card = ({ title, company, endDate, startDate, description, technologies }: Props) => {
  const range: string = `${format(startDate, 'MMM Y', { locale: es })} - ${format(endDate, 'MMM Y', { locale: es })}`;

  return (
    <div className={styles.container}>
      <span className={styles.title}>{company}</span>

      <span className={styles.subtitle}>
        <strong>{title}, </strong>
        <div className={styles.subtitle__range}>{range}</div>
      </span>

      <p className={styles.description}>{description}</p>

      <div className={styles.technologies}>
        {technologies?.map((tech, index) => (
          <Image key={`Tech ${index}`} src={tech} alt="Icon of tech" width={24} height={24} />
        ))}
      </div>
    </div>
  );
};
