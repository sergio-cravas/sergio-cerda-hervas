import { Github, Linkedin, Mail } from 'lucide-react';

import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL } from '@/shared/constants/links';

const items = [
  { href: GITHUB_URL, Icon: Github, label: 'GitHub' },
  { href: LINKEDIN_URL, Icon: Linkedin, label: 'LinkedIn' },
  { href: EMAIL_URL, Icon: Mail, label: 'Email' },
];

export function LeftSidebar() {
  return (
    <aside className="pointer-events-none fixed bottom-0 left-6 top-14 z-30 hidden flex-col items-center justify-end gap-6 pb-6 lg:flex">
      <div className="pointer-events-auto flex flex-col items-center gap-4">
        {items.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-smooth hover:-translate-y-0.5 hover:text-foreground"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
      <div className="h-32 w-px bg-gradient-to-b from-border to-transparent" />
    </aside>
  );
}
