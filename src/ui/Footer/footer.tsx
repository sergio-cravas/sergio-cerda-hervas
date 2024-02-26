import { Logo } from '../Logo/logo';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Logo />

      <div className={styles.credits}>
        <span>
          design inspired by <strong>mrk</strong>
        </span>

        <span>
          code built by <strong>me</strong>
        </span>
      </div>
    </div>
  );
};

export { Footer };
