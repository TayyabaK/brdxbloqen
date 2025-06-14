import React from 'react';
import { Box } from '@mui/material';
import Navbar from './navbar';
import { theme } from '@/theme/theme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box
        display='flex'
        sx={{
          backgroundColor: 'white',
          minHeight: '100vh',
          width: '100%', // ✅ Full width
          overflowY: 'auto', // ✅ Ensure only the outer layout scrolls
        }}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.light,
            display: { xs: 'none', md: 'block' }, // Hide on mobile screens
          }}></Box>

        {children}
      </Box>
    </>
  );
};

export default Layout;
