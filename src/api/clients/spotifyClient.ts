import type { NowPlaying } from '../models/spotify';

const MOCK_TRACKS: Omit<NowPlaying, 'progressMs'>[] = [
  {
    isPlaying: true,
    title: 'Strobe',
    artist: 'deadmau5',
    album: 'For Lack of a Better Name',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b27395f08a44c1cb56f33b4a8a89',
    durationMs: 634000,
    songUrl: 'https://open.spotify.com/track/2tNE3rxNm7DyqdfQyDJ8jH',
  },
  {
    isPlaying: true,
    title: 'Midnight City',
    artist: 'M83',
    album: "Hurry Up, We're Dreaming",
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273fe24d7084be472288cd6ee6c',
    durationMs: 244000,
    songUrl: 'https://open.spotify.com/track/4yugZvBYaoREkJKtbG08Qr',
  },
];

export async function getNowPlayingMock(): Promise<NowPlaying> {
  await new Promise((r) => setTimeout(r, 350));
  const track = MOCK_TRACKS[Math.floor(Date.now() / 60000) % MOCK_TRACKS.length];
  const progressMs = Math.floor((Date.now() / 1000) % (track.durationMs / 1000)) * 1000;
  return { ...track, progressMs };
}
