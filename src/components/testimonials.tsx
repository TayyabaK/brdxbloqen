// components/Testimonials.tsx
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

// base data
const baseTestimonials = [
  {
    name: 'Alice Johnson',
    title: 'CEO',
    avatar: '/avatars/alice.jpg',
    quote:
      'Bloqen + BRDigitech transformed our Web3 roadmap. Their strategic vision and flawless execution took us from concept to live in under 8 weeks.',
    color: '#e1ddfe',
    company: 'Wonderland Co.',
  },
  {
    name: 'Bob Smith',
    title: 'Founder',
    avatar: '/avatars/bob.jpg',
    quote:
      'I was amazed at how quickly they deployed our NFT marketplace—every detail polished, every edge case handled. Truly pros.',
    color: '#ffbda7',
    company: 'CryptoKit',
  },
  {
    name: 'Carol Lee',
    title: 'CTO',
    avatar: '/avatars/carol.jpg',
    quote:
      'Their “strategy → smart contracts → presales” flow is bulletproof. We hit our funding targets in record time.',
    color: '#eaffb2',
    company: 'DeFiHub',
  },
  {
    name: 'David Kim',
    title: 'Product Lead',
    avatar: '/avatars/david.jpg',
    quote:
      'BRDigitech’s expertise in Web3 is unmatched. They guided us through every step, from ideation to launch.',
    color: '#b2eaff',
    company: 'MetaVerse',
  },
  {
    name: 'Eva Green',
    title: 'Marketing Director',
    avatar: '/avatars/eva.jpg',
    quote:
      'Their marketing strategies are razor-sharp. We saw a 300% increase in community engagement pre-launch.',
    color: '#ffd8ea',
    company: 'ChainLink',
  },
];

// attach a random angle in [-30,30] once for each testimonial
const testimonials = baseTestimonials.map((t) => ({
  ...t,
  angle: Math.random() * 15,
}));

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
  maxWidth: 700,
  height: '70vw',
  maxHeight: 500,
  [theme.breakpoints.down('sm')]: {
    width: '95vw',
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
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.1),
    transform: 'translateY(-50%) scale(1.1)',
  },
}));

export default function Testimonials() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const n = testimonials.length;

  const handleChange = async (newIndex: number, dir: number) => {
    // lift only the active card
    await controls.start({
      y: -40,
      rotate: dir * 10,
      scale: 1.05,
      opacity: 0.8,
      transition: { duration: 0.3 },
    });
    // reset and reorder
    controls.set({ y: 0, rotate: 0, scale: 1, opacity: 1 });
    setIndex(newIndex);
  };

  const next = () => handleChange((index + 1) % n, 1);
  const prev = () => handleChange((index - 1 + n) % n, -1);

  return (
    //make size match the screen size
    <Section sx={{ backgroundColor: theme.palette.primary.light }}>
      <StackBox>
        {/* Prev arrow */}
        <ArrowButton onClick={prev} sx={{ left: isSm ? 8 : 16 }}>
          <ChevronLeftIcon />
        </ArrowButton>

        {/* Stacked cards */}
        {testimonials.map((t, i) => {
          const pos = (i - index + n) % n;
          const zIndex = n - pos;
          const offsetX = (pos - 2) * 20;
          const offsetY = pos * 6;

          return (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex,
              }}>
              {/* base positioning + tilt */}
              <motion.div
                animate={{
                  x: offsetX,
                  y: offsetY,
                  rotate: t.angle,
                  scale: i === index ? 1 : 0.9,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
                {/* lift animation only on active */}
                <motion.div animate={i === index ? controls : {}}>
                  <Card
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: { xs: '300px', md: '400px' },
                      background: t.color,
                      overflow: 'hidden',
                      boxShadow: theme.shadows[4],
                      position: 'relative',
                      borderRadius: 2,
                      border: `20px solid white`,
                      fontWeight: 500,
                      fontSize: {
                        xs: '1.125rem',
                        md: '1.25rem',
                        lg: '1.5rem',
                        xl: '1.75rem',
                      },
                    }}>
                    <CardContent sx={{ height: '100%', position: 'relative' }}>
                      <Typography>“{t.quote}”</Typography>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <Avatar src={t.avatar} sx={{ mr: 2 }} />
                        <Box>
                          <Typography fontWeight={700}>{t.name}</Typography>
                          <Typography variant='body2' color='text.secondary'>
                            {t.title}
                          </Typography>
                        </Box>
                      </Box>
                      {/* company name bottom-right */}
                      <Typography
                        variant='subtitle2'
                        sx={{
                          position: 'absolute',
                          right: 16,
                          bottom: 16,
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                        }}>
                        {t.company}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </Box>
          );
        })}

        {/* Next arrow */}
        <ArrowButton onClick={next} sx={{ right: isSm ? 8 : 16 }}>
          <ChevronRightIcon />
        </ArrowButton>
      </StackBox>
    </Section>
  );
}
