import Link from 'next/link';
import { Logo } from '../Logo/logo';

import styles from './footer.module.scss';
import { LINKEDIN_URL } from '@/utils/constants';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Logo />

      <span className={styles.credits}>
        desarrollado por{' '}
        <Link href={LINKEDIN_URL} target="_blank" className={styles.credits__link}>
          mi
        </Link>
      </span>
    </footer>
  );
};

export { Footer };
