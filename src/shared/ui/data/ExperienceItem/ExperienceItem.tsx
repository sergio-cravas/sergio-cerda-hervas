import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import type { Experience } from '@/shared/data/experience';
import { useLangStore } from '@/shared/store/langStore';

export function ExperienceItem({ item, index }: { item: Experience; index: number }) {
  const lang = useLangStore((s) => s.lang);
  const description = lang === 'es' ? item.description_es : item.description_en;
  const url = 'url' in item ? item.url : undefined;

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="grid grid-cols-1 gap-2 border-t border-border/70 py-8 sm:grid-cols-[160px_1fr] sm:gap-8"
    >
      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {item.start} — {item.end}
      </div>
      <div>
        <div className="flex flex-wrap items-baseline gap-2">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="link-underline group inline-flex items-center gap-1 text-base font-bold text-foreground"
            >
              {item.company}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-smooth group-hover:opacity-100" />
            </a>
          ) : (
            <span className="text-base font-bold text-foreground">{item.company}</span>
          )}
          <span className="text-xs text-muted-foreground">· {item.role}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tech.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="rounded-sm border-border bg-surface font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </motion.li>
  );
}
