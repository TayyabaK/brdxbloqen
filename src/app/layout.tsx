// app/layout.tsx
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeClientProviders from './theem-client-provider';
import Image from 'next/image';

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
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1250802646599832');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=1250802646599832&ev=PageView&noscript=1'
            alt=''
            unoptimized
            priority={false}
          />
        </noscript>
        <AppRouterCacheProvider>
          <ThemeClientProviders>{children}</ThemeClientProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
