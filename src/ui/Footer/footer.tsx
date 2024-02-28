import { Logo } from '../Logo/logo';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Logo />

      <div className={styles.credits}>
        <span>
          built by <strong>me</strong>
        </span>
      </div>
    </footer>
  );
};

export { Footer };
