import { Head, Experience, Contact, Work } from './_views';
import { Footer } from '@/ui/Footer/footer';

import styles from './page.module.scss';
import { CursorColor } from '@/ui/CursorColor/cursorColor';
import { Header } from '@/ui/Header/header';

export default function Home() {
  return (
    <main className={styles.main}>
      <CursorColor />

      <Header />

      <Head />

      <Experience />

      <Work />

      <Contact />

      <Footer />
    </main>
  );
}
