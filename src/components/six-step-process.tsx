'use client';

import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { theme } from '@/theme/theme'; // Adjust the import based on your theme setup

const steps = [
  {
    title: 'Explore',
    description: 'Understand your goals, community, and vision',
    color: '#6366F1', // indigo
    icon: '①',
  },
  {
    title: 'Define',
    description: "Build your project's roadmap and requirements",
    color: '#EC4899', // pink
    icon: '②',
  },
  {
    title: 'Visualise',
    description: 'UI/UX wireframes and front-end prototypes',
    color: '#F59E0B', // amber
    icon: '③',
  },
  {
    title: 'Develop',
    description: 'Smart contracts, dashboards, bots, integrations',
    color: '#10B981', // emerald
    icon: '④',
  },
  {
    title: 'Launch',
    description: 'Go live with tested, secure infrastructure',
    color: '#3B82F6', // blue
    icon: '⑤',
  },
  {
    title: 'Evaluate',
    description: 'Analyze performance, optimize post-launch',
    color: '#8B5CF6', // violet
    icon: '⑥',
  },
];

type Step = {
  title: string;
  description: string;
  color: string;
  icon: string;
};

interface StepCardProps {
  step: Step;
  index: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.16, 1, 0.3, 1],
          },
        },
        hidden: { opacity: 0, y: 40 },
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      style={{
        width: '100%',
        maxWidth: '380px',
        margin: '0 auto',
      }}>
      <Card
        elevation={0}
        sx={{
          borderRadius: '16px',
          height: '100%',
          background: 'white',
          boxShadow:
            '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '6px',
            height: '100%',
            background: step.color,
          },
        }}>
        <CardContent sx={{ p: 3 }}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              delay: index * 0.15 + 0.3,
              type: 'spring',
              stiffness: 300,
            }}
            style={{
              fontSize: '128px',
              fontWeight: 900,
              lineHeight: 1,
              color: step.color,
              opacity: 0.15,
              position: 'absolute',
              top: '-10px',
              right: '10px',
              zIndex: 0,
            }}>
            {step.icon}
          </motion.div>

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant='h5'
              component='h3'
              sx={{
                fontWeight: 700,
                mb: 1.5,
                color: step.color,
              }}>
              {step.title}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: 'text.secondary',
                lineHeight: 1.6,
              }}>
              {step.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SixStepProcess = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4 },
        background: theme.palette.primary.light, // Light background with transparency
      }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <Typography
          variant='h3'
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: 'text.primary',
          }}>
          Our 6-Step Process
        </Typography>
        <Typography
          variant='body1'
          sx={{
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
            mb: { xs: 4, md: 6 },
            color: 'text.secondary',
            fontSize: { xs: '1rem', md: '1.125rem' },
          }}>
          A proven methodology to bring your Web3 vision to life
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: { xs: 3, md: 4 },
          justifyContent: 'center',
          maxWidth: '1400px',
          mx: 'auto',
          '& > *': {
            flex: '1 1 300px',
            maxWidth: '380px',
          },
        }}>
        {steps.map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default SixStepProcess;
