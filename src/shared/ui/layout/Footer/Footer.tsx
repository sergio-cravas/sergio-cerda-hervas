import { motion } from 'motion/react';
import { useIntl } from 'react-intl';

export function Footer() {
  const intl = useIntl();
  
  return (
    <footer className="mt-32 border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
        <span>{intl.formatMessage({ id: 'footer.credits' })}</span>
        <Dot />
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

function Dot() {
  return (
    <motion.span
      className="inline-block h-1 w-1 rounded-full bg-muted-foreground/60"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
