import Link from 'next/link';
import Image from 'next/image';

import { Title } from '@/ui/Title/title';
import { GITHUB_URL, LINKEDIN_URL } from '@/utils/constants';

import githubIcon from '@/assets/icons/github.svg';
import linkedinIcon from '@/assets/icons/linkedin.svg';

import styles from './contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Title title="contact me" className={styles.title} />

      <div className={styles.rrss}>
        <Link href={GITHUB_URL}>
          <Image priority src={githubIcon} alt="Follow me on Github" width={24} height={24} />
        </Link>

        <Link href={LINKEDIN_URL}>
          <Image priority src={linkedinIcon} alt="Reach me on Linkedin" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export { Contact };
