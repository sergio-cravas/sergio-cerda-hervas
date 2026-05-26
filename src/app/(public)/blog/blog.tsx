import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { useIntl } from 'react-intl';

import { BlogPostCard } from '@/shared/ui/data/BlogPostCard';
import { cn } from '@/shared/utils/cn';
import { blogPosts } from '@/shared/data/blog';

export function Blog() {
  const intl = useIntl();
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => Array.from(new Set(blogPosts.flatMap((p) => p.tags))), []);
  const filtered = tag ? blogPosts.filter((p) => p.tags.includes(tag)) : blogPosts;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-3xl px-4 pt-24 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-extrabold sm:text-5xl">{intl.formatMessage({ id: 'blog.title' })}</h1>
      <p className="mt-3 text-muted-foreground">{intl.formatMessage({ id: 'blog.subtitle' })}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        <TagPill active={tag === null} onClick={() => setTag(null)}>
          all
        </TagPill>
        {tags.map((t) => (
          <TagPill key={t} active={tag === t} onClick={() => setTag(t)}>
            #{t}
          </TagPill>
        ))}
      </div>

      <div className="mt-10 grid gap-5">
        {filtered.map((p, i) => (
          <BlogPostCard key={p.slug} post={p} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

function TagPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-sm border px-3 py-1 font-mono text-[11px] lowercase tracking-wider transition-smooth active:scale-[0.97]',
        active
          ? 'border-[var(--accent-violet)] bg-surface text-foreground'
          : 'border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground'
      )}
    >
      {children}
    </button>
  );
}
