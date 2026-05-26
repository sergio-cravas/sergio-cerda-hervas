import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useIntl } from 'react-intl';

import { useLangStore } from '@/shared/store/langStore';
import { useVisitedProjectsStore } from '@/shared/store/visitedProjectsStore';
import type { Project } from '@/shared/data/projects';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const intl = useIntl();
  const lang = useLangStore((s) => s.lang);
  const visited = useVisitedProjectsStore((s) => s.visited.includes(project.slug));
  const description = lang === 'es' ? project.description_es : project.description_en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-sm border border-border bg-surface transition-smooth hover:-translate-y-1 hover:border-border-strong"
      >
        <div className="relative aspect-video overflow-hidden bg-background">
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.03] group-hover:blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 translate-y-2 px-5 pb-5 opacity-0 transition-smooth group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-xs font-mono text-[var(--accent-cyan)]">
              {intl.formatMessage({ id: 'work.view' })} →
            </span>
          </div>
          {visited && (
            <span className="absolute right-3 top-3 rounded-sm border border-border-strong bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--accent-violet)] backdrop-blur">
              {intl.formatMessage({ id: 'work.seen' })}
            </span>
          )}
        </div>
        <div className="p-5">
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{project.pretitle}</div>
          <h3 className="mt-1 text-lg font-bold text-foreground">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
