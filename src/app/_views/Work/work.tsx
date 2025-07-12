import { Title } from '@/ui/Title/title';
import { Card } from './_components/Card/card';

import pageStyles from '../../page.module.scss';
import styles from './work.module.scss';

import ActivamentImg from '@/assets/images/Activament.jpg';
import DestinetiImg from '@/assets/images/Destineti.jpg';
import NovaHiringImg from '@/assets/images/Nova hiring.jpg';
import OnygoImg from '@/assets/images/Onygo.jpg';
import ScorePadelImg from '@/assets/images/Score padel.jpg';
// import PilarHervasImg from '@/assets/images/work_pilar-hervas.png';
import PilarHervasImg from '@/assets/images/Pilar Hervas.jpg';

const Work = () => {
  const projects = [{
    pretitle: 'Next JS',
    title: 'Pilar Hervás',
    description: 'Portfolio web de fotografía social y corporativa.',
    image: PilarHervasImg,
    url: 'https://pilarhervas.com/',
  },
  {
    pretitle: 'React JS',
    title: 'Destineti',
    description: 'Portal de logística door-to-door 24/7.',
    image: DestinetiImg,
    url: 'https://destineti.com/',
  },
  {
    pretitle: 'React JS · Nest JS',
    title: 'Nova Hiring',
    description: 'Automatización del rectruiting por IA.',
    image: NovaHiringImg,
    url: 'http://novahiring.com/',
  },
  {
    pretitle: 'React Native',
    title: 'Onygo',
    description: 'Aplicación móvil para compatir coche.',
    image: OnygoImg,
    url: 'https://onygo.es/',
  },
  {
    pretitle: 'React Native for TV · React JS',
    title: 'Score Padel',
    description: 'Marcadores para pistas de padel.',
    image: ScorePadelImg,
    url: 'https://www.scorepadel.es/',
  },
  {
    pretitle: 'React JS',
    title: 'Activament',
    description: 'Tienda online solidaria.',
    image: ActivamentImg,
    url: 'https://shop.activamentbaleares.com/',
  }
];

  return (
    <section className={`${styles.container} ${pageStyles.view}`}>
      <Title title="Mi trabajo" className={styles.title} />

      <div className={styles.list}>
        {projects.map((project, index) => (
          <Card key={index}
            {...project}
          />)
        )}
      </div>
    </section>
  );
};

export { Work };
