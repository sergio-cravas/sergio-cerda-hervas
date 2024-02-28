import styles from './page.module.scss';

export default function Test() {
  return (
    <main className={styles.main}>
      <Seccion backgroundColor="red" />
      <Seccion backgroundColor="green" />
      <Seccion backgroundColor="blue" />
      <Seccion backgroundColor="red" />
      <Seccion backgroundColor="green" />
      <Seccion backgroundColor="blue" />
    </main>
  );
}

const Seccion = ({ backgroundColor }: any) => (
  <section className={styles.view} style={{ backgroundColor, textAlign: 'center' }}>
    <h2>Pipo sección {backgroundColor}</h2>
  </section>
);
