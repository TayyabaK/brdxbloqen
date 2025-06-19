// src/app/ThemeClientProviders.tsx
'use client';

import { ReactNode } from 'react';
import { ModalProvider } from '@/contexts/modal-context';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme/theme';
import CssBaseline from '@mui/material/CssBaseline';

export default function ThemeClientProviders({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <CssBaseline />
        {children}
      </ModalProvider>
    </ThemeProvider>
  );
}
