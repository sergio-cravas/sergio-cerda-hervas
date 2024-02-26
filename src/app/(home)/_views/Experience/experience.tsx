import { ExperienceCard } from './_components/ExperienceCard/experienceCard';
import { Title } from '../../../../ui/Title/title';

import harbestThumbnail from '@/assets/images/harbest_thumbnail.png';
import imaginaThumbnail from '@/assets/images/imagina_thumbnail.png';
import openBootcampThumbnail from '@/assets/images/openbootcamp_thumbnail.png';

import styles from './experience.module.scss';

const Experience = () => {
  return (
    <div className={styles.container}>
      <Title rotate title="Professional experience" className={styles.title} />

      <div className={styles.cards}>
        <ExperienceCard company="HarBest Market" jobTitle="Frontend Developer" url={harbestThumbnail} />

        <ExperienceCard company="OpenBootcamp" jobTitle="Lead Frontend Developer" url={openBootcampThumbnail} />

        <ExperienceCard company="Imagina Formación" jobTitle="Frontend Developer" url={imaginaThumbnail} />

        <ExperienceCard company="Imagina Formación" jobTitle="Assistant and online tutor" url={imaginaThumbnail} />
      </div>
    </div>
  );
};

export { Experience };
