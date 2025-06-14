// components/Hero.tsx
import React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';

// Glass panel (replaces InfoPanel)
const TextPanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  backdropFilter: 'blur(16px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.75),
  borderRadius:
    typeof theme.shape.borderRadius === 'number'
      ? theme.shape.borderRadius * 2
      : `calc(${theme.shape.borderRadius} * 2)`,
  padding: theme.spacing(4),
  boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.18)}`,
  border: `1px solid ${alpha(theme.palette.common.white, 0.18)}`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 400,
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    minHeight: 350,
  },
}));

// Gradient + grid image panel (unchanged)
const ImagePanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  background: `linear-gradient(180deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
  minHeight: 400,
  [theme.breakpoints.down('sm')]: {
    minHeight: 300,
  },
}));

export default function Hero() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box
      component='section'
      sx={{
        py: { xs: 4, md: 10 },
        backgroundColor: theme.palette.grey[50],
      }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 4 },
          }}>
          {/* ─────────── Left: Glass TextPanel ─────────── */}
          <TextPanel sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            {/* Top badge */}
            <Box>
              <Button
                variant='contained'
                color='secondary'
                size='small'
                sx={{
                  borderRadius: 8,
                  textTransform: 'none',
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': { bgcolor: 'primary.dark' },
                  mb: { xs: 1, md: 2 },
                  px: 2,
                  py: 0.5,
                }}
                startIcon={
                  <Box
                    component='span'
                    sx={{
                      display: 'inline-block',
                      width: 14,
                      height: 14,
                      backgroundImage: `url('/icons/business.svg')`,
                      backgroundSize: 'contain',
                    }}
                  />
                }>
                BLOQEN + BRDIGITECH
              </Button>
            </Box>

            {/* Headline */}
            <Box>
              <Typography
                variant={isSm ? 'h2' : 'h3'}
                component='h1'
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: { xs: 1.5, md: 2 },
                  fontSize: {
                    xs: '1.75rem',
                    sm: '2.5rem',
                    md: '3rem',
                  },
                  '& em': {
                    fontStyle: 'normal',
                    color: 'primary.main',
                    fontWeight: 800,
                  },
                }}>
                {isSm ? (
                  <>
                    Launch your Web3 vision with confidence <br />
                    <em>Full‑stack Web3 agency by Bloqen + BR Digitech –</em>
                  </>
                ) : (
                  <>
                    Strategy, <em>smart contracts</em>, bots, and presales.
                  </>
                )}
              </Typography>

              <Typography
                variant='subtitle1'
                color='text.secondary'
                sx={{
                  mb: { xs: 3, md: 4 },
                  fontSize: {
                    xs: '1rem',
                    md: '1.125rem',
                  },
                  lineHeight: 1.5,
                }}>
                Everything you need to manage payments, track expenses, and
                scale efficiently.
              </Typography>
            </Box>

            {/* CTAs */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}>
              <Button
                variant='contained'
                color='primary'
                size={isSm ? 'large' : 'medium'}
                sx={{
                  textTransform: 'none',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  fontWeight: 600,
                }}
                endIcon={
                  <Box
                    component='span'
                    sx={{
                      display: 'inline-block',
                      width: 14,
                      height: 14,
                      borderRight: '2px solid currentColor',
                      borderBottom: '2px solid currentColor',
                      transform: 'rotate(-45deg)',
                      ml: 1,
                    }}
                  />
                }>
                Get Started
              </Button>
              <Button
                variant='outlined'
                color='primary'
                size={isSm ? 'large' : 'medium'}
                sx={{
                  textTransform: 'none',
                  px: { xs: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  fontWeight: 600,
                }}>
                Learn More
              </Button>
            </Box>
          </TextPanel>

          {/* ─────────── Right: Card graphic ─────────── */}
          <ImagePanel sx={{ flex: 1 }}>
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 20, md: 40 },
                right: { xs: 20, md: 40 },
                bottom: { xs: 20, md: 40 },
                left: { xs: 20, md: 40 },
              }}>
              <Image
                src='/images/brd-bloqen-hero-image.gif'
                alt='Business Card'
                layout='fill'
                objectFit='contain'
                priority
              />
            </Box>
          </ImagePanel>
        </Box>
      </Container>
    </Box>
  );
}
