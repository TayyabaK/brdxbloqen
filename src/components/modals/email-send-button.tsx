'use client';

import { Button, CircularProgress } from '@mui/material';
import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      variant='contained'
      color='primary'
      disabled={pending}
      sx={{
        textTransform: 'none',
        px: 3,
        py: 1.5,
        fontWeight: 600,
        fontSize: '1rem',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      }}>
      {pending ? (
        <CircularProgress size={24} color='inherit' />
      ) : (
        'Send Message'
      )}
    </Button>
  );
}
