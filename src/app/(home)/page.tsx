import { Head, Experience, Contact, About } from './_views';
import { Footer } from '@/ui/Footer/footer';

import styles from './page.module.scss';
import { CursorColor } from '@/ui/CursorColor/cursorColor';

export default function Home() {
  return (
    <main className={styles.main}>
      <CursorColor />

      <Head />

      <Experience />

      <About />

      <Contact />

      <Footer />
    </main>
  );
}
