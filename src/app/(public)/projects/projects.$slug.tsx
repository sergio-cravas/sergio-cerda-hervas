import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Link, Navigate, useParams } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { getProject } from '@/shared/data/projects';
import { useLangStore } from '@/shared/store/langStore';
import { useVisitedProjectsStore } from '@/shared/store/visitedProjectsStore';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug!);

  if (!project) return <Navigate to="/" replace />;

  return <ProjectDetailView project={project} />;
}

function ProjectDetailView({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  const intl = useIntl();
  const lang = useLangStore((s) => s.lang);
  const addVisited = useVisitedProjectsStore((s) => s.addVisited);

  useEffect(() => {
    addVisited(project.slug);
  }, [project.slug, addVisited]);

  const description = lang === 'es' ? project.description_es : project.description_en;
  const overview = lang === 'es' ? project.overview_es : project.overview_en;
  const role = lang === 'es' ? project.role_es : project.role_en;
  const challenges = lang === 'es' ? project.challenges_es : project.challenges_en;

  return (
    <motion.article initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="mx-auto mt-24 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link to="/" className="link-underline inline-block text-sm text-muted-foreground hover:text-foreground">
          {intl.formatMessage({ id: 'project.back' })}
        </Link>

        <div className="mt-6 font-mono text-xs uppercase tracking-wider text-accent-cyan">
          {project.pretitle}
        </div>

        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">{project.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{description}</p>

        {project.url && project.url !== '#' && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center gap-2 rounded-sm border border-border-strong bg-surface px-4 py-2 text-sm transition-smooth hover:border-[var(--accent-violet)]"
          >
            {intl.formatMessage({ id: 'project.live' })}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}

        <Block title={intl.formatMessage({ id: 'project.overview' })}>
          <p>{overview}</p>
        </Block>
        <Block title={intl.formatMessage({ id: 'project.role' })}>
          <p>{role}</p>
        </Block>
        <Block title={intl.formatMessage({ id: 'project.tech' })}>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <Badge
                key={t}
                variant="outline"
                className="rounded-sm border-border bg-surface font-mono text-[10px] uppercase tracking-wider"
              >
                {t}
              </Badge>
            ))}
          </div>
        </Block>
        <Block title={intl.formatMessage({ id: 'project.challenges' })}>
          <p>{challenges}</p>
        </Block>
      </div>
    </motion.article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 border-t border-border pt-8">
      <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{title}</h2>
      <div className="mt-3 text-base text-foreground/90">{children}</div>
    </section>
  );
}
