'use client';

import React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Box, Typography, Button, Container, Chip } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ContactModalWrapper from './modals/contact-modal-wrapper';
import { useModal } from '@/contexts/modal-context';

const TextPanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  backdropFilter: 'blur(16px)',
  background: `radial-gradient(
    circle at 30% 30%,
    #cfeffc,
    #b4e0f2,
    #e8ede9 60%,
    #d7f2f1 80%,
    #d1d7e7
  );`,
  borderRadius: Number(theme.shape.borderRadius) * 3,
  // new responsive override for right inner corners
  [theme.breakpoints.up('md')]: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    borderRadius: 8,
  },
  padding: theme.spacing(4),
  boxShadow: `0 12px 48px ${alpha(theme.palette.common.black, 0.15)}`,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    borderRadius: 8,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: Number(theme.shape.borderRadius) * 3,
  // new responsive override for left inner corners
  [theme.breakpoints.up('md')]: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: Number(theme.shape.borderRadius) * 2,
    height: 300,
  },
  overflow: 'hidden',
  backgroundColor: theme.palette.grey[100],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%', // ✅ Set fixed height or minHeight
  width: '100%', // ✅ Ensure width exists for fill
  boxShadow: `0 12px 48px ${alpha(theme.palette.common.black, 0.1)}`,
  [theme.breakpoints.down('sm')]: {
    borderRadius: Number(theme.shape.borderRadius) * 2,
    height: 300,
  },
}));

const Hero: React.FC = () => {
  const theme = useTheme();
  const { openModal } = useModal();

  const handleContactUs = () => {
    openModal(<ContactModalWrapper />);
  };

  return (
    <Box
      component='section'
      sx={{
        background: theme.palette.primary.light,
        py: 6,
        px: { xs: 2, sm: 4 },
      }}>
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 0 },
            alignItems: 'stretch', // 🔥 Ensures both columns stretch equally
            minHeight: { md: 480 }, // Or any fixed minimum height you want
          }}>
          {/* Left Panel */}
          <Box sx={{ flex: 1 }}>
            <TextPanel sx={{ width: '100%' }}>
              <Chip
                label='BRDIGITECH × BLOQEN'
                sx={{
                  alignSelf: 'flex-start',
                  mb: 3,
                  borderRadius: 0,
                  height: 32,
                  fontWeight: 700,
                  bgcolor: '#f9c163',
                  color: 'black',
                  px: 2,
                  fontSize: '0.75rem',
                }}
              />

              <Typography
                variant='h1'
                sx={{
                  fontSize: {
                    xs: '1.75rem',
                    sm: '2.25rem',
                    md: '3rem',
                    lg: '3.5rem',
                  },
                  lineHeight: 1.15,
                  fontWeight: 800,
                  mb: 3,
                }}>
                Launch your{' '}
                <Box
                  component='span'
                  sx={{
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}>
                  Web3 vision
                </Box>{' '}
                with confidence
              </Typography>

              <Typography
                variant='subtitle1'
                sx={{
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: {
                    xs: '0.875rem',
                    sm: '1rem',
                    md: '1.25rem',
                  },
                  color: theme.palette.text.secondary,
                }}>
                Full-stack Web3 solutions by BRDigitech + Bloqen —{' '}
                <Box component='span' sx={{ fontWeight: 600 }}>
                  we specialize in
                </Box>
                <br />
                <Box
                  component='span'
                  sx={{
                    fontWeight: 700,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontSize: {
                      xs: '0.9rem',
                      sm: '1.1rem',
                      md: '1.3rem',
                    },
                  }}>
                  <TypeAnimation
                    sequence={[
                      'BUSINESS STRATEGY',
                      1500,
                      'SMART CONTRACTS',
                      1500,
                      'AUTOMATION BOTS',
                      1500,
                      'TOKEN PRESALES',
                      1500,
                      'NFT LAUNCHPAD AND MARKETPLACE',
                      2500,
                      'WEB3 DAPPS',
                      1500,
                    ]}
                    wrapper='span'
                    cursor
                    repeat={Infinity}
                    style={{
                      fontWeight: 700,
                    }}
                  />
                </Box>
              </Typography>

              <Button
                component={motion.a}
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                }}
                whileTap={{ scale: 0.97 }}
                href='#book-call'
                variant='contained'
                color='primary'
                size='medium'
                sx={{
                  borderRadius: Number(theme.shape.borderRadius) * 2,
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: {
                    xs: '0.75rem', // ⬅️ smaller on small screens
                    sm: '0.875rem',
                    md: '1rem',
                  },
                  width: { xs: '100%', sm: 'auto' },
                  whiteSpace: 'normal',
                  textAlign: 'center', // ✅ centers text inside
                  justifyContent: 'center', // ✅ centers text on button level
                  lineHeight: 1.4,
                }}
                onClick={handleContactUs}>
                Schedule Free Consultation
              </Button>
            </TextPanel>
          </Box>

          {/* Right Panel */}
          <Box sx={{ flex: 1 }}>
            <ImageContainer sx={{ width: '100%' }}>
              <Image
                src='/images/brd-bloqen-hero-image.gif'
                alt='Web3 Development'
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
                unoptimized
              />
            </ImageContainer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
