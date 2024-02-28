'use client';

import { useEffect, useRef } from 'react';

import styles from './cursorColor.module.scss';

export const CursorColor = () => {
  const ref = useRef<any>();

  useEffect(() => {
    document?.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document?.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const updateCursorPosition = (event: MouseEvent) => {
    const card = ref.current;

    const rect = card.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;

    setTimeout(() => {
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }, 100);
  };

  return <div ref={ref} className={styles.container} />;
};
