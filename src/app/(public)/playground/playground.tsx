import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useIntl } from 'react-intl';
import { Sparkles } from 'lucide-react';

export function Playground() {
  const intl = useIntl();

  const cards = [
    { slug: 'horse', title: 'The Horse Game', desc: 'Trap a knight with fences.', active: true },
    { slug: 'pocha', title: 'Pocha', desc: 'Card game. WIP.', active: false },
    { slug: 'kcd-dice', title: 'KCD Dice', desc: 'Farkle, KCD-style.', active: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-5xl px-4 pt-24 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-extrabold sm:text-5xl">{intl.formatMessage({ id: 'playground.title' })}</h1>
      <p className="mt-3 text-muted-foreground">{intl.formatMessage({ id: 'playground.subtitle' })}</p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => {
          const inner = (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative rounded-sm border border-border bg-surface p-6 transition-smooth ${
                c.active ? 'hover:-translate-y-1 hover:border-border-strong cursor-pointer' : 'opacity-60'
              }`}
            >
              <Sparkles className="h-5 w-5 text-[var(--accent-violet)]" />
              <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              {!c.active && (
                <span className="absolute right-4 top-4 rounded-sm border border-border bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {intl.formatMessage({ id: 'playground.soon' })}
                </span>
              )}
            </motion.div>
          );
          return c.active ? (
            <Link key={c.slug} to="/playground/horse">
              {inner}
            </Link>
          ) : (
            <div key={c.slug}>{inner}</div>
          );
        })}
      </div>
    </motion.div>
  );
}
