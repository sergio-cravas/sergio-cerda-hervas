import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

import { IntlProvider } from '@/shared/translations/IntlProvider';
import { RootLayout } from '@/shared/ui/layout/RootLayout';

function AppLayout() {
  return (
    <IntlProvider>
      <RootLayout>
        <Outlet />
      </RootLayout>
      <Toaster theme="dark" />
    </IntlProvider>
  );
}

export default AppLayout;
