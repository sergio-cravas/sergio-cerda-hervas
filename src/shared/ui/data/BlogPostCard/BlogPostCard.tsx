import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useIntl } from 'react-intl';
import { format } from 'date-fns';

import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/shared/data/blog';
import { useLangStore } from '@/shared/store/langStore';

export function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  const intl = useIntl();
  const lang = useLangStore((s) => s.lang);
  const title = lang === 'es' ? post.title_es : post.title_en;
  const excerpt = lang === 'es' ? post.excerpt_es : post.excerpt_en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block rounded-sm border border-border bg-surface p-6 transition-smooth hover:-translate-y-1 hover:border-border-strong"
      >
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
          <span>·</span>
          <span>{intl.formatMessage({ id: 'blog.readingTime' }, { min: post.readingTime })}</span>
        </div>
        <h3 className="mt-3 text-xl font-bold text-foreground link-underline">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="rounded-sm border-border bg-background font-mono text-[10px] lowercase text-muted-foreground"
            >
              #{t}
            </Badge>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
