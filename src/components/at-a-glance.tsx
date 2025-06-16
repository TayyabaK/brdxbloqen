import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  {
    text: '8+ years of blockchain development experience',
    image: '/images/experience.png',
  },
  {
    text: '50+ full-stack Web3 projects launched',
    image: '/images/projects.png',
  },
  { text: 'Clients have raised $1M+ in presales', image: '/images/money.png' },
  {
    text: 'Global delivery team of 51–200 developers',
    image: '/images/developers.png',
  },
  { text: '100% client satisfaction rate', image: '/images/satisfaction.png' },
  { text: '24/7 support and maintenance', image: '/images/maintenance.png' },
  {
    text: 'Custom solutions for every business need',
    image: '/images/custom.png',
  },
];

const colors = [
  '#4698ff',
  '#FF9E4F',
  '#FFC107',
  '#6BCB77',
  '#fc3b4c',
  '#A66CFF',
  '#4151ee',
];

const generateHorizontalEllipsePositions = (
  radiusX = 650,
  radiusY = 350,
  total = stats.length
) => {
  const positions = [];
  const startAngle = 180;
  const angleStep = 180 / (total - 1);

  for (let i = 0; i < total; i++) {
    const angleRad = ((startAngle + i * angleStep) * Math.PI) / 180;
    positions.push({
      x: Math.cos(angleRad) * radiusX,
      y: Math.sin(angleRad) * radiusY,
    });
  }
  return positions;
};

const ellipsePositions = generateHorizontalEllipsePositions();

type Stat = {
  text: string;
  image: string;
};

type StatCardProps = {
  stat: Stat;
  cardColor: string;
  isTop: boolean;
  isMobile?: boolean;
};

const StatCard: React.FC<StatCardProps> = ({
  stat,
  cardColor,
  isTop,
  isMobile = false,
}) => (
  <Box
    sx={{
      width: isMobile ? 300 : 250,
      height: isMobile ? 300 : 250,
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      textAlign: 'center',
      boxShadow: 6,
    }}>
    <Box
      sx={{
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box
        component='img'
        src={stat.image}
        alt='icon'
        sx={{
          maxWidth: '90%',
          maxHeight: '90%',
          objectFit: 'contain',
        }}
      />
    </Box>
    <Box
      sx={{
        width: '100%',
        height: '30%',
        px: 1.5,
        py: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cardColor,
      }}>
      <Typography
        variant='caption'
        sx={{
          color: 'white',
          fontSize: isMobile ? '0.9rem' : '1rem',
          lineHeight: 1.4,
          fontWeight: isTop ? 'bold' : 'normal',
        }}>
        {stat.text}
      </Typography>
    </Box>
  </Box>
);

export default function StatsCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);
  const theme = useTheme();
  const prevCenterIndexRef = useRef(centerIndex);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    prevCenterIndexRef.current = centerIndex;
  }, [centerIndex]);

  if (isSmallScreen) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#f7f2e7',
          py: 4,
          px: 2,
        }}>
        <Typography
          variant='h2'
          sx={{
            fontWeight: 'bold',
            fontSize: '2rem',
            color: 'black',
            opacity: 0.15,
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            mb: 4,
          }}>
          At a Glance
        </Typography>

        <AnimatePresence mode='wait'>
          <motion.div
            key={centerIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              minHeight: 300,
              minWidth: 300,
            }}>
            <StatCard
              stat={stats[centerIndex]}
              cardColor={colors[centerIndex % colors.length]}
              isTop={true}
              isMobile={true}
            />
          </motion.div>
        </AnimatePresence>
      </Box>
    );
  }

  const currentPositions = stats.map((_, i) => {
    const rel = (i - centerIndex + stats.length) % stats.length;
    return ellipsePositions[rel];
  });

  const topIndex = currentPositions.reduce(
    (bestIdx, pos, idx) =>
      pos.y < currentPositions[bestIdx].y ? idx : bestIdx,
    0
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f2dfb4',
        py: 15,
      }}>
      <Box
        sx={{
          position: 'absolute',
          top: 'calc(50% + 150px)',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          textAlign: 'center',
        }}>
        <Typography
          variant='h2'
          sx={{
            fontWeight: 'bold',
            fontSize: {
              xs: '1rem',
              sm: '2rem',
              md: '3rem',
              lg: '4rem',
              xl: '5rem',
            },
            color: 'black',
            opacity: 0.15,
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
          At a Glance
        </Typography>
      </Box>

      {stats.map((stat, i) => {
        const { x, y } = currentPositions[i];
        const isTop = i === topIndex;
        const cardColor = colors[i % colors.length];
        const prevRel =
          (i - prevCenterIndexRef.current + stats.length) % stats.length;
        const currentRel = (i - centerIndex + stats.length) % stats.length;
        const isWrapping =
          (prevRel === 0 && currentRel === stats.length - 1) ||
          (prevRel === stats.length - 1 && currentRel === 0);

        return (
          <motion.div
            key={i}
            animate={{
              x,
              y: y + 150,
              scale: isTop ? 1.3 : 0.9,
              zIndex: isTop ? 2 : 1,
              opacity: 1,
            }}
            transition={{
              duration: isWrapping ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
            }}>
            <StatCard stat={stat} cardColor={cardColor} isTop={isTop} />
          </motion.div>
        );
      })}
    </Box>
  );
}
