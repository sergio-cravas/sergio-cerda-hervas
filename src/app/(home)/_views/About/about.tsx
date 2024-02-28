import Link from 'next/link';
import Image from 'next/image';

import { Title } from '@/ui/Title/title';
import { TechCard } from './_components/TechCard/techCard';
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from '@/utils/constants';

import reactIcon from '@/assets/icons/react.svg';
import nextIcon from '@/assets/icons/next-js.svg';
import cypressIcon from '@/assets/icons/cypress.svg';
import reactNativeIcon from '@/assets/icons/react-native.svg';
import avatarImage from '@/assets/images/Avatar_pixelart.jpeg';

import styles from './about.module.scss';

const About = () => {
  return (
    <section className={styles.container}>
      <Title title="about me" className={styles.title} />

      <div className={styles.head}>
        <Image src={avatarImage} className={styles.head__avatar} width={198} height={198} alt="Avatar of Sergio Cerdá Hervás" />

        <div className={styles.head__content}>
          <div className={styles.head__title}>Sergio Cerdá</div>

          <p className={styles.head__description}>
            {`Hi, I’m Sergio! I am a Frontend developer, graduated in Software Engineering and specialized in web development with React.js with more than three years of experience. I'm passionate about what I do, and I'm focused on finishing every day proud of my work. Dedicated to 🖥️, ☕️ and 🏋️‍♀️.`}
          </p>

          <div className={styles.head__rrss}>
            <Link href={LINKEDIN_URL} target="_blank" className={styles.head__rrss__link}>
              LINKEDIN
            </Link>

            <Link href={GITHUB_URL} target="_blank" className={styles.head__rrss__link}>
              GITHUB
            </Link>

            <Link href={EMAIL_URL} target="_blank" className={styles.head__rrss__link}>
              EMAIL
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.technologies}>
        <TechCard title="React.js" description="Three years developing with React.js" icon={reactIcon} />
        <TechCard title="Next.js" description="Responsive websites with fast loading" icon={nextIcon} />
        <TechCard title="React Native" description="Android and iOS apps using React Native" icon={reactNativeIcon} />
        <TechCard title="Cypress" description="e2e testing, clean code other practices" icon={cypressIcon} />
      </div>
    </section>
  );
};

export { About };
