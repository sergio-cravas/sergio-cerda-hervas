import Link from 'next/link';

import { LINKEDIN_URL } from '@/utils/constants';
import { Title } from '@/ui/Title/title';

import styles from './contact.module.scss';
import pageStyles from '../../page.module.scss';

const Contact = () => {
  return (
    <section className={`${styles.container} ${pageStyles.view}`}>
      <Title title="¿Hablamos?" className={styles.title} />

      <p className={styles.text}>
        Soy desarrollador Frontend con tres años de experiencia en desarrollo web con ReactJS, y orgulloso de mis ganas de hacer
        un buen trabajo, esté donde esté.
      </p>

      <Link href={LINKEDIN_URL} className={styles['contact-link']}>
        Vamos a contactar
      </Link>
    </section>
  );
};

export { Contact };
