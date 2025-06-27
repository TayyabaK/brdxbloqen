// components/FinalCTA.tsx
import React from 'react';
import { Box, Typography, Button, Stack, useTheme, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useModal } from '@/contexts/modal-context';
import ContactModalWrapper from './modals/contact-modal-wrapper';

const CTAContainer = styled(Box)(({ theme }) => ({
  backdropFilter: 'blur(16px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.85),
  padding: theme.spacing(4),
  boxShadow: `0 12px 48px ${alpha(theme.palette.common.black, 0.15)}`,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  textAlign: 'center',
  width: '100%',
  margin: '0 auto',
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
  },
}));

const FinalCTA: React.FC = () => {
  const theme = useTheme();
  const { openModal } = useModal();

  const handleContactUs = () => {
    openModal(<ContactModalWrapper />);
  };

  return (
    <CTAContainer>
      <Typography
        variant='h5'
        fontWeight={700}
        gutterBottom
        sx={{
          fontSize: {
            xs: '1.25rem',
            sm: '1.5rem',
            md: '1.75rem',
            lg: '2rem',
            xl: '2.25rem',
          },
          lineHeight: 1.4,
        }}>
        Ready to launch or scale your Web3 project?
      </Typography>

      <Typography
        variant='subtitle1'
        sx={{
          color: theme.palette.text.primary,
          mb: 4,
          fontSize: {
            xs: '0.9rem',
            sm: '1rem',
            md: '1.15rem',
            lg: '1.25rem',
            xl: '1.35rem',
          },
        }}>
        Let’s build together.
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent='center'
        alignItems='center'
        flexWrap='wrap'>
        <Button
          component={motion.a}
          href='#book-call'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variant='contained'
          color='primary'
          size='medium'
          sx={{
            textTransform: 'none',
            px: 3,
            py: 1,
            fontWeight: 600,
            fontSize: {
              xs: '0.9rem',
              sm: '1rem',
              md: '1.1rem',
            },
            width: { xs: '100%', sm: 'auto' },
          }}
          onClick={handleContactUs}>
          Book a Free Call
        </Button>
        <Button
          component={motion.a}
          target='_blank'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variant='outlined'
          color='primary'
          size='medium'
          sx={{
            textTransform: 'none',
            px: 3,
            py: 1,
            fontWeight: 600,
            fontSize: {
              xs: '0.9rem',
              sm: '1rem',
              md: '1.1rem',
            },
            width: { xs: '100%', sm: 'auto' },
          }}
          onClick={handleContactUs}>
          Send Us a DM
        </Button>
      </Stack>

      <Box mt={4} textAlign={{ xs: 'left', sm: 'center' }}>
        <Typography
          sx={{
            fontSize: {
              xs: '0.85rem',
              sm: '1rem',
            },
          }}>
          WhatsApp:{' '}
          <Box component='span' fontWeight={700}>
            +52 1 2225244056
          </Box>
          <br />
          Email:{' '}
          <Box component='span' fontWeight={700}>
            ing.danielchavero@gmail.com
          </Box>
        </Typography>
      </Box>
    </CTAContainer>
  );
};

export default FinalCTA;
