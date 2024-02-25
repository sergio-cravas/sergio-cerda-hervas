import { Manrope } from 'next/font/google';
import styles from './title.module.scss';

const manrope = Manrope({ subsets: ['latin'], weight: '800' });

type Props = {
  title: string;
  rotate?: boolean;
  className?: string;
};

export const Title = ({ title, rotate, className }: Props) => {
  return (
    <div className={`${styles.container} ${rotate && styles.rotate} ${className || ''}`}>
      <span className={`${styles.title} ${manrope.className}`}>{title}</span>
      <div className={styles.line} />
    </div>
  );
};
