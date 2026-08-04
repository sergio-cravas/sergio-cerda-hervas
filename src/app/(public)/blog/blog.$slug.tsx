import { format } from 'date-fns';
import { motion } from 'motion/react';
import { useIntl } from 'react-intl';
import { Link, Navigate, useParams } from 'react-router-dom';

import { getBlogPost } from '@/shared/data/blog';
import { useLangStore } from '@/shared/store/langStore';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug!);

  if (!post) return <Navigate to="/" replace />;

  return <BlogPostView post={post} />;
}

function BlogPostView({ post }: { post: NonNullable<ReturnType<typeof getBlogPost>> }) {
  const intl = useIntl();
  const lang = useLangStore((s) => s.lang);
  const title = lang === 'es' ? post.title_es : post.title_en;
  const body = lang === 'es' ? post.body_es : post.body_en;

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-[65ch] px-4 pt-24 sm:px-6 lg:px-8"
    >
      <Link to="/blog" className="link-underline inline-block text-sm text-muted-foreground hover:text-foreground">
        {intl.formatMessage({ id: 'blog.back' })}
      </Link>

      <header className="mt-6">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <time>{format(new Date(post.date), 'MMM dd, yyyy')}</time>
          <span>·</span>
          <span>{intl.formatMessage({ id: 'blog.readingTime' }, { min: post.readingTime })}</span>
        </div>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((t: string) => (
            <span key={t} className="font-mono text-[11px] lowercase text-accent-cyan">
              #{t}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground/90">
        {body.split('\n\n').map((p: string, i: number) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </motion.article>
  );
}
