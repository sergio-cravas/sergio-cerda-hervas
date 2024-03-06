import Link from 'next/link';

import { Title } from '@/ui/Title/title';
import { EMAIL_URL } from '@/utils/constants';

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

      <div className={styles['call-to-action']}>
        <Link href={EMAIL_URL} className={styles['contact-link']}>
          Quiero contactar
        </Link>
      </div>
    </section>
  );
};

export { Contact };
