import { ArrowRight, Lightbulb, MessagesSquare, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useIntl } from 'react-intl';

import { Button } from '@/components/ui/button';
import { EMAIL_URL, SPOTIFY_PLAYLIST_URL } from '@/shared/constants/links';
import { experience } from '@/shared/data/experience';
import { projects } from '@/shared/data/projects';
import { ExperienceItem } from '@/shared/ui/data/ExperienceItem';
import { ProjectCard } from '@/shared/ui/data/ProjectCard';
import { NowPlayingWidget } from '@/shared/ui/features/NowPlayingWidget';
import { Typewriter } from '@/shared/ui/features/Typewriter';

const AVATAR = '/images/avatar.jpeg';

export function Home() {
  const intl = useIntl();

  return (
    <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      {/* HERO */}
      <section className="flex flex-col items-center pt-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="group relative"
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-accent opacity-0 blur-xl transition-smooth group-hover:opacity-40" />
          <img
            src={AVATAR}
            alt="Sergio Cerdá"
            className="relative h-32 w-32 rounded-full border border-border-strong object-cover"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 font-mono text-sm text-muted-foreground"
        >
          {intl.formatMessage({ id: 'hero.pretitle' })}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-5xl font-extrabold text-foreground sm:text-6xl lg:text-7xl"
        >
          {intl.formatMessage({ id: 'hero.title' })}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-base text-muted-foreground sm:text-lg"
        >
          {intl.formatMessage({ id: 'hero.subtitle' })}{' '}
          <Typewriter words={['React', 'React Native', 'TypeScript', 'Next.js']} className="font-bold" />
        </motion.p>
      </section>

      {/* ABOUT */}
      <Section id="about" title={intl.formatMessage({ id: 'about.title' })}>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          {intl.formatMessage({ id: 'about.body' })}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { Icon: MessagesSquare, t: 'about.t1', d: 'about.t1.desc' },
            { Icon: Lightbulb, t: 'about.t2', d: 'about.t2.desc' },
            { Icon: Users, t: 'about.t3', d: 'about.t3.desc' },
          ].map(({ Icon, t, d }) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-sm border border-border bg-surface p-5 transition-smooth hover:-translate-y-1 hover:border-border-strong"
            >
              <Icon className="h-5 w-5 text-accent-cyan" />
              <div className="mt-4 text-sm font-bold text-foreground">{intl.formatMessage({ id: t })}</div>
              <div className="mt-1 text-xs text-muted-foreground">{intl.formatMessage({ id: d })}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title={intl.formatMessage({ id: 'experience.title' })}>
        <ol className="mt-2">
          {experience.map((item, i) => (
            <ExperienceItem key={item.company} item={item} index={i} />
          ))}
        </ol>
      </Section>

      {/* FEATURED WORK */}
      <Section id="work" title={intl.formatMessage({ id: 'work.title' })}>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Section>

      {/* NOW PLAYING */}
      {import.meta.env.VITE_SHOW_SPOTIFY === 'true' && (
        <Section id="now-playing" title={intl.formatMessage({ id: 'nowplaying.title' })}>
          <NowPlayingWidget variant="full" />
          
          <a
            href={SPOTIFY_PLAYLIST_URL}
            target="_blank"
            rel="noreferrer"
            className="link-underline mt-6 inline-block text-sm text-muted-foreground transition-smooth hover:text-foreground"
          >
            {intl.formatMessage({ id: 'nowplaying.cta' })}
          </a>
        </Section>
      )}

      {/* CONTACT */}
      <Section id="contact" title={intl.formatMessage({ id: 'contact.title' })} center>
        <p className="mx-auto max-w-md text-center text-muted-foreground">
          {intl.formatMessage({ id: 'contact.body' })}
        </p>
        <div className="mt-8 flex justify-center">
          <a href={EMAIL_URL}>
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-sm border border-border-strong bg-surface px-8 text-foreground transition-smooth hover:bg-surface active:scale-[0.97]"
            >
              <span className="absolute inset-0 -z-10 bg-gradient-accent opacity-0 transition-smooth group-hover:opacity-100" />
              <span className="relative transition-smooth group-hover:text-primary-foreground">
                {intl.formatMessage({ id: 'contact.cta' })}
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </Section>
    </div>
  );
}

function Section({
  id,
  title,
  children,
  center,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <section id={id} className="mt-24 sm:mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`text-2xl font-bold text-foreground sm:text-3xl ${center ? 'text-center' : ''}`}
      >
        <span className="font-mono text-sm text-muted-foreground mr-3">§</span>
        {title}
      </motion.h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
