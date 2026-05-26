import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Lang = 'es' | 'en';

interface LangState {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

export const useLangStore = create<LangState>()(
  persist(
    (set, get) => ({
      lang: 'es',
      setLang: (lang) => set({ lang }),
      toggle: () => set({ lang: get().lang === 'es' ? 'en' : 'es' }),
    }),
    { name: 'sch.lang' }
  )
);
