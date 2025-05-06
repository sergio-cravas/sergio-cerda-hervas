import { Title } from '@/ui/Title/title';
import { Card } from './_components/Card/card';

import pageStyles from '../../page.module.scss';
import styles from './experience.module.scss';

import cypress from '@/assets/icons/cypress.svg';
import nextJS from '@/assets/icons/next-js.svg';
import reactNative from '@/assets/icons/react-native.svg';
import react from '@/assets/icons/react.svg';

const Experience = () => {
  return (
    <section className={`${styles.container} ${pageStyles.view}`}>
      <Title title="Experiencia profesional" className={styles.title} />

      <div className={styles.list}>
        <Card
          company="Autónomo"
          title="Frontend Developer"
          startDate={new Date(2025, 2, 1)}
          endDate={new Date()}
          url="https://mca-groupe.com/offices/spain1"
          description={`Me dedico principalmente al desarrollo frontend, tanto de aplicaciones web con ReactJS como de aplicaciones móviles con React Native.

Hasta la fecha he tenido la suerte de trabajar en más de 10 proyectos, ¡y sumando!`}
          technologies={[
            { title: 'ReactJS', src: react },
            { title: 'React Query', src: react },
          ]}
        />

        <Card
          company="Inditex, MCA"
          title="Frontend Developer"
          startDate={new Date(2024, 6, 1)}
          endDate={new Date(2025, 2, 1)}
          url="https://mca-groupe.com/offices/spain1"
          description="Desarrollo de herramientas internas para el área de People Tech en Inditex."
          technologies={[
            { title: 'ReactJS', src: react },
            { title: 'React Query', src: react },
          ]}
        />

        <Card
          company="HarBest Market"
          title="Frontend Developer"
          startDate={new Date(2023, 0, 30)}
          endDate={new Date(2024, 2, 1)}
          url="https://pedidos.harbestmarket.com/"
          description="Mantenimiento y desarrollo de nuevas funcionalidades para las herramientas internas de la empresa y la tienda online para clientes, así como de las dos aplicaciones móviles desarrolladas con React Native."
          technologies={[
            { title: 'ReactJS', src: react },
            { title: 'React Native', src: reactNative },
            { title: 'Cypress', src: cypress },
          ]}
        />

        <Card
          company="OpenBootcamp"
          title="Frontend Lead Developer"
          url="https://open-bootcamp.com/"
          startDate={new Date(2022, 4, 1)}
          endDate={new Date(2023, 0, 30)}
          description="Desarrollo del campus virtual usado por los alumnos, así como de una herramienta interna para la gestión de sus contenidos y de la web pública."
          technologies={[
            { title: 'ReactJS', src: react },
            { title: 'NextJS', src: nextJS },
            { title: 'Cypress', src: cypress },
          ]}
        />

        <Card
          company="Imagina Formación"
          title="Frontend Developer"
          url="https://imaginaformacion.com/"
          startDate={new Date(2021, 2, 1)}
          endDate={new Date(2022, 4, 1)}
          description="Desarrollo de un ERP con ReactJS para la gestión de todos los procesos internos de la empresa y vinculado con la web, también desarrollada en NextJS."
          technologies={[
            { title: 'React', src: react },
            { title: 'NextJS', src: nextJS },
          ]}
        />
      </div>
    </section>
  );
};

export { Experience };
