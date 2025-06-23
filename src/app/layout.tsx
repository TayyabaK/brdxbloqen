// app/layout.tsx
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeClientProviders from './theem-client-provider';

export const metadata = {
  title: 'BRD x BLOQEN',
  description: 'Partnership between BRD and BLOQEN',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeClientProviders>{children}</ThemeClientProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
