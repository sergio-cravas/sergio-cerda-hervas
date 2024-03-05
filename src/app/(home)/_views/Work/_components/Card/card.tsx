import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import styles from './card.module.scss';

type Props = {
  title: string;
  pretitle: string;
  description: string;
  url: string;
  image: string | StaticImageData;
};

export const Card = ({ title, pretitle, description, image, url }: Props) => {
  return (
    <Link href={url} target="_blank" className={styles.container}>
      <div className={styles.head}>
        <div className={styles['head-col']}>
          <span className={styles.pretitle}>{pretitle}</span>
          <span className={styles.title}>{title}</span>
        </div>

        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles['image-container']}>
        <Image alt={`Image of ${title} project`} src={image} className={styles.image} />
      </div>
    </Link>
  );
};
