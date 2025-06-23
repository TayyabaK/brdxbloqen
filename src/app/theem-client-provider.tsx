// src/app/ThemeClientProviders.tsx
'use client';

import { ReactNode } from 'react';
import { ModalProvider } from '@/contexts/modal-context';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const clientSideEmotionCache = createCache({
  key: 'css',
  prepend: true,
});

export default function ThemeClientProviders({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <CssBaseline />
          {children}
        </ModalProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
