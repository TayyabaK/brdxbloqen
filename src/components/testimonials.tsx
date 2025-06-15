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
    title: 'Poland',
    avatar: '/avatars/melinda.jpg',
    quote:
      '“I AM VERY SATISFIED! THANK YOU SO MUCH! The English was excellent and easily understood for all functions. LEGIT SELLER! I will be back for my ERC20 & Bridge Contract! Thanks, team BRD!”',
    color: '#ffd8ea',
    companyLogo: '/logos/twiddy.png',
  },
  {
    name: 'Alice Brown',
    title: 'Scotland',
    avatar: '/avatars/placeholder2.jpg',
    quote:
      '“Being new to the crypto world I was not sure where to start. Team BRD was there to help me create my token and made the process seem so easy. I am now ready for the next steps and I have team BRD on my radar for these next steps.”',
    color: '#e7d9fd',
    companyLogo: '/logos/company2.png',
  },
  {
    name: 'Emily Davis',
    title: 'UAE',
    avatar: '/avatars/placeholder3.jpg',
    quote:
      '“I AM VERY SATISFIED! THANK YOU SO MUCH! The English was excellent and easily understood for all functions. LEGIT SELLER! I will be back for my ERC20 & Bridge Contract! Thanks, team BRD!”',
    color: '#ffbda7',
    companyLogo: '/logos/company3.png',
  },
  {
    name: 'David Martinez',
    title: 'USA',
    avatar: '/avatars/placeholder4.jpg',
    quote:
      '“Team BRD does an excellent job in a timely manner! Great communication and they securely help you deploy your contract from your own computer. I look forward to working with them further!!”',
    color: '#eaffb2',
    companyLogo: '/logos/company4.png',
  },
  {
    name: 'Jane Smith',
    title: 'Germany',
    avatar: '/avatars/placeholder5.jpg',
    quote:
      "“Working with team BRD was a real pleasure! They're super fast, explaining patiently everything one needs to know and guiding us perfectly through this journey. Already working on our next step together and looking forward to a long-term partnership with team BRD! Thanks, guys!”",
    color: '#d9e9fd',
    companyLogo: '/logos/company5.png',
  },
  {
    name: 'Michael Johnson',
    title: 'UAE',
    avatar: '/avatars/placeholder6.jpg',
    quote:
      '“A true professional. The team answered all my questions and addressed all my concerns very patiently. I highly recommend them.”',
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
  [theme.breakpoints.down('md')]: {
    minHeight: '100vh',
  },
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

  const next = () => handleChange(1);
  const prev = () => handleChange(-1);

  const cardWidth = {
    xs: 330, // 823/2 = 411.5 (rounded down)
    sm: 380, // 823/1.5 = 548.66 (rounded down)
    md: 550, // 823/1.2 = 685.83 (rounded up)
    lg: 823, // Original width
    xl: 950, // Original width
  };

  const cardHeight = {
    xs: 220, // 386/2 = 193
    sm: 287, // 386/1.5 = 257.33 (rounded down)
    md: 380, // 386/1.2 = 321.66 (rounded up)
    lg: 400, // Original height
    xl: 500, // Original height
  };

  const n = testimonials.length;
  const visibleCards = [
    testimonials[index % n],
    testimonials[(index + 1) % n],
    testimonials[(index + 2) % n],
  ];

  const handleChange = async (increment: number) => {
    const nextIndex = (index + increment + n) % n;
    const isForward = increment > 0;

    // Determine which control is "leaving" (front) and which is "arriving"
    const leavingControl = controlsFront;
    const arrivingControl = controlsNext;

    // Animate both cards simultaneously
    await Promise.all([
      leavingControl.start({
        x: isForward ? -50 : 50,
        y: -400,
        rotate: isForward ? -15 : 15,
        scale: 0.95,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }),
      arrivingControl.start({
        y: 0,
        scale: 1.02,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }),
    ]);

    // Reset states
    leavingControl.set({ x: 0, y: 0, rotate: 0, scale: 1 });
    arrivingControl.set({ y: 0, scale: 1 });

    // Set new index
    setIndex(nextIndex);
  };
  const quoteFontSize = isSm
    ? '1rem'
    : isMd
    ? '1.25rem'
    : isLg
    ? '1.5rem'
    : '2rem';
  const nameFontSize = isSm ? '0.875rem' : isMd ? '1rem' : '1.125rem';
  const titleFontSize = isSm ? '0.525rem' : isMd ? '0.875rem' : '1rem';

  return (
    <Section>
      <StackBox>
        <ArrowButton onClick={prev} sx={{ left: isSm ? 8 : 16, zIndex: 11 }}>
          <ChevronLeftIcon />
        </ArrowButton>

        {visibleCards.map((t, i) => {
          const zIndex = 10 - i;
          const offsets = [
            { x: 0, y: 0, angle: 0 }, // Top card (no tilt)
            { x: -10, y: 6, angle: -5 }, // Second card (slight tilt)
            { x: 10, y: -12, angle: 5 }, // Third card (slight tilt)
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
                        {t.quote}
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mt: 1,
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
