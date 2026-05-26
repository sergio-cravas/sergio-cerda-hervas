import { useQuery } from '@tanstack/react-query';

import { USE_MOCKED_SPOTIFY } from '@/shared/constants/links';
import { getNowPlayingMock } from '../clients/spotifyClient';
import type { NowPlaying } from '../models/spotify';

async function fetchNowPlaying(): Promise<NowPlaying> {
  if (USE_MOCKED_SPOTIFY) return getNowPlayingMock();
  return getNowPlayingMock();
}

export function useNowPlaying() {
  return useQuery({
    queryKey: ['spotify', 'now-playing'],
    queryFn: fetchNowPlaying,
    refetchInterval: 30_000,
    staleTime: 25_000,
  });
}
