import Link from 'next/link';
import { Logo } from '../Logo/logo';

import styles from './footer.module.scss';
import { LINKEDIN_URL } from '@/utils/constants';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Logo />

      <div className={styles.credits}>
        <span>
          Web desarrollada por <strong>mi</strong>
        </span>

        <span>
          Diseño inspirado en{' '}
          <Link className={styles.credits__link} href="https://nolanperry.design/">
            Nolan Perry
          </Link>
        </span>
      </div>
    </footer>
  );
};

export { Footer };
