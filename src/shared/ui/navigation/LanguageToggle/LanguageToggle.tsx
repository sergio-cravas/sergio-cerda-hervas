import { cn } from '@/shared/utils/cn';
import { useLangStore } from '@/shared/store/langStore';

export function LanguageToggle() {
  const { lang, setLang } = useLangStore();
  return (
    <div className="flex items-center gap-1 font-mono text-xs tracking-wider text-muted-foreground select-none">
      <button
        type="button"
        onClick={() => setLang('es')}
        className={cn('transition-smooth hover:text-foreground', lang === 'es' && 'text-foreground')}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
      <span className="opacity-40">·</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={cn('transition-smooth hover:text-foreground', lang === 'en' && 'text-foreground')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
