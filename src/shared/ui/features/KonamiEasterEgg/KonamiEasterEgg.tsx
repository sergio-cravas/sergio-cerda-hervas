import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

import { useKonamiCode } from '@/shared/hooks/useKonamiCode';

const PARTICLES = Array.from({ length: 32 }, (_, i) => i);

export function KonamiEasterEgg() {
  const [active, setActive] = useState<boolean>(false);

  const trigger = useCallback(() => {
    setActive(true);
    toast('🎮 Konami unlocked', { description: 'Style inversion engaged.' });
  }, []);

  useKonamiCode(trigger);

  useEffect(() => {
    if (!active) return;
    document.documentElement.classList.add('invert-scheme');
    const t = setTimeout(() => {
      document.documentElement.classList.remove('invert-scheme');
      setActive(false);
    }, 2000);
    return () => {
      clearTimeout(t);
      document.documentElement.classList.remove('invert-scheme');
    };
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {PARTICLES.map((i) => {
            const angle = (i / PARTICLES.length) * Math.PI * 2;
            const dist = 280 + Math.random() * 220;
            return (
              <motion.span
                key={i}
                className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-gradient-accent"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, opacity: 0, scale: 0.3 }}
                transition={{ duration: 1.6, ease: 'easeOut' }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
