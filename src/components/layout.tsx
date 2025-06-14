import React from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box>
        <Container maxWidth={false}>{children}</Container>
      </Box>
    </>
  );
};

export default Layout;
