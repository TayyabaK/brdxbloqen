'use client';

import {
  Box,
  Stack,
  Typography,
  IconButton,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useModal } from '@/contexts/modal-context';
import { useFormState } from 'react-dom';
import { useEffect, useState, useTransition } from 'react';

export default function ContactForm({
  action,
}: {
  action: (
    prevState: { success: boolean; error?: string; id?: string },
    formData: FormData
  ) => Promise<{
    success: boolean;
    error?: string;
    id?: string;
  }>;
}) {
  const { closeModal } = useModal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [state, formAction] = useFormState(action, { success: false });
  const [isPending, startTransition] = useTransition();

  const isFormValid =
    form.name.trim() && form.email.trim() && form.message.trim();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (state?.success) {
      setForm({ name: '', email: '', message: '' });
    }
  }, [state]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        zIndex: 1300,
      }}>
      <form onSubmit={handleSubmit}>
        <Stack
          spacing={3}
          sx={{
            width: '100%',
            maxWidth: { xs: 500, sm: 600, md: 700, lg: 720, xl: 768 },
            minWidth: { md: 600 },
            bgcolor: '#fff5f7',
            borderRadius: 2,
            p: 3,
            position: 'relative',
            border: `1px solid #ffd6e0`,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          }}>
          <IconButton
            onClick={closeModal}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              color: '#444',
              '&:hover': {
                backgroundColor: 'rgba(255, 179, 186, 0.2)',
                color: '#ffb3ba',
              },
            }}>
            <CloseIcon fontSize='small' />
          </IconButton>

          <Typography
            variant='h5'
            sx={{
              fontWeight: 700,
              fontFamily: 'Oxanium',
              color: '#444',
              textAlign: 'center',
              pt: 1,
            }}>
            Contact Us
          </Typography>

          {state?.success && (
            <Alert severity='success' sx={{ mt: 1 }}>
              ✅ Your message has been sent successfully!
            </Alert>
          )}
          {state?.error && (
            <Alert severity='error' sx={{ mt: 1 }}>
              {state.error}
            </Alert>
          )}

          <Stack spacing={2}>
            <TextField
              label='Name'
              name='name'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label='Email'
              name='email'
              type='email'
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label='Message'
              name='message'
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              multiline
              rows={4}
              fullWidth
              required
            />
          </Stack>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={isPending || !isFormValid}
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
            {isPending ? (
              <CircularProgress size={24} color='inherit' />
            ) : (
              'Send Message'
            )}
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
