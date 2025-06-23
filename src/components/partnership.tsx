'use client';

import React from 'react';
import { Box, Typography, Card, useMediaQuery, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { theme } from '@/theme/theme';

const partners = [
  {
    name: 'BRDigitech',
    description:
      'Bahrain-based dev agency, 8+ years experience, 51+ team size, 50+ successful Web3 apps.',
    icon: '/images/brd-logo.png',
    color: theme.palette.primary.main,
  },
  {
    name: 'Bloqen',
    description:
      'Founder-facing strategy, onboarding, and long-term vision — aligning Web3 products with business goals and growth potential.',
    icon: '/images/bloqen.png',
    color: 'black',
  },
];

const PartnershipSection = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

  return (
    <Box
      py={{ xs: 6, md: 10 }}
      px={{ xs: 2, sm: 4, md: 6 }}
      sx={{
        backgroundColor: '#ffffff',
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
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(60,220,218,0.08) 0%, rgba(60,220,218,0) 70%)',
        },
      }}>
      {/* Title Section */}
      <Box
        display='flex'
        justifyContent='center'
        mb={{ xs: 4, md: 6 }}
        position='relative'
        zIndex={1}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <Typography
            variant='h2'
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: '1.75rem',
                sm: '2.25rem',
                md: '2.75rem',
                lg: '3rem',
              },
              position: 'relative',
              display: 'inline-block',
              textAlign: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50%',
                height: '5px',
                background: 'linear-gradient(90deg, #7b61ff, #00c2ff)',
                borderRadius: 3,
              },
            }}>
            Our Partnership
          </Typography>
        </motion.div>
      </Box>

      {/* Combined Logo */}
      <Box
        display='flex'
        justifyContent='center'
        mb={{ xs: 4, md: 8 }}
        position='relative'
        zIndex={1}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          <Box
            component='img'
            src='/images/brdxbloqen.png'
            alt='BRD x Bloqen Logo'
            sx={{
              width: { xs: 280, sm: 350, md: 450 },
              height: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
            }}
          />
        </motion.div>
      </Box>

      {/* Partner Cards */}
      <Stack
        spacing={{ xs: 4, md: 6 }}
        direction={isMobile ? 'column' : 'row'}
        justifyContent='center'
        alignItems='stretch'
        sx={{
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
          maxWidth: 1400,
          mx: 'auto',
        }}>
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: 'spring',
              stiffness: 100,
            }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            style={{
              width: isMobile ? '100%' : '48%',
              maxWidth: 600,
              minWidth: 300,
            }}>
            <Card
              elevation={0}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                background: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(127, 127, 255, 0.6)',
                  background: 'rgba(255, 255, 255, 0.85)',
                },
              }}>
              {/* Animated Gradient Border */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, #a66cff, #3cdcda)',
                  borderRadius: '4px 4px 0 0',
                  opacity: 0.8,
                }}
              />

              <Typography
                variant='h3'
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: '1.5rem',
                    sm: '1.75rem',
                    md: '2rem',
                  },
                  background: partner.color,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  lineHeight: 1.2,
                }}>
                {partner.name}
              </Typography>

              <Typography
                variant='body1'
                sx={{
                  color: '#444',
                  fontSize: {
                    xs: '1rem',
                    sm: '1.1rem',
                    md: '1.15rem',
                  },
                  lineHeight: 1.7,
                }}>
                {partner.description}
              </Typography>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default PartnershipSection;
