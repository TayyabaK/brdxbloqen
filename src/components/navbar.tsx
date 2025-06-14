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
        position: 'relative',
        // Top rainbow gradient
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(
            to right, 
            #ff0000 0%, 
            #ff9900 10%, 
            #d0de21 20%, 
            #4fdc4a 30%, 
            #3fdad8 40%, 
            #2fc9e2 50%, 
            #1c7fee 60%, 
            #5f15f2 70%, 
            #ba0cf8 80%, 
            #fb07d9 90%, 
            #ff0000 100%
          )`,
          zIndex: 1,
        },
        // Bottom rainbow gradient
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(
            to right, 
            #ff0000 0%, 
            #ff9900 10%, 
            #d0de21 20%, 
            #4fdc4a 30%, 
            #3fdad8 40%, 
            #2fc9e2 50%, 
            #1c7fee 60%, 
            #5f15f2 70%, 
            #ba0cf8 80%, 
            #fb07d9 90%, 
            #ff0000 100%
          )`,
          zIndex: 1,
        },
      }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2, // Ensure logo appears above gradients
          }}>
          <Image
            src='/images/brdxbloqen.png'
            alt='BRD x Bloqen Logo'
            width={200}
            height={80}
            priority
          />
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
