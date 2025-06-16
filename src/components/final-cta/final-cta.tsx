// components/FinalCTA.tsx
import React from 'react';
import { Box, Typography, Button, Stack, useTheme, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const CTAContainer = styled(Box)(({ theme }) => ({
  backdropFilter: 'blur(16px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.85),
  padding: theme.spacing(3),
  boxShadow: `0 12px 48px ${alpha(theme.palette.common.black, 0.15)}`,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
  textAlign: 'center',
  width: '100%',
  margin: '0 auto',
  mt: 8,
}));

const FinalCTA: React.FC = () => {
  const theme = useTheme();

  return (
    <CTAContainer>
      <Typography
        variant='subtitle1'
        sx={{ color: theme.palette.text.primary, mb: 3 }}>
        Ready to launch or scale your Web3 project? <br />
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
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}>
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
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}>
          Send Us a DM
        </Button>
      </Stack>

      <Box mt={4}>
        <Typography
          variant='body2'
          sx={{ color: theme.palette.text.secondary }}>
          WhatsApp: <strong>+52 1 2225244056</strong>
          <br />
          Email: <strong>ing.danielchavero@gmail.com</strong>
        </Typography>
      </Box>
    </CTAContainer>
  );
};

export default FinalCTA;
