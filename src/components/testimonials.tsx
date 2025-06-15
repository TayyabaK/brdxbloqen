import React, { useState } from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Testimonial data (unchanged)
const testimonials = [
  {
    name: 'Melinda Maher',
    title: 'Head of Talent Development',
    avatar: '/avatars/melinda.jpg',
    quote:
      'Culture is our North Star. Our people choose to come to work every day—and this helps us build a workplace worth choosing.',
    color: '#ffd8ea',
    companyLogo: '/logos/twiddy.png',
  },
  {
    name: 'Second Person',
    title: 'Title',
    avatar: '/avatars/placeholder2.jpg',
    quote: 'Second testimonial quote here.',
    color: '#e7d9fd',
    companyLogo: '/logos/company2.png',
  },
  {
    name: 'Third Person',
    title: 'Title',
    avatar: '/avatars/placeholder3.jpg',
    quote: 'Third testimonial quote here.',
    color: '#ffbda7',
    companyLogo: '/logos/company3.png',
  },
  {
    name: 'Fourth Person',
    title: 'Title',
    avatar: '/avatars/placeholder4.jpg',
    quote: 'Fourth testimonial quote here.',
    color: '#eaffb2',
    companyLogo: '/logos/company4.png',
  },
  {
    name: 'Fifth Person',
    title: 'Title',
    avatar: '/avatars/placeholder5.jpg',
    quote: 'Fifth testimonial quote here.',
    color: '#d9e9fd',
    companyLogo: '/logos/company5.png',
  },
  {
    name: 'Sixth Person',
    title: 'Title',
    avatar: '/avatars/placeholder6.jpg',
    quote: 'Sixth testimonial quote here.',
    color: '#f9f0d9',
    companyLogo: '/logos/company6.png',
  },
];

// Styled Components
const Section = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundImage: `url('/images/testimonial-bg.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '70vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 0), // Equal top and bottom padding
  overflow: 'hidden',
}));

const StackBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '90vw',
  maxWidth: 1000,
  height: '70vh',
  minHeight: 500, // Ensure minimum height
  maxHeight: 800,
  margin: '0 auto', // Center the stack box
  [theme.breakpoints.down('xl')]: {
    maxWidth: 900,
    maxHeight: 700,
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: 800,
    maxHeight: 600,
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: 700,
    maxHeight: 500,
    height: 'auto',
    minHeight: 400,
  },
  [theme.breakpoints.down('sm')]: {
    width: '95vw',
    height: 'auto',
    minHeight: 300,
  },
}));

const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  zIndex: 10,
  '&:hover': { background: alpha(theme.palette.primary.main, 0.1) },
}));

// Component
export default function Testimonials() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const [index, setIndex] = useState(0);
  const controlsFront = useAnimation();
  const controlsNext = useAnimation();

  const n = testimonials.length;
  const visibleCards = [
    testimonials[index % n],
    testimonials[(index + 1) % n],
    testimonials[(index + 2) % n],
  ];

  const handleChange = async (increment: number) => {
    // Animate both cards simultaneously
    await Promise.all([
      controlsFront.start({
        x: -300,
        y: -250,
        rotate: -15,
        scale: 0.95,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }),
      controlsNext.start({
        y: -30,
        scale: 1.02,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }),
    ]);

    // Reset animations and update index
    controlsFront.start({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 0 },
    });

    controlsNext.start({
      y: 0,
      scale: 1,
      transition: { duration: 0 },
    });

    setIndex((prevIndex) => (prevIndex + increment + n) % n);
  };

  const next = () => handleChange(1);
  const prev = () => handleChange(-1);

  // Responsive values
  const cardWidth = {
    xs: 320,
    sm: 400,
    md: 500,
    lg: 600,
    xl: 700,
  };
  const cardHeight = {
    xs: 184,
    sm: 230,
    md: 287,
    lg: 345,
    xl: 403,
  };
  const quoteFontSize = isSm
    ? '1rem'
    : isMd
    ? '1.25rem'
    : isLg
    ? '1.5rem'
    : '2rem';
  const nameFontSize = isSm ? '0.875rem' : isMd ? '1rem' : '1.125rem';
  const titleFontSize = isSm ? '0.75rem' : isMd ? '0.875rem' : '1rem';

  return (
    <Section>
      <StackBox>
        <ArrowButton onClick={prev} sx={{ left: isSm ? 8 : 16 }}>
          <ChevronLeftIcon />
        </ArrowButton>

        {visibleCards.map((t, i) => {
          const zIndex = 10 - i;
          const offsets = [
            { x: 0, y: 0, angle: 2 }, // Top card
            { x: -10, y: 6, angle: -2 }, // Second card
            { x: 10, y: 12, angle: 1 }, // Third card
          ];
          const { x, y, angle } = offsets[i];

          return (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex,
              }}>
              <motion.div
                animate={{ x, y, rotate: angle }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
                <motion.div
                  animate={
                    i === 0 ? controlsFront : i === 1 ? controlsNext : {}
                  }
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1200,
                    transformOrigin: 'center',
                  }}>
                  <Card
                    sx={{
                      width: cardWidth,
                      height: cardHeight,
                      background: t.color,
                      overflow: 'hidden',
                      boxShadow: theme.shadows[4],
                      borderRadius: 2,
                      border: `20px solid white`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: cardHeight.xl, // Ensure minimum height for smaller screens
                    }}>
                    <CardContent
                      sx={{
                        height: '100%',
                        width: '100%',
                        padding: isSm ? 3 : 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative',
                      }}>
                      <Typography
                        sx={{
                          fontSize: quoteFontSize,
                          lineHeight: 1.4,
                          textAlign: 'center',
                          mb: 4,
                          px: isSm ? 1 : 4,
                        }}>
                        “{t.quote}”
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mt: 4,
                        }}>
                        <Avatar
                          src={t.avatar}
                          sx={{
                            width: isSm ? 48 : 64,
                            height: isSm ? 48 : 64,
                            mr: 2,
                          }}
                        />
                        <Box>
                          <Typography
                            fontWeight={700}
                            sx={{ fontSize: nameFontSize }}>
                            {t.name}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='text.secondary'
                            sx={{ fontSize: titleFontSize }}>
                            {t.title}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ position: 'absolute', right: 16, bottom: 16 }}>
                        <Box
                          component='img'
                          src={t.companyLogo}
                          alt='logo'
                          sx={{
                            height: isSm ? 24 : 32,
                            maxWidth: isSm ? 100 : 150,
                          }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </Box>
          );
        })}

        <ArrowButton onClick={next} sx={{ right: isSm ? 8 : 16 }}>
          <ChevronRightIcon />
        </ArrowButton>
      </StackBox>
    </Section>
  );
}
