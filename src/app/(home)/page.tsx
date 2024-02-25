import { Head, Projects, Experience, Contact, About } from './_views';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Head />

      <Experience />

      <Projects />

      <About />

      <Contact />
    </main>
  );
}
