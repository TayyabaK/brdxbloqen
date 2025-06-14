// components/Hero.tsx
import React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  Chip,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// Glass panel with improved aesthetics
const TextPanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  backdropFilter: 'blur(16px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.85),
  borderRadius: theme.shape.borderRadius * 3,
  padding: theme.spacing(5),
  boxShadow: `0 12px 48px ${alpha(theme.palette.common.black, 0.15)}`,
  border: `1px solid ${alpha(theme.palette.common.white, 0.25)}`,
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 2,
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

// Image container with matching dimensions
const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 3,
  overflow: 'hidden',
  backgroundColor: theme.palette.grey[100],
  height: '100%',
  minHeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 12px 48px ${alpha(theme.palette.common.black, 0.1)}`,
  border: `1px solid ${alpha(theme.palette.grey[300], 0.3)}`,
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.shape.borderRadius * 2,
    minHeight: 350,
  },
}));

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component='section'
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${alpha(
          theme.palette.primary.light,
          0.1
        )} 0%, ${alpha(theme.palette.primary.main, 1)} 100%)`,
        py: { xs: 2, md: 1 },
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
      }}>
      {/* Decorative elements */}

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          background: `radial-gradient(circle at 70% 50%, ${alpha(
            theme.palette.primary.light,
            0.15
          )} 0%, transparent 60%)`,
          zIndex: 1,
        }}
      />

      <Container
        maxWidth='xl' // Changed to xl for wider layout
        sx={{
          position: 'relative',
          zIndex: 2,
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}>
          {/* Left: Text Panel */}
          <Box
            sx={{
              flex: 1,
              height: { xs: 'auto', md: 600 }, // Fixed height on desktop
              minHeight: { xs: 400, md: 600 },
            }}>
            <TextPanel
              component={motion.div}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}>
              <Box sx={{ mb: 4 }}>
                <Chip
                  label='BLOQEN × BRDIGITECH'
                  color='primary'
                  sx={{
                    borderRadius: 8,
                    height: 36,
                    fontWeight: 700,
                    bgcolor: theme.palette.grey[900],
                    color: theme.palette.common.white,
                    px: 2,
                    fontSize: '0.875rem',
                    '& .MuiChip-label': {
                      px: 0.5,
                    },
                  }}
                />
              </Box>

              <Typography
                variant='h1'
                sx={{
                  fontSize: {
                    xs: '2.25rem',
                    sm: '2.75rem',
                    md: '3.5rem',
                    lg: '4rem',
                  },
                  lineHeight: 1.15,
                  fontWeight: 800,
                  mb: 4,
                  color: theme.palette.text.primary,
                }}>
                Launch your{' '}
                <Box
                  component='span'
                  sx={{
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block',
                  }}>
                  Web3 vision
                </Box>{' '}
                with confidence
              </Typography>

              <Typography
                variant='subtitle1'
                sx={{
                  mb: 4,
                  lineHeight: 1.7,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  color: theme.palette.text.secondary,
                }}>
                Full-stack Web3 solutions by Bloqen + BR Digitech —{' '}
                <Box component='span' sx={{ fontWeight: 600 }}>
                  we specialize in <br />
                </Box>
                <Box
                  component='span'
                  sx={{
                    display: 'inline-block',
                    minHeight: '1.5em',
                  }}>
                  <TypeAnimation
                    sequence={[
                      'STRATEGY',
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
                    cursor={true}
                    repeat={Infinity}
                    style={{
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 700,
                    }}
                  />
                </Box>
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
                <Button
                  component={motion.a}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: `0 8px 24px ${alpha(
                      theme.palette.primary.main,
                      0.3
                    )}`,
                  }}
                  whileTap={{ scale: 0.97 }}
                  href='#book-call'
                  variant='contained'
                  color='primary'
                  size='large'
                  sx={{
                    borderRadius: theme.shape.borderRadius * 3,
                    px: 6,
                    py: 1.75,
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '1rem',
                  }}>
                  Schedule Free Consultation
                </Button>
              </Box>
            </TextPanel>
          </Box>

          {/* Right: Image Container */}
          <Box
            sx={{
              flex: 1,
              height: { xs: 'auto', md: 600 }, // Matches text panel height
              minHeight: { xs: 400, md: 600 },
            }}>
            <ImageContainer
              component={motion.div}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}>
              <Image
                src='/images/brd-bloqen-hero-image.gif'
                alt='Web3 Development'
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                priority
              />
              {/* Overlay gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(to right, ${alpha(
                    theme.palette.grey[100],
                    0.1
                  )} 0%, ${alpha(theme.palette.grey[900], 0.1)} 100%)`,
                }}
              />
            </ImageContainer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
