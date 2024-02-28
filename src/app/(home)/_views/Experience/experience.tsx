import { ExperienceCard } from './_components/ExperienceCard/experienceCard';
import { Title } from '../../../../ui/Title/title';

import harbestThumbnail from '@/assets/images/harbest_thumbnail.png';
import imaginaThumbnail from '@/assets/images/imagina_thumbnail.png';
import openBootcampThumbnail from '@/assets/images/openbootcamp_thumbnail.png';

import styles from './experience.module.scss';
import pageStyles from '../../page.module.scss';

const Experience = () => {
  return (
    <section className={`${styles.container} ${pageStyles.view}`}>
      <Title title="Professional experience" className={styles.title} />

      <div className={styles.cards}>
        <ExperienceCard
          company="HarBest Market"
          jobTitle="Frontend Developer"
          range="January 2023 - March 2024"
          url={harbestThumbnail}
        />

        <ExperienceCard
          company="OpenBootcamp"
          jobTitle="Lead Frontend Developer"
          range="May 2022 - January 2023"
          url={openBootcampThumbnail}
        />

        <ExperienceCard
          company="Imagina Formación"
          jobTitle="Frontend Developer"
          range="March 2021 - May 2022"
          url={imaginaThumbnail}
        />

        <ExperienceCard
          company="Imagina Formación"
          jobTitle="Assistant and online tutor"
          range="October 2019 - March 2021"
          url={imaginaThumbnail}
        />
      </div>
    </section>
  );
};

export { Experience };
