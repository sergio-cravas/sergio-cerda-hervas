// Source - https://stackoverflow.com/a/78706043
// Posted by Menial Orchestra
// Retrieved 2026-05-27, License - CC BY-SA 4.0

interface ImportMetaEnv {
  readonly VITE_SHOW_SPOTIFY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
