import Link from 'next/link';
import Image from 'next/image';

import { DotGothic16 } from 'next/font/google';

import githubIcon from '@/assets/icons/github.svg';
import linkedinIcon from '@/assets/icons/linkedin.svg';
import { LINKEDIN_URL, GITHUB_URL } from '@/utils/constants';

import styles from './head.module.scss';

const dotGothic16 = DotGothic16({ subsets: ['latin'], weight: '400' });

const Head = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>{`<SCH />`}</div>

        <div className={styles.rrss}>
          <Link href={LINKEDIN_URL}>
            <Image priority src={githubIcon} alt="Follow me on Github" width={24} height={24} />
          </Link>

          <Link href={GITHUB_URL}>
            <Image priority src={linkedinIcon} alt="Reach me on Linkedin" width={24} height={24} />
          </Link>
        </div>
      </div>

      <div className={styles.content}>
        <div className={`${dotGothic16.className} ${styles.title}`}>Front-end. web (developer)_</div>
      </div>
    </div>
  );
};

export { Head };
