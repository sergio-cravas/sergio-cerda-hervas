import type { ReactNode } from 'react';

import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { useLangStore } from '@/shared/store/langStore';

import { messages } from '../messages';

export function IntlProvider({ children }: { children: ReactNode }) {
  const lang = useLangStore((s) => s.lang);

  return (
    <ReactIntlProvider locale={lang} messages={messages[lang]} defaultLocale="en">
      {children}
    </ReactIntlProvider>
  );
}
