// components/FinalCTA.tsx
import React from 'react';
import { Box, Typography, Button, Stack, useTheme, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useModal } from '@/contexts/modal-context';
import ContactModal from './modals/modal-contact-us';

const CTAContainer = styled(Box)(({ theme }) => ({
  backdropFilter: 'blur(16px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.85),
  padding: theme.spacing(3),
  boxShadow: `0 12px 48px ${alpha(theme.palette.common.black, 0.15)}`,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  textAlign: 'center',
  width: '100%',
  margin: '0 auto',
  marginTop: theme.spacing(8),
}));

const FinalCTA: React.FC = () => {
  const theme = useTheme();
  const { openModal } = useModal();

  const onSubmit = (form: { name: string; email: string; message: string }) => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Email sent successfully:', data);
        } else {
          console.error('Failed to send email:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleContactUs = () => {
    openModal(<ContactModal onSubmit={onSubmit} />);
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
        direction='row'
        spacing={2}
        justifyContent='center'
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
              lg: '1.15rem',
              xl: '1.2rem',
            },
          }}
          onClick={handleContactUs}>
          Book a Free Call
        </Button>
        <Button
          component={motion.a}
          href='https://twitter.com/messages/compose?recipient_id=YOUR_ID'
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
              lg: '1.15rem',
              xl: '1.2rem',
            },
          }}>
          Send Us a DM
        </Button>
      </Stack>

      <Box mt={4}>
        <Typography>
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
