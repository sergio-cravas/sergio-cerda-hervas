import { Head, Experience, Contact, About } from './_views';
import { Footer } from '@/ui/Footer/footer';
import { Divider } from '@/ui/Divider/divider';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Head />

      <Divider />

      <Experience />

      <Divider />

      <About />

      <Divider />

      <Contact />

      <Footer />
    </main>
  );
}
