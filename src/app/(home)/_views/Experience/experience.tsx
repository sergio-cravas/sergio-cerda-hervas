import { Title } from '@/ui/Title/title';

import styles from './experience.module.scss';
import pageStyles from '../../page.module.scss';
import { Card } from './_components/Card/card';

const Experience = () => {
  return (
    <section className={`${styles.container} ${pageStyles.view}`}>
      <Title title="Experiencia profesional" className={styles.title} />

      <div className={styles.list}>
        <Card
          company="HarBest Market"
          title="Frontend Developer"
          startDate={new Date(2023, 0, 30)}
          endDate={new Date(2024, 2, 1)}
          description="Mantenimiento y desarrollo de nuevas funcionalidades para las herramientas internas de la empresa y la tienda online para clientes, así como de las dos aplicaciones móviles desarrolladas con React Native."
          technologies={[]}
        />

        <Card
          company="OpenBootcamp"
          title="Frontend Lead Developer"
          startDate={new Date(2022, 4, 1)}
          endDate={new Date(2023, 0, 30)}
          description="Desarrollo del campus virtual usado por los alumnos, así como de una herramienta interna para la gestión de sus contenidos y de la web pública."
          technologies={[]}
        />

        <Card
          company="Imagina Formación"
          title="Frontend Developer"
          startDate={new Date(2021, 2, 1)}
          endDate={new Date(2022, 4, 1)}
          description="Desarrollo de un ERP con ReactJS para la gestión de todos los procesos internos de la empresa y vinculado con la web, también desarrollada en NextJS."
          technologies={[]}
        />

        <Card
          company={'Imagina Formación'}
          title={'Assistant y tutor online'}
          startDate={new Date(2019, 9, 1)}
          endDate={new Date(2021, 2, 1)}
          description={'Desarrollo y mantenimiento de cursos online de formación tecnológica para empresas.'}
          technologies={[]}
        />
      </div>
    </section>
  );
};

export { Experience };
