import Link from 'next/link';

import { Title } from '@/ui/Title/title';
import { EMAIL_URL } from '@/utils/constants';

import pageStyles from '../../page.module.scss';
import styles from './contact.module.scss';

const Contact = () => {
  function calculateDate(): string {
    const today = new Date();
    const startDate = new Date(2021, 2, 1);
    
    let años = today.getFullYear() - startDate.getFullYear();
    
    if (
      today.getMonth() < startDate.getMonth() || 
      (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())
    ) {
      años--;
    }
    
    return `más de ${años} años`;
  }

  return (
    <section className={`${styles.container} ${pageStyles.view}`}>
      <Title title="¿Necesitas mi ayuda?" className={styles.title} />

      <p className={styles.text}>
        Soy desarrollador Frontend con {calculateDate()} de experiencia en desarrollo web con ReactJS, y orgulloso de mis ganas de hacer
        un buen trabajo, esté donde esté.
      </p>

      <div className={styles['call-to-action']}>
        <Link href={EMAIL_URL} className={styles['contact-link']}>
          ¡Hablemos!
        </Link>
      </div>
    </section>
  );
};

export { Contact };
