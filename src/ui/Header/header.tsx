import Link from 'next/link';
import { Logo } from '../Logo/logo';

import styles from './header.module.scss';
import { GITHUB_URL, LINKEDIN_URL } from '@/utils/constants';
import { LinkedinIcon } from '@/assets/icons/linkedinIcon';
import { GithubIcon } from '@/assets/icons/githubIcon';

const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />

      <div className={styles.rrss}>
        <Link href={GITHUB_URL}>
          <GithubIcon size={32} color="#e0e1dd" />
        </Link>

        <Link href={LINKEDIN_URL}>
          <LinkedinIcon size={32} color="#e0e1dd" />
        </Link>
      </div>
    </header>
  );
};

export { Header };
