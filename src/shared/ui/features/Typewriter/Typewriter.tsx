import { useEffect, useState } from 'react';

interface Props {
  words: string[];
  className?: string;
}

export function Typewriter({ words, className }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === '') {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      <span className="text-gradient">{text}</span>
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] -mb-1 bg-foreground/70 animate-pulse" />
    </span>
  );
}
