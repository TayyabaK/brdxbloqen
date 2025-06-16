'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {theme} from '@/theme/theme'

const products = [
  {
    name: 'NFTs Alley',
    logo: '/icons/nfts-alley-icon.png',
    images: [
      '/images/nfts-alley.png',
      '/images/nfts-alley-1.png',
      '/images/nfts-alley-2.png',
      '/images/nfts-alley-3.png',
      '/images/nfts-alley-4.png',
    ],
  },
  {
    name: 'Tokkenism',
    logo: '/icons/tokkenism-icon.png',
    images: [
      '/images/create-token.png',
      '/images/launchpad-development.png',
      '/images/presale-purchase.png',
      '/images/lock-tokens.png',
    ],
  },
  {
    name: 'Soloto',
    logo: '/icons/soloto-icon.png',
    images: [
      '/images/soloto-1.png',
      '/images/soloto-2.png',
      '/images/soloto-3.png',
      '/images/soloto-4.png',
      '/images/soloto-5.png',
      '/images/soloto-6.png',
      '/images/soloto-7.png',
      '/images/soloto-8.png',
    ],
  },
  {
    name: 'Pool888',
    logo: '/icons/pool888-icon.png',
    images: [
      '/images/pool888-1.png',
      '/images/pool888-2.png',
      '/images/pool888-3.png',
      '/images/pool888-4.png',
    ],
  },
  {
    name: 'DCentralife',
    logo: '/icons/decentralife-icon.svg',
    images: [
      '/images/decentralife-1.png',
      '/images/decentralife-2.png',
      '/images/decentralife-3.png',
      '/images/decentralife-4.png',
    ],
  },
  {
    name: 'DieCast',
    logo: '/icons/diecast-icon.png',
    images: [
      '/images/diecast-1.png',
      '/images/diecast-2.png',
      '/images/diecast-3.png',
      '/images/diecast-4.png',
      '/images/diecast-5.png',
      '/images/diecast-6.png',
      '/images/diecast-7.png',
    ],
  },
  {
    name: 'Lunex',
    logo: '/icons/lunex-icon.png',
    images: [
      '/images/lunex-1.png',
      '/images/lunex-2.png',
      '/images/lunex-3.png',
      '/images/lunex-4.png',
    ],
  },
  {
    name: 'ICO Offering',
    logo: '/images/brd-logo.png',
    images: [
      '/images/brd-ico-1.png',
      '/images/brd-ico-2.png',
      '/images/brd-ico-3.png',
      '/images/brd-ico-4.png',
      '/images/brd-ico-5.png',
      '/images/brd-ico-6.png',
      '/images/brd-ico-7.png',
    ],
  },
];

const ReadyMadeProducts = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selected, setSelected] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCarouselIndex((prev) => (prev + 1) % products[selected].images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [selected]);

  const handleProductSelect = (index: number) => {
    setDirection(index > selected ? 1 : -1);
    setSelected(index);
    setCarouselIndex(0);
  };

  return (
    <Box
      py={{ xs: 6, md: 10 }}
      px={{ xs: 2, md: 6 }}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(166,108,255,0.08) 0%, rgba(166,108,255,0) 70%)',
        },
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography
          variant='h3'
          sx={{
            fontWeight: 800,
            color: '#111827',
            mb: 2,
            textAlign: 'center',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Our Ready Made Products
        </Typography>
      </motion.div>

      {/* Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: { xs: 3, md: 6 },
          maxWidth: 1400,
          mx: 'auto',
        }}
      >
        {/* Product List */}
        <Paper
          elevation={4}
          sx={{
            width: isMobile ? '100%' : 360,
            borderRadius: 6,
            overflow: 'hidden',
            flexShrink: 0,
            background: `linear-gradient(135deg, rgba(255,255,255,0.8), rgba(245,245,255,0.6))`,
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
          }}
        >
          <List sx={{ p: 0 }}>
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ListItemButton
                  selected={selected === index}
                  onClick={() => handleProductSelect(index)}
                  sx={{
                    py: 2.5,
                    px: 3,
                    backgroundColor: selected === index 
                      ? `${theme.palette.primary.light} !important` 
                      : 'transparent',
                    borderLeft:
                      selected === index
                        ? `4px solid ${theme.palette.primary.light}`
                        : '4px solid transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: `#ffd8ea !important`,
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Image
                      src={product.logo}
                      alt={product.name}
                      width={32}
                      height={32}
                      style={{ objectFit: 'cover' }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={product.name}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: selected === index 
                        ? theme.palette.getContrastText(theme.palette.primary.light) 
                        : 'inherit',
                    }}
                  />
                </ListItemButton>
              </motion.div>
            ))}
          </List>
        </Paper>

        {/* Image Carousel */}
        <Box sx={{ flex: 1, position: 'relative', minHeight: 400 }}>
          <AnimatePresence custom={direction}>
            <motion.div
              key={`${selected}-${carouselIndex}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Paper
                elevation={4}
                sx={{
                  height: '100%',
                  borderRadius: 6,
                  overflow: 'hidden',
                  position: 'relative',
                  background:
                    'linear-gradient(145deg, rgba(255,255,255,0.75), rgba(250,250,250,0.5))',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={products[selected].images[carouselIndex]}
                  alt={`${products[selected].name} UI`}
                  fill
                  style={{ objectFit: 'contain', padding: 24 }}
                  priority
                />
              </Paper>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 16,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            {products[selected].images.map((_, idx) => (
              <motion.div
                key={idx}
                onClick={() => {
                  setDirection(idx > carouselIndex ? 1 : -1);
                  setCarouselIndex(idx);
                }}
                whileHover={{ scale: 1.3 }}
                animate={{
                  backgroundColor:
                    idx === carouselIndex
                      ? theme.palette.primary.main
                      : theme.palette.grey[400],
                }}
                transition={{ duration: 0.2 }}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReadyMadeProducts;


