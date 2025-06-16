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
            #ffb3ba 0%,    
            #ffdfba 10%,    
            #ffffba 20%,    
            #baffc9 30%,   
            #bae1ff 40%,   
            #b9f2ff 50%,   
            #bdb2ff 60%,    
            #d7bde2 70%,    
            #f7b7f7 80%,    
            #ffc9de 90%,    
            #ffb3ba 100%  
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
