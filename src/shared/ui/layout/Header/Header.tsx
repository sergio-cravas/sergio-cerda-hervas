import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { LanguageToggle } from '@/shared/ui/navigation/LanguageToggle';

export function Header() {
  const intl = useIntl();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-baseline gap-2 transition-smooth">
          <span className="font-mono text-[15px] font-extrabold tracking-tight text-foreground group-hover:text-gradient">
            &lt;SCH /&gt;
          </span>
        </Link>
        
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          {/* <NavLink
            to="/blog"
            className={({ isActive }) => `transition-smooth hover:text-foreground${isActive ? ' text-foreground' : ''}`}
          >
            {intl.formatMessage({ id: 'nav.blog' })}
          </NavLink> */}

          {/* <NavLink
            to="/playground"
            className={({ isActive }) => `transition-smooth hover:text-foreground${isActive ? ' text-foreground' : ''}`}
          >
            {intl.formatMessage({ id: 'nav.playground' })}
          </NavLink> */}

          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
