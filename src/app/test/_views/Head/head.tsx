import Link from 'next/link';
import Image from 'next/image';

import { DotGothic16 } from 'next/font/google';

import styles from './head.module.scss';

const dotGothic16 = DotGothic16({ subsets: ['latin'], weight: ['400'] });

const Head = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${dotGothic16.className} ${styles.title}`}>Front-end. web (developer)_</div>
      </div>
    </div>
  );
};

export { Head };
