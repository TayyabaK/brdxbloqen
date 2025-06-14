// components/Navbar.tsx
import React from 'react';
import { AppBar, Box, Container } from '@mui/material';
import Image from 'next/image';

const Navbar = () => {
  return (
    <AppBar
      position='static'
      elevation={0}
      sx={{
        backgroundColor: 'white',
        color: 'black',
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            src='/images/brdxbloqen.png' // Replace with your logo path
            alt='Company Logo'
            width={200} // Adjust based on your logo dimensions
            height={80} // Adjust based on your logo dimensions
            priority
          />
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
