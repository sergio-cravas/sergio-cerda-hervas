import { Card } from './Card/card';

import Image from 'next/image';
import pageStyles from '../../page.module.scss';
import styles from './head.module.scss';

import { CommentsIcon } from '@/assets/icons/commentsIcon';
import { LightbulbIcon } from '@/assets/icons/lightbulbIcon';
import { PeopleGroupIcon } from '@/assets/icons/peopleGroupIcon';
import Avatar from '@/assets/images/Avatar_profesional.jpeg';

const Head = () => {
  return (
    <section className={`${styles.container} ${pageStyles.view}`}>
      <div className={styles.content}>
        <div className={styles['profile-photo']}>
          <Image src={Avatar} width={128} height={128} alt="Profile image of Sergio" />
        </div>

        <div className={styles.pretitle}>Hola, soy Sergio! 👋🏻</div>

        <h1 className={styles.title}>Frontend web developer</h1>
      </div>

      <div className={styles.cards}>
        <Card
          icon={<CommentsIcon size={32} color="#858585" />}
          title="Proactivo"
          description="Impulso la innovación y el progreso mediante la identificación proactiva de oportunidades, la toma de iniciativa y la implementación de acciones anticipadas."
        />

        <Card
          icon={<LightbulbIcon size={32} color="#858585" />}
          title="Resolutivo"
          description="Resuelvo desafíos complejos de manera eficiente, identificando problemas y aplicando soluciones efectivas en entornos laborales dinámicos."
        />

        <Card
          icon={<PeopleGroupIcon size={32} color="#858585" />}
          title="Trabajo en equipo"
          description="Me enfoco en fomentar una colaboración efectiva, coordinar equipos y alcanzar objetivos compartidos en diversos proyectos."
        />
      </div>
    </section>
  );
};

export { Head };
