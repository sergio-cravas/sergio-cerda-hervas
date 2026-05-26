import type { ReactNode } from 'react';

import { CursorGlow } from '@/shared/ui/features/CursorGlow';
import { KonamiEasterEgg } from '@/shared/ui/features/KonamiEasterEgg';
import { Footer } from '@/shared/ui/layout/Footer';
import { Header } from '@/shared/ui/layout/Header';
import { LeftSidebar } from '@/shared/ui/layout/LeftSidebar';
import { RightSidebar } from '@/shared/ui/layout/RightSidebar';

export function RootLayout({ children }: { children: ReactNode }) {
  const showRightSidebar = import.meta.env.VITE_SHOW_SPOTIFY === 'true'; // Set to false to hide the right sidebar (Now Playing Widget)

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Header />
      <LeftSidebar />
      {showRightSidebar && <RightSidebar />}
      <main className="relative z-10">{children}</main>
      <Footer />
      <KonamiEasterEgg />
    </div>
  );
}
