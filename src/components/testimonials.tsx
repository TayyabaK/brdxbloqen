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

// Testimonial data
const testimonials = [
  {
    name: 'Melinda Maher',
    title: 'Head of Talent Development',
    avatar: '/avatars/melinda.jpg',
    quote:
      'Culture is our North Star. Our people choose to come to work every day—and this helps us build a workplace worth choosing.',
    color: '#fde7b9',
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
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(8, 2),
}));

const StackBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '90vw',
  maxWidth: 800,
  height: '60vh',
  maxHeight: 500,
  [theme.breakpoints.down('sm')]: {
    height: 300,
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
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  const n = testimonials.length;
  const visibleCards = [
    testimonials[index % n],
    testimonials[(index + 1) % n],
    testimonials[(index + 2) % n],
  ];

  const handleChange = async (newIndex: number) => {
    await controls.start({
      rotateX: 15,
      y: -10,
      transition: { duration: 0.4 },
    });
    controls.set({ rotateX: 0, y: 0 });
    setIndex(newIndex);
  };

  const next = () => handleChange((index + 1) % n);
  const prev = () => handleChange((index - 1 + n) % n);

  return (
    <Section>
      <StackBox>
        <ArrowButton onClick={prev} sx={{ left: isSm ? 8 : 16 }}>
          <ChevronLeftIcon />
        </ArrowButton>

        {visibleCards.map((t, i) => {
          const pos = (i - index + n) % n;
          const zIndex = n - pos;
          const offsets = [
            { x: 0, y: 0, angle: 2 },
            { x: -10, y: 6, angle: -2 },
            { x: 10, y: 12, angle: 1 },
            { x: 0, y: 0, angle: 0 }, // Center card
            { x: -10, y: -6, angle: -1 },
            { x: 10, y: -12, angle: 2 },
            { x: 0, y: 0, angle: 0 }, // Last card
          ];
          const { x, y, angle } = offsets[pos];

          return (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex,
              }}>
              <motion.div
                animate={{ x, y, rotate: angle }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
                <motion.div
                  animate={i === index ? controls : {}}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: 1000,
                  }}>
                  <Card
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: { xs: 300, md: 400 },
                      background: t.color,
                      overflow: 'hidden',
                      boxShadow: theme.shadows[4],
                      position: 'relative',
                      borderRadius: 2,
                      border: `20px solid white`,
                    }}>
                    <CardContent
                      sx={{
                        height: '100%',
                        padding: theme.spacing(6, 4),
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}>
                      <Typography
                        sx={{
                          fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
                          lineHeight: 1.4,
                        }}>
                        “{t.quote}”
                      </Typography>

                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <Avatar
                          src={t.avatar}
                          sx={{ width: 48, height: 48, mr: 2 }}
                        />
                        <Box>
                          <Typography
                            fontWeight={700}
                            sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                            {t.name}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='text.secondary'
                            sx={{
                              fontSize: { xs: '0.75rem', md: '0.875rem' },
                            }}>
                            {t.title}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        variant='subtitle2'
                        sx={{
                          position: 'absolute',
                          right: 16,
                          bottom: 16,
                          fontWeight: 700,
                          fontSize: { xs: '0.875rem', md: '1rem' },
                          color: theme.palette.text.primary,
                        }}>
                        <Box
                          component='img'
                          src={t.companyLogo}
                          alt='logo'
                          sx={{ height: { xs: 24, md: 32 } }}
                        />
                      </Typography>
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
