export interface NowPlaying {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  progressMs: number;
  durationMs: number;
  songUrl: string;
}
