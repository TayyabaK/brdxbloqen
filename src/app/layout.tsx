import { ReactNode } from 'react';
import ThemeClientProviders from './theem-client-provider';

export const metadata = {
  title: 'BRD + Bloqen',
  description: 'BRDigitech Partnering with Bloqen',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <ThemeClientProviders>{children}</ThemeClientProviders>
      </body>
    </html>
  );
}
