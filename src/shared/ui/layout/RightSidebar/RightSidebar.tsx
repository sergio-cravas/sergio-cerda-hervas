import { NowPlayingWidget } from '@/shared/ui/features/NowPlayingWidget';

export function RightSidebar() {
  return (
    <aside className="pointer-events-none fixed bottom-6 right-6 top-14 z-30 hidden flex-col items-end justify-end lg:flex">
      <div className="pointer-events-auto">
        <NowPlayingWidget variant="mini" />
      </div>
    </aside>
  );
}
