import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

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

export default function StatsCarousel() {
  const [centerIndex, setCenterIndex] = useState(0);
  const theme = useTheme();
  const prevCenterIndexRef = useRef(centerIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Build an array of current on-screen positions
  const currentPositions = stats.map((_, i) => {
    const rel = (i - centerIndex + stats.length) % stats.length;
    return ellipsePositions[rel];
  });

  // Find which index has the smallest y (i.e. is visually at the top)
  const topIndex = currentPositions.reduce(
    (bestIdx, pos, idx) =>
      pos.y < currentPositions[bestIdx].y ? idx : bestIdx,
    0
  );

  // Store current centerIndex for transition comparison
  useEffect(() => {
    prevCenterIndexRef.current = centerIndex;
  }, [centerIndex]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '800px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f2dfb4',
        py: 15,
      }}>
      {stats.map((stat, i) => {
        const { x, y } = currentPositions[i];
        const isTop = i === topIndex;

        // Calculate previous and current relative positions
        const prevRel =
          (i - prevCenterIndexRef.current + stats.length) % stats.length;
        const currentRel = (i - centerIndex + stats.length) % stats.length;

        // Check if this card is wrapping from left to right
        const isWrapping =
          (prevRel === 0 && currentRel === stats.length - 1) ||
          (prevRel === stats.length - 1 && currentRel === 0);

        return (
          <motion.div
            key={i}
            animate={{
              x,
              y: y + 150, // Shift down by 150px for vertical centering
              scale: isTop ? 1.3 : 0.9,
              zIndex: isTop ? 2 : 1,
              opacity: isTop ? 1 : 1,
            }}
            transition={{
              duration: isWrapping ? 0 : 0.8, // Disable animation for wrapping cards
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
            }}>
            <Box
              sx={{
                width: 200,
                height: 200,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                boxShadow: theme.shadows[6],
                overflow: 'hidden',
                textAlign: 'center',
              }}>
              <Box
                component='img'
                src={stat.image}
                alt='icon'
                sx={{
                  width: '100%',
                  height: '70%', // Allocate 65% to the image
                  objectFit: 'contain',
                  borderBottom: '1px solid #eee',
                }}
              />
              <Box
                sx={{
                  backgroundColor: colors[i % colors.length],
                  height: '30%', // Remaining 35% for text
                  px: 1.5,
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Typography
                  variant='caption'
                  sx={{
                    color: 'white',
                    fontSize: '0.75rem',
                    lineHeight: 1.4,
                    fontWeight: isTop ? 'bold' : 'normal',
                  }}>
                  {stat.text}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        );
      })}
    </Box>
  );
}
