// src/app/ThemeClientProviders.tsx
'use client';

import { ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/theme/theme';
import { ModalProvider } from '@/contexts/modal-context';

export default function ThemeClientProviders({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
}
