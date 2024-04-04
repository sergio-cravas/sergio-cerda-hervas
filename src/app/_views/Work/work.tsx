import { Card } from './_components/Card/card';
import { Title } from '@/ui/Title/title';

import styles from './work.module.scss';
import pageStyles from '../../page.module.scss';

import PilarHervasImg from '@/assets/images/work_pilar-hervas.png';

const Work = () => {
  return (
    <section className={`${styles.container} ${pageStyles.view}`}>
      <Title title="Mi trabajo" className={styles.title} />

      <div className={styles.list}>
        <Card
          pretitle="Desarrollo web"
          title="Pilar Hervás"
          description="Portfolio web de fotografía social y corporativa. Trabajado el SEO, mailing y maquetación en NextJS."
          image={PilarHervasImg}
          url="https://pilarhervas.com/"
        />
      </div>
    </section>
  );
};

export { Work };
