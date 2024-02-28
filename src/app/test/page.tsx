import { CursorColor } from './_components/CursorColor/cursorColor';
import { Head } from './_views/Head/head';

import styles from './page.module.scss';

export default function Test() {
  return (
    <main className={styles.main}>
      <CursorColor />

      <Head />
    </main>
  );
}
