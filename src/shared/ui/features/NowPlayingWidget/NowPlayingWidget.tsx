import { Music2 } from 'lucide-react';

import { Skeleton } from '@/components/ui/skeleton';
import { useNowPlaying } from '@/api/hooks/useNowPlaying';

interface Props {
  variant?: 'mini' | 'full';
}

export function NowPlayingWidget({ variant = 'mini' }: Props) {
  const { data, isLoading, isError } = useNowPlaying();

  if (isError) return null;

  if (variant === 'mini') {
    return (
      <a
        href={data?.songUrl ?? '#'}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 rounded-sm border border-border bg-surface/80 px-2 py-2 backdrop-blur transition-smooth hover:border-border-strong"
        aria-label="Now playing on Spotify"
      >
        {isLoading || !data ? (
          <Skeleton className="h-10 w-10 rounded-sm" />
        ) : (
          <img src={data.albumArt} alt="" className="h-10 w-10 rounded-sm object-cover" />
        )}
        <div className="hidden sm:flex w-32 flex-col overflow-hidden">
          <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground">
            <Music2 className="h-2.5 w-2.5 text-[var(--accent-cyan)] progress-pulse" />
            Now playing
          </div>
          {isLoading || !data ? (
            <Skeleton className="mt-1 h-3 w-24" />
          ) : (
            <div className="overflow-hidden whitespace-nowrap text-xs text-foreground">
              <span className="marquee">
                <span className="pr-8">
                  {data.title} — {data.artist}
                </span>
                <span className="pr-8">
                  {data.title} — {data.artist}
                </span>
              </span>
            </div>
          )}
        </div>
      </a>
    );
  }

  const pct = data ? Math.min(100, (data.progressMs / data.durationMs) * 100) : 0;
  return (
    <div className="rounded-sm border border-border bg-surface p-6 transition-smooth hover:border-border-strong">
      <div className="flex items-center gap-5">
        {isLoading || !data ? (
          <Skeleton className="h-[120px] w-[120px] rounded-sm sm:h-[160px] sm:w-[160px]" />
        ) : (
          <img
            src={data.albumArt}
            alt=""
            className="h-[120px] w-[120px] rounded-sm object-cover shadow-lg sm:h-[160px] sm:w-[160px]"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
            <Music2 className="h-3 w-3 text-[var(--accent-cyan)] progress-pulse" />
            {data?.isPlaying ? 'Now playing' : 'Last played'}
          </div>
          {isLoading || !data ? (
            <>
              <Skeleton className="mt-3 h-6 w-48" />
              <Skeleton className="mt-2 h-4 w-32" />
            </>
          ) : (
            <>
              <a
                href={data.songUrl}
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-2 block truncate text-xl font-bold text-foreground sm:text-2xl"
              >
                {data.title}
              </a>
              <div className="mt-1 truncate text-sm text-muted-foreground">{data.artist}</div>
              <div className="mt-1 truncate text-xs text-muted-foreground/70">{data.album}</div>
            </>
          )}
          <div className="mt-4 h-[2px] w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full bg-gradient-accent transition-[width] duration-1000 ease-linear"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
