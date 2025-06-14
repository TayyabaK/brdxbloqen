import React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Box, Typography, Button, Container, Chip } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// Glass panel with improved aesthetics
const TextPanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  backdropFilter: 'blur(16px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.85),
  borderRadius: Number(theme.shape.borderRadius) * 3,
  padding: theme.spacing(5),
  boxShadow: `0 12px 48px ${alpha(theme.palette.common.black, 0.15)}`,
  border: `1px solid ${alpha(theme.palette.common.white, 0.25)}`,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4),
    borderRadius: Number(theme.shape.borderRadius) * 2,
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
  borderRadius: Number(theme.shape.borderRadius) * 3,
  overflow: 'hidden',
  backgroundColor: theme.palette.grey[100],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  boxShadow: `0 12px 48px ${alpha(theme.palette.common.black, 0.1)}`,
  border: `1px solid ${alpha(theme.palette.grey[300], 0.3)}`,
  [theme.breakpoints.down('sm')]: {
    borderRadius: Number(theme.shape.borderRadius) * 2,
  },
}));

const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component='section'
      sx={{
        position: 'relative',
        background: `linear-gradient(135deg, ${alpha(
          theme.palette.primary.light,
          0.1
        )} 0%, ${alpha(theme.palette.primary.main, 1)} 100%)`,
        py: { xs: 4, md: 0 },
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
      <Container
        maxWidth='xl'
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
            height: { xs: 'auto', md: '60vh' }, // Fixed height for desktop
          }}>
          {/* Left: Text Panel */}
          <Box
            sx={{
              flex: 1,
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              minHeight: { xs: 400, md: 'auto' },
            }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ height: '100%' }}>
              <TextPanel>
                <Box sx={{ mb: 4 }}>
                  <Chip
                    label='BLOQEN × BRDIGITECH'
                    color='primary'
                    sx={{
                      borderRadius: 8,
                      height: 36,
                      fontWeight: 700,
                      bgcolor: '#f9c163',
                      color: 'black',
                      px: 2,
                      fontSize: '0.875rem',
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
                  }}>
                  Launch your{' '}
                  <Box
                    component='span'
                    sx={{
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
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
                    we specialize in
                  </Box>
                  <br />
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
                </Typography>

                <Box sx={{ display: 'flex', gap: 3 }}>
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
                      borderRadius: Number(theme.shape.borderRadius) * 3,
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
            </motion.div>
          </Box>

          {/* Right: Image Container */}
          <Box
            sx={{
              flex: 1,
              width: '100%',
              height: { xs: 400, md: '100%' }, // Match text panel height
              position: 'relative',
            }}>
            <ImageContainer>
              <Image
                src='/images/brd-bloqen-hero-image.gif'
                alt='Web3 Development'
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                priority
                unoptimized // Ensures GIF animation works
              />
            </ImageContainer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
