import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface VisitedState {
  visited: string[];
  addVisited: (slug: string) => void;
  has: (slug: string) => boolean;
  clear: () => void;
}

export const useVisitedProjectsStore = create<VisitedState>()(
  persist(
    (set, get) => ({
      visited: [],
      addVisited: (slug) =>
        set((state) => (state.visited.includes(slug) ? state : { visited: [...state.visited, slug] })),
      has: (slug) => get().visited.includes(slug),
      clear: () => set({ visited: [] }),
    }),
    { name: 'sch.visited-projects' }
  )
);
