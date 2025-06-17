'use client';

import {
  Box,
  Stack,
  Typography,
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useModal } from '@/contexts/modal-context';

interface ContactModalProps {
  onSubmit: (form: { name: string; email: string; message: string }) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onSubmit }) => {
  const { closeModal } = useModal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    onSubmit(form);
    setTimeout(() => {
      closeModal();
    }, 1000);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        zIndex: 1300,
      }}>
      <Stack
        spacing={3}
        sx={{
          width: '100%',
          maxWidth: 500,
          bgcolor: '#fff5f7',
          borderRadius: 2,
          p: 3,
          position: 'relative',
          border: `1px solid #ffd6e0`,
        }}>
        <IconButton
          onClick={closeModal}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            color: '#444',
            '&:hover': { color: '#ffb3ba' },
          }}>
          <CloseIcon fontSize='small' />
        </IconButton>

        <Typography
          variant='h5'
          sx={{ fontWeight: 700, fontFamily: 'Oxanium', color: '#444' }}>
          Contact Us
        </Typography>

        <Stack spacing={2}>
          <TextField
            label='Name'
            name='name'
            value={form.name}
            onChange={handleChange}
            fullWidth
            InputProps={{ style: { color: '#444' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ffd6e0' },
                '&:hover fieldset': { borderColor: '#ffc9de' },
              },
            }}
          />
          <TextField
            label='Email'
            name='email'
            value={form.email}
            onChange={handleChange}
            fullWidth
            InputProps={{ style: { color: '#444' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ffd6e0' },
                '&:hover fieldset': { borderColor: '#ffc9de' },
              },
            }}
          />
          <TextField
            label='Message'
            name='message'
            value={form.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            InputProps={{ style: { color: '#444' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#ffd6e0' },
                '&:hover fieldset': { borderColor: '#ffc9de' },
              },
            }}
          />
        </Stack>

        <Button
          onClick={handleSubmit}
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
          }}>
          {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactModal;
